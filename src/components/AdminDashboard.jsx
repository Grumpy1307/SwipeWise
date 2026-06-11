/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard({ translations, lang, gameCards, onAddCard, reportedScams, onResolveReport, apiKey }) {
  const [newCard, setNewCard] = useState({
    profileName: "",
    category: "Investment Scams",
    type: "scam",
    tag: "Ad",
    content: "",
    redFlags: "",
    explanation: "",
    verified: false
  });
  
  const [activeTab, setActiveTab] = useState("analytics");
  const [auditingReportId, setAuditingReportId] = useState(null);
  const [auditReportText, setAuditReportText] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const t = translations[lang] || translations.en;

  // Mock initial reports if none are in state
  const defaultReports = [
    { id: 9001, content: "Received WhatsApp message from +91-88274-91823 claiming to represent Groww Support. Asking to install remote access app AnyDesk to fix withdrawal limit.", timestamp: "2026-06-11 09:12", source: "India", status: "Pending" },
    { id: 9002, content: "Email from sec-refunds-claims@restitution-recovery-sec.org asking for $100 processing fee to release bank settlement payout.", timestamp: "2026-06-11 08:34", source: "United States", status: "Pending" },
    { id: 9003, content: "Chiringuito Forex broker calling from Cypriot number claiming 200% return on digital options investment within 10 days.", timestamp: "2026-06-10 17:45", source: "Spain", status: "Pending" }
  ];

  const activeReports = reportedScams.length > 0 ? reportedScams : defaultReports;

  const handleCreateCard = (e) => {
    e.preventDefault();
    if (!newCard.profileName || !newCard.content || !newCard.explanation) {
      triggerAlert("Please fill out Profile Name, Content, and Explanation!");
      return;
    }

    const formattedCard = {
      id: Date.now(),
      category: newCard.category,
      type: newCard.type,
      profileName: newCard.profileName,
      avatar: newCard.category === "Investment Scams" ? "📈" : newCard.category === "Deepfakes" ? "🤖" : "🔐",
      tag: newCard.tag,
      verified: newCard.verified,
      stats: { likes: "0", comments: "0", shares: "0" },
      content: newCard.content,
      redFlags: newCard.redFlags ? newCard.redFlags.split(",").map(f => f.trim()) : [],
      explanation: newCard.explanation
    };

    onAddCard(formattedCard);
    triggerAlert("Card deployed successfully to game deck!");
    setNewCard({
      profileName: "",
      category: "Investment Scams",
      type: "scam",
      tag: "Ad",
      content: "",
      redFlags: "",
      explanation: "",
      verified: false
    });
  };

  const triggerAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(""), 3000);
  };

  const handleAuditScam = async (report) => {
    setAuditingReportId(report.id);
    setAuditReportText("");

    try {
      if (!apiKey) {
        throw new Error("API Key missing");
      }

      const prompt = `You are a Senior Regulatory Compliance Auditor at IOSCO.
Analyze the following user scam report and draft a brief, formal Regulatory Action Alert.
Report to audit:
"${report.content}"

Output format:
**VERDICT:** [SCAM / SUSPICIOUS]
**FRAUD TYPE:** [e.g. Remote Access Malware, Recovery Fraud]
**LEGAL VIOLATIONS:** [List laws or regulatory codes violated, e.g. SEBI RA Regulations, SEC Anti-Fraud provisions]
**INVESTIGATION PLAN:** [2 actions for local regulators]
**PUBLIC WARNING DRAFT:** [1 concise sentence warning the public]`;

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
        setAuditReportText(text || "Error generating audit report.");
      } else {
        throw new Error(`API error: ${res.status}`);
      }
    } catch (e) {
      console.error(e);
      // Mock audit report
      setAuditReportText(`**VERDICT:** SCAM (High Risk)
**FRAUD TYPE:** Impersonation & Technical Social Engineering
**LEGAL VIOLATIONS:** Unlicensed Advisory & Impersonation of Regulated Entities
**INVESTIGATION PLAN:** 
1. Request domain registrar suspension of the suspicious entity.
2. Coordinate with local cyber crime units for IP tracing.
**PUBLIC WARNING DRAFT:** Do not authorize remote access software to unsolicited agents or pay advance fees to recover assets.`);
    }
  };

  const handlePublishReportToGame = (report) => {
    // Automatically convert report into a playable game card
    const card = {
      id: Date.now(),
      category: report.content.toLowerCase().includes("whatsapp") || report.content.toLowerCase().includes("support") ? "Impersonation" : "Phishing",
      type: "scam",
      profileName: "Reported Suspect",
      avatar: "🚨",
      tag: "Alert",
      verified: false,
      stats: { likes: "0", comments: "0", shares: "0" },
      content: report.content,
      redFlags: ["Reported by community users", "Unsolicited contact", "Urgency/payment pressures"],
      explanation: "This scenario matches a threat report submitted by users and flagged as fraudulent by regulatory audits."
    };
    onAddCard(card);
    onResolveReport(report.id);
    setAuditingReportId(null);
    triggerAlert("Report published to active game card deck!");
  };

  return (
    <div className="sw-glass-card" style={{ padding: "24px", maxWidth: "800px", margin: "0 auto", borderRadius: "20px" }}>
      {/* Admin Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px" }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "800" }}>🏛️ {t.adminDashboardTitle}</h2>
          <span style={{ fontSize: "11px", opacity: 0.6, letterSpacing: "1px" }}>IOSCO GLOBAL CONSOLE v1.4</span>
        </div>
        
        {/* Navigation Tabs */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={() => setActiveTab("analytics")} 
            className={`sw-confidence-btn ${activeTab === "analytics" ? "active" : ""}`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            📊 Analytics
          </button>
          <button 
            onClick={() => setActiveTab("reports")} 
            className={`sw-confidence-btn ${activeTab === "reports" ? "active" : ""}`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            🚨 User Reports ({activeReports.length})
          </button>
          <button 
            onClick={() => setActiveTab("manager")} 
            className={`sw-confidence-btn ${activeTab === "manager" ? "active" : ""}`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            ➕ Manage Cards
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {alertMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ background: "rgba(46, 213, 115, 0.2)", border: "1px solid var(--legit-color)", padding: "10px", borderRadius: "8px", color: "var(--legit-color)", fontSize: "13px", textAlign: "center", marginBottom: "16px", fontWeight: "bold" }}
          >
            {alertMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ minHeight: "350px" }}>
        {/* TAB 1: ANALYTICS HUB */}
        {activeTab === "analytics" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "16px" }}>Global Awareness Metrics</h3>
            
            {/* Cards row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "11px", opacity: 0.6 }}>TOTAL PLAYERS</span>
                <div style={{ fontSize: "26px", fontWeight: "800", marginTop: "4px", color: "#00d2ff" }}>142,590</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "11px", opacity: 0.6 }}>AVG AWARENESS INDEX</span>
                <div style={{ fontSize: "26px", fontWeight: "800", marginTop: "4px", color: "#2ed573" }}>71.4 /100</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", padding: "16px", borderRadius: "12px" }}>
                <span style={{ fontSize: "11px", opacity: 0.6 }}>ACTIVE DECK VOLUME</span>
                <div style={{ fontSize: "26px", fontWeight: "800", marginTop: "4px", color: "#7b2ff7" }}>{gameCards.length} Cards</div>
              </div>
            </div>

            {/* Jurisdiction Index Charts */}
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <h4 style={{ margin: "0 0 16px 0", fontSize: "14px", fontWeight: "700" }}>Awareness Index by Jurisdiction</h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span>🇮🇳 India (SEBI)</span>
                    <strong>74 / 100</strong>
                  </div>
                  <div style={{ height: "8px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "74%", background: "#ffa502" }}></div>
                  </div>
                </div>
                
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span>🇺🇸 United States (SEC)</span>
                    <strong>68 / 100</strong>
                  </div>
                  <div style={{ height: "8px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "68%", background: "#00d2ff" }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span>🇬🇧 United Kingdom (FCA)</span>
                    <strong>72 / 100</strong>
                  </div>
                  <div style={{ height: "8px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "72%", background: "#7b2ff7" }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span>🇪🇸 Spain (CNMV)</span>
                    <strong>61 / 100</strong>
                  </div>
                  <div style={{ height: "8px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "61%", background: "#ff4757" }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span>🇦🇪 United Arab Emirates (SCA)</span>
                    <strong>70 / 100</strong>
                  </div>
                  <div style={{ height: "8px", width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "70%", background: "#2ed573" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "14px", borderRadius: "12px", fontSize: "12px", color: "var(--text-secondary)" }}>
                🚩 <strong>Top Vulnerability Category:</strong> Impersonation scams (average fail rate 42%). Scammers spoofing regulator staff is highly effective.
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "14px", borderRadius: "12px", fontSize: "12px", color: "var(--text-secondary)" }}>
                🔥 <strong>Overconfidence Risk:</strong> 35% of players select "Very Confident" on cards where they register a wrong answer (mostly deepfake news).
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: USER SCAM REPORTS */}
        {activeTab === "reports" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "16px" }}>Scams Reported by Players</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {activeReports.map(report => (
                <div key={report.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", opacity: 0.6, marginBottom: "8px" }}>
                    <span>📌 Source: {report.source} | {report.timestamp}</span>
                    <span style={{ color: "#ffa502", fontWeight: "bold" }}>{report.status}</span>
                  </div>
                  <p style={{ margin: "0 0 12px 0", fontSize: "13px", lineHeight: "1.5" }}>"{report.content}"</p>
                  
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button 
                      onClick={() => handleAuditScam(report)} 
                      disabled={auditingReportId === report.id}
                      className="sw-confidence-btn"
                      style={{ fontSize: "11px", padding: "4px 10px", margin: 0 }}
                    >
                      🤖 Audit with Gemini AI
                    </button>
                    <button 
                      onClick={() => handlePublishReportToGame(report)}
                      className="sw-confidence-btn active"
                      style={{ fontSize: "11px", padding: "4px 10px", margin: 0, background: "var(--legit-color)", borderColor: "var(--legit-color)" }}
                    >
                      Publish to Game Deck
                    </button>
                  </div>

                  {auditingReportId === report.id && (
                    <div style={{ marginTop: "12px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "800", color: "#00d2ff" }}>AI AUDIT REPORT PREVIEW</span>
                        <button 
                          onClick={() => setAuditingReportId(null)}
                          style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "11px" }}
                        >
                          Close
                        </button>
                      </div>
                      
                      {auditReportText ? (
                        <div style={{ fontSize: "12px", lineHeight: "1.6", whiteSpace: "pre-wrap", color: "#e0e0e0" }}>
                          {auditReportText}
                        </div>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", opacity: 0.7 }}>
                          <div className="sw-wisebot-spinner" style={{ width: "16px", height: "16px" }}></div>
                          <span>Generating compliance report...</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 3: CONTENT CREATOR */}
        {activeTab === "manager" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "16px" }}>Deploy Custom Scenario Card</h3>
            
            <form onSubmit={handleCreateCard} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Profile / Handle Name</label>
                  <input
                    type="text"
                    placeholder="e.g. AngelOne VIP Tipster"
                    value={newCard.profileName}
                    onChange={(e) => setNewCard({...newCard, profileName: e.target.value})}
                    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box" }}
                  />
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Category</label>
                  <select
                    value={newCard.category}
                    onChange={(e) => setNewCard({...newCard, category: e.target.value})}
                    style={{ width: "100%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box" }}
                  >
                    <option value="Investment Scams">Investment Scams</option>
                    <option value="Deepfakes">Deepfakes</option>
                    <option value="Phishing">Phishing</option>
                    <option value="Impersonation">Impersonation</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Card Type</label>
                    <select
                      value={newCard.type}
                      onChange={(e) => setNewCard({...newCard, type: e.target.value})}
                      style={{ width: "100%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box" }}
                    >
                      <option value="scam">Scam</option>
                      <option value="legit">Legit</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Post Tag</label>
                    <select
                      value={newCard.tag}
                      onChange={(e) => setNewCard({...newCard, tag: e.target.value})}
                      style={{ width: "100%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box" }}
                    >
                      <option value="Ad">Ad</option>
                      <option value="Sponsored">Sponsored</option>
                      <option value="Official">Official</option>
                      <option value="Verified">Verified</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                  <input
                    type="checkbox"
                    checked={newCard.verified}
                    onChange={(e) => setNewCard({...newCard, verified: e.target.checked})}
                    id="verifiedCheck"
                  />
                  <label htmlFor="verifiedCheck" style={{ fontSize: "12px" }}>Show Verified Badge (✓)</label>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Card Scenario Content</label>
                  <textarea
                    placeholder="Enter social post content..."
                    value={newCard.content}
                    onChange={(e) => setNewCard({...newCard, content: e.target.value})}
                    style={{ width: "100%", height: "60px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box", resize: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Red Flags (Comma Separated)</label>
                  <input
                    type="text"
                    placeholder="Guaranteed returns, private Telegram link"
                    value={newCard.redFlags}
                    onChange={(e) => setNewCard({...newCard, redFlags: e.target.value})}
                    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Explanation</label>
                  <textarea
                    placeholder="Explain why this card is a scam or legit..."
                    value={newCard.explanation}
                    onChange={(e) => setNewCard({...newCard, explanation: e.target.value})}
                    style={{ width: "100%", height: "60px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white", boxSizing: "border-box", resize: "none" }}
                  />
                </div>
              </div>

              <div style={{ gridColumn: "span 2", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button
                  type="submit"
                  className="sw-start-btn"
                  style={{
                    padding: "10px 24px",
                    fontSize: "14px",
                    margin: 0,
                    borderRadius: "10px",
                    background: "var(--primary-color)"
                  }}
                >
                  Deploy Card to Live Registry
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
