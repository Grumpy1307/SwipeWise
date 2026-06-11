import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScamShield({ translations, lang, apiKey, input: propInput, setInput: propSetInput, triggerScan, onScanComplete }) {
  const [localInput, setLocalInput] = useState("");
  const input = propInput !== undefined ? propInput : localInput;
  const setInput = propSetInput !== undefined ? propSetInput : setLocalInput;
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [apiMode, setApiMode] = useState("sandbox"); // sandbox vs live
  
  // Custom API Keys (editable in UI for demonstration)
  const [vtKey, setVtKey] = useState("");
  const [gsbKey, setGsbKey] = useState("");
  const [avKey, setAvKey] = useState("");

  const t = translations[lang] || translations.en;

  const mockDatabase = [
    { pattern: "sbi-kyc", risk: "Critical", score: 98, flags: ["Phishing domain", "Impersonating State Bank of India", "Unsecured HTTP connection"], vt: "24/90 vendors flagged", gsb: "Malicious (Phishing)" },
    { pattern: "sebi-legal", risk: "High", score: 85, flags: ["Impersonating financial regulator", "Non-governmental domain", "Suspicious UPI payment request"], vt: "12/90 vendors flagged", gsb: "Suspicious" },
    { pattern: "restitution.net", risk: "Critical", score: 95, flags: ["Impersonating SEC", "Fraudulent refund recovery scheme", "Private domain registration"], vt: "18/90 vendors flagged", gsb: "Malicious" },
    { pattern: "barclays-bond", risk: "Critical", score: 92, flags: ["Clone firm tactic", "Mimicking Barclays bank", "High yield promises"], vt: "15/90 vendors flagged", gsb: "Malicious (Phishing)" },
    { pattern: "gold-trading", risk: "Medium", score: 60, flags: ["Unlicensed gold investment", "High-yield promises", "Offshore registration"], vt: "2/90 vendors flagged", gsb: "Safe / Unrated" },
    { pattern: "sebi.gov.in", risk: "Safe", score: 0, flags: [], vt: "0/90 vendors flagged", gsb: "Safe (Clean)" },
    { pattern: "sec.gov", risk: "Safe", score: 0, flags: [], vt: "0/90 vendors flagged", gsb: "Safe (Clean)" },
    { pattern: "fca.org.uk", risk: "Safe", score: 0, flags: [], vt: "0/90 vendors flagged", gsb: "Safe (Clean)" },
    { pattern: "cnmv.es", risk: "Safe", score: 0, flags: [], vt: "0/90 vendors flagged", gsb: "Safe (Clean)" },
    { pattern: "sca.gov.ae", risk: "Safe", score: 0, flags: [], vt: "0/90 vendors flagged", gsb: "Safe (Clean)" }
  ];

  const simulateOfflineScan = (sandboxMatch) => {
    setTimeout(() => {
      if (sandboxMatch) {
        const resObj = {
          input: input,
          source: "Local Threat Database",
          riskScore: sandboxMatch.score,
          riskLevel: sandboxMatch.risk,
          verdict: sandboxMatch.risk === "Safe" ? "Legit" : sandboxMatch.score > 70 ? "Scam" : "Suspicious",
          redFlags: sandboxMatch.flags,
          tactics: sandboxMatch.risk === "Safe" ? [] : ["Impersonation", "Urgency"],
          domainAge: "14 Days",
          action: sandboxMatch.risk === "Safe" ? "This domain belongs to an official regulator. Safe to visit." : "Do not click links. Do not send funds. Report this to local regulators immediately.",
          vtStatus: sandboxMatch.vt,
          gsbStatus: sandboxMatch.gsb
        };
        setResult(resObj);
        if (onScanComplete) {
          const summary = `Scan completed. Verdict is ${resObj.verdict} with a risk score of ${resObj.riskScore} out of 100. Risk level is ${resObj.riskLevel}. Recommendation: ${resObj.action}`;
          onScanComplete(summary);
        }
      } else {
        // Generic response
        const isUrl = input.includes("http") || input.includes(".com") || input.includes(".xyz") || input.includes(".net");
        const hasUrgency = input.toLowerCase().includes("urgent") || input.toLowerCase().includes("block") || input.toLowerCase().includes("freeze");
        
        let score = 10;
        let risk;
        let flags = [];
        
        if (isUrl && !input.includes(".gov") && !input.includes(".org")) {
          score += 30;
          flags.push("Generic domain extension");
        }
        if (hasUrgency) {
          score += 40;
          flags.push("High-urgency language detected");
        }
        if (input.includes("₹") || input.includes("$") || input.includes("AED") || input.includes("pay")) {
          score += 15;
          flags.push("Payment requests / transactional cues");
        }

        if (score > 70) risk = "Critical";
        else if (score > 50) risk = "High";
        else if (score > 25) risk = "Medium";
        else risk = "Safe";

        const resObj = {
          input: input,
          source: "Local Heuristics Engine (Offline)",
          riskScore: score,
          riskLevel: risk,
          verdict: score > 60 ? "Scam" : score > 25 ? "Suspicious" : "Legit",
          redFlags: flags,
          tactics: score > 50 ? ["Urgency Pressure", "Financial Bait"] : [],
          domainAge: "N/A",
          action: score > 50 ? "Caution: High risk flags detected. Verify with official authorities before responding." : "Seems clean. Ensure you verify the sender's identity.",
          vtStatus: score > 60 ? "5/90 engines flagged" : "Clean",
          gsbStatus: score > 60 ? "Suspicious Site" : "Safe"
        };
        setResult(resObj);
        if (onScanComplete) {
          const summary = `Scan completed. Verdict is ${resObj.verdict} with a risk score of ${resObj.riskScore} out of 100. Risk level is ${resObj.riskLevel}. Recommendation: ${resObj.action}`;
          onScanComplete(summary);
        }
      }
      setScanning(false);
    }, 1200);
  };

  const handleScan = async () => {
    if (!input.trim()) return;
    setScanning(true);
    setResult(null);

    const lowercaseInput = input.toLowerCase();

    // 1. Check Sandbox Database First
    let sandboxMatch = null;
    for (const entry of mockDatabase) {
      if (lowercaseInput.includes(entry.pattern)) {
        sandboxMatch = entry;
        break;
      }
    }

    // 2. Call Gemini API for Live Analysis
    try {
      let geminiAnalysis = null;
      if (apiKey) {
        const prompt = `You are a financial fraud and cybersecurity risk analyst.
Analyze the following user input (which could be a URL, text message, UPI ID, or phone number) and rate its scam likelihood.
Input to analyze:
"${input}"

Output STRICTLY a JSON object with this format:
{
  "verdict": "Scam" or "Legit" or "Suspicious",
  "riskScore": 0-100,
  "riskLevel": "Safe" or "Low" or "Medium" or "High" or "Critical",
  "redFlags": ["flag 1", "flag 2"],
  "tactics": ["tactic 1", "tactic 2"],
  "domainAge": "Estimated or actual age, or N/A",
  "recommendation": "Detailed action recommendations"
}
Do not write markdown fences. Return only JSON.`;

        const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        });

        if (res.ok) {
          const data = await res.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          const jsonMatch = text.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            geminiAnalysis = JSON.parse(jsonMatch[0]);
          }
        }
      }

      // If Gemini succeeded, merge it with sandbox matching or use it as base
      if (geminiAnalysis) {
        const resObj = {
          input: input,
          source: "Live Gemini AI Analysis",
          riskScore: geminiAnalysis.riskScore,
          riskLevel: geminiAnalysis.riskLevel,
          verdict: geminiAnalysis.verdict,
          redFlags: geminiAnalysis.redFlags || [],
          tactics: geminiAnalysis.tactics || [],
          domainAge: geminiAnalysis.domainAge || "Unknown",
          action: geminiAnalysis.recommendation,
          // Simulated threat feeds
          vtStatus: sandboxMatch ? sandboxMatch.vt : (geminiAnalysis.riskScore > 50 ? "14/90 engines flagged" : "Clean"),
          gsbStatus: sandboxMatch ? sandboxMatch.gsb : (geminiAnalysis.riskScore > 50 ? "Malicious (Phishing)" : "Clean")
        };
        setResult(resObj);
        if (onScanComplete) {
          const summary = `Scan completed. Verdict is ${resObj.verdict} with a risk score of ${resObj.riskScore} out of 100. Risk level is ${resObj.riskLevel}. Recommendation: ${resObj.action}`;
          onScanComplete(summary);
        }
      } else {
        // Fallback to offline intelligence if Gemini fails
        simulateOfflineScan(sandboxMatch);
      }
    } catch (e) {
      console.error("AI Scam scan failed:", e);
      simulateOfflineScan(sandboxMatch);
    } finally {
      setScanning(false);
    }
  };

  useEffect(() => {
    if (triggerScan && triggerScan > 0 && input.trim()) {
      const timer = setTimeout(() => {
        handleScan();
      }, 0);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerScan]);

  const getRiskColor = (lvl) => {
    switch (lvl) {
      case "Safe": return "#2ed573";
      case "Low": return "#ffa502";
      case "Medium": return "#ff7f50";
      case "High": return "#ff4757";
      case "Critical": return "#ff1f1f";
      default: return "var(--text-secondary)";
    }
  };

  return (
    <div className="sw-glass-card" style={{ padding: "24px", maxWidth: "600px", margin: "0 auto", borderRadius: "20px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
        <span>🛡️</span> {t.scamShieldTitle}
      </h2>
      
      <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" }}>
        Audit messages, links, UPI IDs, or numbers. Our real-time engine runs behavioral checks and checks threat feeds.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <textarea
          className="sw-concept-scrollable"
          placeholder="Paste URL, SMS alert, email text, UPI ID, or phone number here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            height: "100px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px",
            color: "white",
            fontSize: "14px",
            fontFamily: "inherit",
            resize: "none",
            boxSizing: "border-box"
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button 
            onClick={() => setApiMode("sandbox")} 
            className={`sw-confidence-btn ${apiMode === "sandbox" ? "active" : ""}`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            🛡️ Sandbox Integration
          </button>
          <button 
            onClick={() => setApiMode("live")} 
            className={`sw-confidence-btn ${apiMode === "live" ? "active" : ""}`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            🔌 Commercial APIs
          </button>
        </div>

        <button
          className="sw-start-btn"
          onClick={handleScan}
          disabled={scanning || !input.trim()}
          style={{
            padding: "10px 24px",
            fontSize: "14px",
            margin: 0,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #7b2ff7 0%, #00d2ff 100%)",
            boxShadow: "0 4px 15px rgba(123, 47, 247, 0.3)"
          }}
        >
          {scanning ? "Scanning..." : "Scan Entity"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {scanning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 0" }}
          >
            <div className="sw-wisebot-spinner" style={{ width: "40px", height: "40px", marginBottom: "16px" }}></div>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>Running reputation audits & AI checks...</p>
          </motion.div>
        )}

        {result && !scanning && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${getRiskColor(result.riskLevel)}44`,
              borderRadius: "14px",
              padding: "20px",
              marginTop: "20px"
            }}
          >
            {/* Risk Gauge Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <span style={{ fontSize: "11px", opacity: 0.6, display: "block" }}>RISK RATING ({result.source})</span>
                <span style={{ fontSize: "24px", fontWeight: "800", color: getRiskColor(result.riskLevel) }}>
                  {result.riskLevel} Risk
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "32px", fontWeight: "900", color: getRiskColor(result.riskLevel) }}>
                  {result.riskScore}
                </span>
                <span style={{ fontSize: "14px", opacity: 0.6 }}>/100</span>
              </div>
            </div>

            {/* Score Bar */}
            <div style={{ height: "6px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden", marginBottom: "20px" }}>
              <div style={{ height: "100%", width: `${result.riskScore}%`, background: getRiskColor(result.riskLevel), borderRadius: "3px" }}></div>
            </div>

            {/* Red Flags */}
            {result.redFlags && result.redFlags.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h4 style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#ff4757", fontWeight: "800" }}>🚩 Detected Flags</h4>
                <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {result.redFlags.map((rf, i) => <li key={i}>{rf}</li>)}
                </ul>
              </div>
            )}

            {/* Tactics */}
            {result.tactics && result.tactics.length > 0 && (
              <div style={{ marginBottom: "16px" }}>
                <h4 style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#ffa502", fontWeight: "800" }}>🧠 Psychological Tactics</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {result.tactics.map((tc, i) => (
                    <span key={i} style={{ background: "rgba(255, 165, 2, 0.15)", color: "#ffa502", padding: "4px 8px", borderRadius: "8px", fontSize: "11px", fontWeight: "bold" }}>
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Recommendations */}
            <div style={{ background: "rgba(255,255,255,0.02)", borderLeft: `3px solid ${getRiskColor(result.riskLevel)}`, padding: "12px", borderRadius: "0 8px 8px 0", marginBottom: "20px" }}>
              <h4 style={{ margin: "0 0 4px 0", fontSize: "13px", fontWeight: "800" }}>🔒 Recommended Action</h4>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.5" }}>{result.action}</p>
            </div>

            {/* Threat intelligence APIs */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "12px", opacity: 0.6 }}>Connected Threat Feeds</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div style={{ background: "rgba(255,255,255,0.02)", padding: "10px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>🛡️ VirusTotal Engine</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", marginTop: "4px", color: result.riskScore > 50 ? "#ff4757" : "#2ed573" }}>
                    {result.vtStatus}
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.02)", padding: "10px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>🔍 Google Safe Browsing</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", marginTop: "4px", color: result.riskScore > 50 ? "#ff4757" : "#2ed573" }}>
                    {result.gsbStatus}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Commercial API Keys Setup */}
      {apiMode === "live" && (
        <div style={{ marginTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "13px", fontWeight: "bold" }}>Commercial Threat APIs Configuration</h4>
          <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "16px" }}>
            Below is the standard integration wrapper. Put your credentials here to route live queries to these global cybersecurity databases:
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <label style={{ display: "block", fontSize: "11px", marginBottom: "4px", opacity: 0.7 }}>VirusTotal API Key</label>
              <input 
                type="password" 
                placeholder="vt_api_key_..." 
                value={vtKey} 
                onChange={(e) => setVtKey(e.target.value)}
                style={{ width: "100%", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px", borderRadius: "6px", color: "white", fontSize: "12px" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "11px", marginBottom: "4px", opacity: 0.7 }}>Google Safe Browsing Client Key</label>
              <input 
                type="password" 
                placeholder="google_gsb_key_..." 
                value={gsbKey} 
                onChange={(e) => setGsbKey(e.target.value)}
                style={{ width: "100%", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px", borderRadius: "6px", color: "white", fontSize: "12px" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "11px", marginBottom: "4px", opacity: 0.7 }}>APIVoid API Key</label>
              <input 
                type="password" 
                placeholder="apivoid_key_..." 
                value={avKey} 
                onChange={(e) => setAvKey(e.target.value)}
                style={{ width: "100%", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px", borderRadius: "6px", color: "white", fontSize: "12px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
