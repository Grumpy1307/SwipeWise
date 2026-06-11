import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import "./SwipeWise.css";
import { GAME_CARDS } from "../data/gameCards";
import { LEARN_MODULES } from "../data/learnModules";
import { TRANSLATIONS, translateCard } from "../data/translations";
import { JURISDICTIONS } from "../data/jurisdictions";
import ScamShield from "./ScamShield";
import AdminDashboard from "./AdminDashboard";

const ASSET_URLS = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});
const ASSETS_BY_NAME = Object.fromEntries(
  Object.entries(ASSET_URLS).map(([p, v]) => {
    const name = p.split("/").pop();
    const url = typeof v === "string" ? v : v?.default;
    return [name, url];
  })
);

const resolveAssetUrl = (v) => {
  if (!v || typeof v !== "string") return v;
  if (v.startsWith("/src/assets/")) return ASSETS_BY_NAME[v.replace("/src/assets/", "")] || v;
  if (v.startsWith("src/assets/")) return ASSETS_BY_NAME[v.replace("src/assets/", "")] || v;
  if (v.startsWith("/assets/")) return v;
  if (v.includes("://")) return v;
  return ASSETS_BY_NAME[v] || v;
};

const CATEGORIES = ["Investment Scams", "Deepfakes", "Phishing", "Impersonation"];

const getTitle = (s) => (s <= 40 ? "Scam Rookie" : s <= 70 ? "Fraud Detective" : "Scam Slayer");
const getTitleColor = (s) => (s <= 40 ? "#ff4757" : s <= 70 ? "#ffa502" : "#2ed573");
const getTitleEmoji = (s) => (s <= 40 ? "⚠️" : s <= 70 ? "🕵️" : "🛡️");

const LEARN_TOPICS = [
  { id: "beginner", title: "I'm New to Investing", desc: "Beginner guided mode covering basics of scams, fake returns, and phishing.", icon: "🌱", diff: "Beginner" },
  { id: "basics", title: "Investing Basics", desc: "How markets work, risk vs return, SIPs, and diversification.", icon: "📈", diff: "Beginner" },
  { id: "scams", title: "Investment Scams", desc: "Guaranteed returns, ponzi schemes, and fake advisors.", icon: "🚨", diff: "Intermediate" },
  { id: "fno", title: "F&O / Trading Traps", desc: "Leverage risks, Telegram tips, and 'sure-shot' calls.", icon: "⚡", diff: "Advanced" },
  { id: "phishing", title: "Phishing & KYC Fraud", desc: "Fake bank links, OTP scams, and account blocking threats.", icon: "🔐", diff: "Intermediate" },
  { id: "deepfakes", title: "Deepfakes & AI Fraud", desc: "Celebrity scams, cloned voices, and fake interviews.", icon: "🤖", diff: "Advanced" },
  { id: "social", title: "Social Media Fraud", desc: "Instagram scams, WhatsApp groups, and fake influencers.", icon: "💬", diff: "Beginner" },
  { id: "banking", title: "Banking & Payments", desc: "UPI scams, QR code fraud, and remote access apps.", icon: "🏦", diff: "Intermediate" },
  { id: "identity", title: "Identity Impersonation", desc: "Fake broker support, SEBI officials, and public figures.", icon: "👤", diff: "Advanced" },
  { id: "psych", title: "Psychological Manipulation", desc: "Urgency tactics, FOMO, authority bias, and fear-based scams.", icon: "🧠", diff: "Advanced" },
  { id: "safe", title: "Safe Investing Practices", desc: "SEBI registration checks, secure passwords, and 2FA.", icon: "🛡", diff: "Beginner" }
];

const MASCOTS = [
  { 
    id: "gem", 
    name: "Gemmy", 
    img: "/src/assets/mascot_gem.webp", 
    happyImg: "/src/assets/mascot_gem_happy.webp", 
    sadImg: "/src/assets/mascot_gem_sad.webp", 
    color: "#00d2ff" 
  },
  { 
    id: "bag", 
    name: "Baggie", 
    img: "/src/assets/mascot_baggie.webp", 
    happyImg: "/src/assets/mascot_baggie_happy.webp", 
    sadImg: "/src/assets/mascot_baggie_sad.webp", 
    color: "#2ed573" 
  },
  { 
    id: "naruto", 
    name: "Naruto", 
    img: "/src/assets/mascot_naruto.webp", 
    happyImg: "/src/assets/mascot_naruto_happy.webp", 
    sadImg: "/src/assets/mascot_naruto_sad.webp", 
    color: "#ffa502" 
  },
  { 
    id: "doraemon", 
    name: "Doraemon", 
    img: "/src/assets/mascot_dora.webp", 
    happyImg: "/src/assets/mascot_dora_happy.webp", 
    sadImg: "/src/assets/mascot_dora_sad.webp", 
    color: "#00d2ff" 
  }
];

const getNow = () => performance.now();

const GAME_QUESTION_COUNT = 10;
const isMediaCard = (c) => Boolean(c?.image || c?.video);

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const RadarChart = ({ cats, scores, color }) => {
  const cx = 100, cy = 100, r = 70;
  const angles = cats.map((_, i) => (Math.PI * 2 * i) / cats.length - Math.PI / 2);
  const points = cats.map((cat, i) => {
    const v = (scores[cat] || 0) / 100;
    return {
      x: cx + r * v * Math.cos(angles[i]),
      y: cy + r * v * Math.sin(angles[i])
    };
  });

  return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", maxWidth: "250px" }}>
      {/* Grid */}
      {[0.25, 0.5, 0.75, 1].map((lv, gi) => (
        <polygon
          key={gi}
          points={cats.map((_, i) =>
            `${cx + r * lv * Math.cos(angles[i])},${cy + r * lv * Math.sin(angles[i])}`
          ).join(" ")}
          fill="none"
          stroke="rgba(123, 47, 247, 0.1)"
          strokeWidth="1"
        />
      ))}
      {/* Axes */}
      {cats.map((_, i) => (
        <line
          key={i}
          x1={cx} y1={cy}
          x2={cx + r * Math.cos(angles[i])}
          y2={cy + r * Math.sin(angles[i])}
          stroke="rgba(123, 47, 247, 0.1)"
          strokeWidth="1"
        />
      ))}
      {/* Data Area */}
      <polygon
        points={points.map(p => `${p.x},${p.y}`).join(" ")}
        fill={`${color}22`}
        stroke={color}
        strokeWidth="2"
      />
      {/* Labels */}
      {cats.map((cat, i) => {
        const lx = cx + (r + 15) * Math.cos(angles[i]);
        const ly = cy + (r + 15) * Math.sin(angles[i]);
        return (
          <text
            key={i}
            x={lx} y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#666"
            fontSize="8"
            fontWeight="600"
          >
            {cat}
          </text>
        );
      })}
    </svg>
  );
};

export default function SwipeWise() {
  const [screen, setScreen] = useState("intro");
  const [lang, setLang] = useState("en");
  const [jurisdiction, setJurisdiction] = useState("in");
  const [translatingDeck, setTranslatingDeck] = useState(false);
  const [customCards, setCustomCards] = useState([]);
  const [reportedScams, setReportedScams] = useState([]);
  const [activePopup, setActivePopup] = useState(null); // "lang" | "jurisdiction" | null
  
  // Accessibility
  const [ttsActive, setTtsActive] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState("");
  const recognitionRef = useRef(null);
  
  // ScamShield programmatic controls
  const [scamShieldInput, setScamShieldInput] = useState("");
  const [scamShieldTrigger, setScamShieldTrigger] = useState(0);

  // Sync RTL layout
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [lang]);

  const [selectedMascot, setSelectedMascot] = useState(null);
  const [deck, setDeck] = useState([]);
  const [ci, setCi] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showReveal, setShowReveal] = useState(false);
  const [lastAnswer, setLastAnswer] = useState(null);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [cardStart, setCardStart] = useState(null);
  const [times, setTimes] = useState([]);
  const [activeProfileTab, setActiveProfileTab] = useState("activity");
  const activeVideoRef = useRef(null);
  const [wiseBotOpen, setWiseBotOpen] = useState(false);
  const [wiseBotLoading, setWiseBotLoading] = useState(false);
  const [wiseBotResponse, setWiseBotResponse] = useState(null);
  const wiseBotCacheRef = useRef({});
  const [gameMode, setGameMode] = useState("game");
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [learnStep, setLearnStep] = useState("concept"); // concept, swipe, reveal
  const [currentConfidence, setCurrentConfidence] = useState(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Motion values for swiping
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-35, 35]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const scamOpacity = useTransform(x, [-100, -50], [1, 0]);
  const legitOpacity = useTransform(x, [50, 100], [0, 1]);

  // Dynamic Deck Builders
  const getDynamicGameDeck = useCallback(() => {
    const activeRegistry = [
      ...GAME_CARDS,
      ...customCards,
      ...(JURISDICTIONS[jurisdiction]?.cards || [])
    ];
    const media = activeRegistry.filter(isMediaCard);
    if (media.length >= GAME_QUESTION_COUNT) {
      return shuffle(media).slice(0, GAME_QUESTION_COUNT);
    }
    const others = activeRegistry.filter((c) => !isMediaCard(c));
    const needed = GAME_QUESTION_COUNT - media.length;
    const pickedOthers = shuffle(others).slice(0, needed);
    return shuffle([...media, ...pickedOthers]);
  }, [customCards, jurisdiction]);

  const getDynamicLearnDeck = useCallback((topicId) => {
    const activeRegistry = [
      ...LEARN_MODULES,
      ...(JURISDICTIONS[jurisdiction]?.learnModules || [])
    ];
    const modules = activeRegistry.filter(m => m.topicId === topicId);
    const order = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
    return modules.sort((a, b) => order[a.level] - order[b.level]);
  }, [jurisdiction]);

  const handleModeSelect = useCallback((mode) => {
    setGameMode(mode);
    if (mode === "learn") {
      setScreen("topic-select");
    } else {
      setScreen("mascot-select");
    }
  }, []);

  const handleTopicSelect = useCallback((topicId) => {
    setSelectedTopicId(topicId);
    setScreen("mascot-select");
  }, []);

  const triggerVibration = useCallback((type = "medium") => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      if (type === "heavy") navigator.vibrate([100]);
      else if (type === "success") navigator.vibrate([50, 50, 50]);
      else if (type === "error") navigator.vibrate([100, 50, 100]);
      else navigator.vibrate(50);
    }
  }, []);

  const handleExitHome = useCallback(() => setShowExitConfirm(true), []);
  const confirmExit = useCallback(() => {
    setShowExitConfirm(false);
    setScreen("intro");
  }, []);

  const handleMascotSelect = useCallback(async (mascot) => {
    setSelectedMascot(mascot);
    setCi(0);
    setAnswers([]);
    setTimes([]);
    setShowReveal(false);
    setCurrentConfidence(null);
    setLastAnswer(null);
    setStreak(0);
    setMaxStreak(0);
    x.set(0);
    setCardStart(getNow());

    let finalDeck;
    if (gameMode === "learn") {
      const learnDeck = getDynamicLearnDeck(selectedTopicId);
      finalDeck = learnDeck.map(m => ({
        ...m.card,
        id: m.id,
        moduleData: m
      }));
    } else {
      finalDeck = getDynamicGameDeck();
    }

    if (lang !== "en") {
      setTranslatingDeck(true);
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const translated = await Promise.all(
          finalDeck.map(card => translateCard(card, lang, apiKey))
        );
        setDeck(translated);
        setTranslatingDeck(false);
        if (gameMode === "learn") {
          setLearnStep("concept");
          setScreen("game");
        } else {
          setScreen("tutorial");
        }
      } catch (err) {
        console.warn("AI translation of deck failed, loading fallback:", err);
        setDeck(finalDeck);
        setTranslatingDeck(false);
        if (gameMode === "learn") {
          setLearnStep("concept");
          setScreen("game");
        } else {
          setScreen("tutorial");
        }
      }
    } else {
      setDeck(finalDeck);
      if (gameMode === "learn") {
        setLearnStep("concept");
        setScreen("game");
      } else {
        setScreen("tutorial");
      }
    }
  }, [gameMode, selectedTopicId, getDynamicLearnDeck, getDynamicGameDeck, lang, x]);

  const voiceActiveRef = useRef(voiceActive);
  useEffect(() => {
    voiceActiveRef.current = voiceActive;
  }, [voiceActive]);

  // Warm up the speech synthesis voices cache
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);
      return () => {
        window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
      };
    }
  }, []);

  // Accessibility: Text-to-Speech
  const speakText = useCallback((text) => {
    if (!text) return;
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    const langCodes = { en: "en-US", hi: "hi-IN", ar: "ar-AE", es: "es-ES" };
    const targetLangCode = langCodes[lang] || "en-US";
    const langPrefix = lang.toLowerCase();
    
    // Filter voices matching the target language prefix (e.g., "hi", "ar", "es", "en")
    const matchingVoices = voices.filter(v => {
      const vLang = v.lang.toLowerCase().replace('_', '-');
      return vLang.startsWith(langPrefix) || vLang === langPrefix;
    });

    let selectedVoice = null;
    if (matchingVoices.length > 0) {
      // Prioritize premium/natural/Google/neural voices if available
      selectedVoice = matchingVoices.find(v => 
        v.name.toLowerCase().includes("premium") || 
        v.name.toLowerCase().includes("natural") || 
        v.name.toLowerCase().includes("google") ||
        v.name.toLowerCase().includes("neural")
      ) || matchingVoices.find(v => v.lang === targetLangCode) || matchingVoices[0];
    }
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.lang = targetLangCode;
    
    // Adjust rate and pitch slightly for a more natural human cadence
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => setTtsActive(true);
    utterance.onend = () => setTtsActive(false);
    utterance.onerror = () => setTtsActive(false);
    
    window.speechSynthesis.speak(utterance);
  }, [lang]);

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel();
    setTtsActive(false);
  }, []);



  const stopActiveVideo = useCallback(() => {
    const v = activeVideoRef.current;
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
    } catch {
      // ignore
    }
  }, []);

  const fetchWiseBotAnalysis = useCallback(async (card, isRetry = false) => {
    if (!isRetry && wiseBotCacheRef.current[card.id]) {
      setWiseBotResponse(wiseBotCacheRef.current[card.id]);
      setWiseBotOpen(true);
      return;
    }
    
    setWiseBotLoading(true);
    setWiseBotResponse(null);
    setWiseBotOpen(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const regName = JURISDICTIONS[jurisdiction]?.regulator || "SEBI";
      const prompt = `You are a financial fraud detection assistant trained on ${regName} guidelines.
Analyze the following message and classify it.
Output strictly in JSON format:
{
  "verdict": "Scam" or "Legit",
  "confidence": "High" or "Medium" or "Low",
  "red_flags": ["flag 1", "flag 2"],
  "tactics": ["Psychological manipulation used", "Urgency"],
  "action": "What the user should do"
}
Message:
"${card.content}"`;

      const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Gemini API Error:", errorData);
        
        if (res.status === 429) {
          throw new Error("WiseBot is currently busy (Rate limit reached). The free tier quota might be exhausted for today. Please try again in a few minutes.");
        }
        
        throw new Error(`API request failed (Status: ${res.status}). ${errorData.error?.message || ""}`);
      }
      
      const data = await res.json();
      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResponse) throw new Error("Empty response from WiseBot");
      
      const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("Could not find analysis data in WiseBot response.");
      const parsed = JSON.parse(jsonMatch[0]);
      
      wiseBotCacheRef.current[card.id] = parsed;
      setWiseBotResponse(parsed);
    } catch (err) {
      console.error(err);
      setWiseBotResponse({ error: err.message || "Failed to analyze message. Please try again later." });
    } finally {
      setWiseBotLoading(false);
    }
  }, [jurisdiction]);

  const handleRevealAnswer = useCallback(() => {
    if (showReveal) return;
    stopActiveVideo();
    const card = deck[ci];
    const correct = true; // Mark neutral as correct for UI purposes
    const t = Math.round(getNow() - cardStart);
    
    setTimes((p) => [...p, t]);
    setLastAnswer({ correct, userSays: "revealed", card });
    setAnswers((p) => [...p, { cardId: card.id, correct: true, category: card.category, time: t, revealed: true, confidence: currentConfidence }]);
    
    setShowReveal(true);
    if (gameMode === "learn") {
      setLearnStep("reveal");
    }
  }, [ci, showReveal, cardStart, deck, stopActiveVideo, currentConfidence, gameMode]);

  const handleSwipe = useCallback((dir) => {
    if (showReveal) return;
    stopActiveVideo();
    const card = deck[ci];
    const userSays = dir === "left" ? "scam" : "legit";
    const correct = userSays === card.type;
    
    // Overconfidence Risk
    if (!correct && currentConfidence === "high") {
      triggerVibration("heavy");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    } else {
      triggerVibration(correct ? "success" : "error");
    }

    const t = Math.round(getNow() - cardStart);
    
    setTimes((p) => [...p, t]);
    setLastAnswer({ correct, userSays, card });
    setAnswers((p) => [...p, { cardId: card.id, correct, category: card.category, time: t, confidence: currentConfidence }]);
    
    if (correct) {
      setStreak(s => {
        const ns = s + 1;
        setMaxStreak(ms => Math.max(ms, ns));
        return ns;
      });
    } else {
      setStreak(0);
    }
    setShowReveal(true);
    if (gameMode === "learn") {
      setLearnStep("reveal");
    }
  }, [ci, showReveal, cardStart, deck, stopActiveVideo, currentConfidence, gameMode, triggerVibration]);

  const handleNext = useCallback(() => {
    stopActiveVideo();
    setShowReveal(false);
    setLastAnswer(null);
    setCurrentConfidence(null);
    setWiseBotOpen(false); // Close WiseBot if it was open
    x.set(0);
    if (ci + 1 >= deck.length) {
      setScreen("score");
    } else {
      setCi(c => c + 1);
      if (gameMode === "learn") {
        setLearnStep("concept");
      }
      setCardStart(getNow());
    }
  }, [ci, x, deck.length, stopActiveVideo, gameMode]);

  // Calculations
  const stats = useMemo(() => {
    const totalQuestions = deck.length || GAME_QUESTION_COUNT;
    const answeredCards = answers.filter((a) => !a.revealed);
    const correctAnswers = answeredCards.filter((a) => a.correct).length;
    const accuracy = answeredCards.length ? Math.round((correctAnswers / answeredCards.length) * 100) : 0;
    
    const avgTime = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
    // Speed Score: 100 if < 3s, linear drop to 0 at 15s
    const speedScore = Math.max(0, Math.min(100, Math.round(100 - (Math.max(0, avgTime - 3000) / 120))));
    
    // Streak Score: linear reward up to total questions
    const streakScore = totalQuestions ? Math.min(100, Math.round((maxStreak / totalQuestions) * 100)) : 0;

    let trustIndex;
    if (gameMode === "learn") {
      trustIndex = answeredCards.length > 0 ? accuracy : 100;
    } else {
      trustIndex = Math.round((accuracy * 0.8) + (streakScore * 0.1) + (speedScore * 0.1));
    }
    
    let confidenceScore = 0;
    let overconfidenceRisk = 0;

    answeredCards.forEach((a) => {
      if (a.correct) {
        if (a.confidence === "high") confidenceScore += 10;
        else if (a.confidence === "low") confidenceScore += 5;
        else confidenceScore += 7; // Medium
      } else {
        if (a.confidence === "high") {
          confidenceScore -= 10;
          overconfidenceRisk += 1;
        }
        else if (a.confidence === "low") confidenceScore -= 3;
        else confidenceScore -= 5; // Medium
      }
    });
    
    const catScores = {};
    const vulnerabilities = [];
    const strengths = [];
    
    CATEGORIES.forEach((cat) => {
      const ca = answeredCards.filter((a) => a.category === cat);
      if (ca.length > 0) {
        const score = Math.round((ca.filter((a) => a.correct).length / ca.length) * 100);
        catScores[cat] = score;
        if (score <= 50) vulnerabilities.push(cat);
        else if (score >= 80) strengths.push(cat);
      } else {
        catScores[cat] = 0;
      }
    });

    return { accuracy, trustIndex, catScores, correctCount: correctAnswers, confidenceScore, overconfidenceRisk, vulnerabilities, strengths };
  }, [answers, times, maxStreak, deck.length, gameMode]);

  const { accuracy, trustIndex, catScores, correctCount, confidenceScore, overconfidenceRisk, vulnerabilities, strengths } = stats;

  const getScreenNarrationText = useCallback(() => {
    let textToSpeak = "";
    if (screen === "setup") {
      textToSpeak = "Welcome to SwipeWise! You are in Accessibility Voice Guide Mode. Press Spacebar to repeat this guide. Speak english, hindi, arabic, or spanish to change language. Say: india, usa, uk, spain, or uae to select country. Say continue to start playing.";
    } else if (screen === "intro") {
      textToSpeak = "Welcome to SwipeWise! You are in Accessibility Voice Guide Mode. Press Spacebar to repeat this guide. Home screen. Speak: 'Learn Mode' to learn, or 'Game Mode' to start the challenge. You can also say 'Shield' to check links, or 'Portal' for regulatory metrics. To customize your language, say: english, hindi, arabic, or spanish. To customize country, say: india, usa, uk, spain, or uae.";
    } else if (screen === "topic-select") {
      textToSpeak = "Choose your learning path. Topics are: beginner, basics, scams, trading, phishing, deepfakes, social, banking, identity, psychology, or safe.";
    } else if (screen === "mascot-select") {
      textToSpeak = "Select your partner mascot. Say: Naruto, Baggie, Gemmy, or Doraemon.";
    } else if (screen === "tutorial") {
      textToSpeak = "How to play. You will see social media messages. Swipe left or say 'Scam' for scams. Swipe right or say 'Legit' for real posts. Say continue to start playing.";
    } else if (screen === "game") {
      if (gameMode === "learn" && learnStep === "concept") {
        const module = deck[ci]?.moduleData;
        if (module) {
          textToSpeak = `Concept Lesson: ${module.title}. Concept description: ${module.concept}. For example: ${module.example}. Say continue to start practicing.`;
        }
      } else if (showReveal) {
        const correctStatus = lastAnswer?.correct ? "Correct answer!" : "Wrong answer.";
        const typeStatus = deck[ci]?.type === "scam" ? "This was a Scam." : "This was Legit.";
        textToSpeak = `${correctStatus} ${typeStatus} Explanation: ${deck[ci]?.explanation || ""}. Say next or continue to go to the next card.`;
      } else {
        textToSpeak = `Card ${ci + 1} of ${deck.length}. Category: ${deck[ci]?.category || ""}. Post content: ${deck[ci]?.content || ""}. Is this a scam or legit? Speak 'scam' or 'legit'. You can also say 'wise bot' for regulatory analysis.`;
      }
    } else if (screen === "score") {
      textToSpeak = `Completed! Your Awareness Index is ${trustIndex} out of 100. Accuracy is ${accuracy} percent. Say play again to restart, or profile to view metrics.`;
    } else if (screen === "profile") {
      textToSpeak = `Profile screen. Your Awareness Index is ${trustIndex}. Say back to return to score.`;
    } else if (screen === "scamshield") {
      textToSpeak = "ScamShield tools. Speak 'Scan' followed by a link to audit it. Speak home to go back.";
    } else if (screen === "admin") {
      textToSpeak = "Regulatory Portal. Speak home to return to main menu.";
    }
    return textToSpeak;
  }, [screen, ci, showReveal, learnStep, deck, gameMode, lastAnswer, trustIndex, accuracy]);

  const triggerScreenNarration = useCallback(() => {
    const text = getScreenNarrationText();
    if (text) {
      speakText(text);
    }
  }, [getScreenNarrationText, speakText]);

  // Accessibility: Voice Commands Parser
  const handleVoiceCommand = useCallback((command) => {
    const cmd = command.toLowerCase().trim();
    
    // 1. Language Setup
    if (cmd.includes("english")) {
      setLang("en");
      speakText("Language set to English.");
      return;
    }
    if (cmd.includes("hindi") || cmd.includes("हिंदी")) {
      setLang("hi");
      speakText("भाषा बदलकर हिंदी कर दी गई है।");
      return;
    }
    if (cmd.includes("arabic") || cmd.includes("العربية")) {
      setLang("ar");
      speakText("تم تغيير اللغة إلى العربية.");
      return;
    }
    if (cmd.includes("spanish") || cmd.includes("español")) {
      setLang("es");
      speakText("Idioma cambiado a español.");
      return;
    }

    // 2. Jurisdiction Setup
    if (cmd.includes("india") || cmd.includes("भारत")) {
      setJurisdiction("in");
      speakText("Jurisdiction set to India.");
      return;
    }
    if (cmd.includes("usa") || cmd.includes("america") || cmd.includes("sec")) {
      setJurisdiction("us");
      speakText("Jurisdiction set to USA.");
      return;
    }
    if (cmd.includes("uk") || cmd.includes("united kingdom") || cmd.includes("london") || cmd.includes("fca")) {
      setJurisdiction("uk");
      speakText("Jurisdiction set to United Kingdom.");
      return;
    }
    if (cmd.includes("spain") || cmd.includes("españa") || cmd.includes("cnmv")) {
      setJurisdiction("es");
      speakText("Jurisdiction set to Spain.");
      return;
    }
    if (cmd.includes("uae") || cmd.includes("emirates") || cmd.includes("dubai") || cmd.includes("sca")) {
      setJurisdiction("ae");
      speakText("Jurisdiction set to United Arab Emirates.");
      return;
    }

    // 3. Navigation between screens
    if (cmd.includes("learn mode") || cmd.includes("start learn") || cmd.includes("learning")) {
      handleModeSelect("learn");
      return;
    }
    if (cmd.includes("game mode") || cmd.includes("start game") || cmd.includes("playing mode")) {
      handleModeSelect("game");
      return;
    }
    if (cmd.includes("shield") || cmd.includes("scam shield") || cmd.includes("scamshield")) {
      setScreen("scamshield");
      return;
    }
    if (cmd.includes("portal") || cmd.includes("admin portal") || cmd.includes("dashboard")) {
      setScreen("admin");
      return;
    }
    if (cmd.includes("home") || cmd.includes("exit")) {
      setScreen("intro");
      return;
    }
    if (cmd.includes("profile")) {
      setScreen("profile");
      return;
    }
    if (cmd.includes("back") || cmd.includes("return")) {
      if (screen === "profile" || screen === "share") {
        setScreen("score");
      } else if (screen === "topic-select" || screen === "mascot-select" || screen === "tutorial") {
        setScreen("intro");
      } else {
        setScreen("intro");
      }
      return;
    }
    if (cmd.includes("play again") || cmd.includes("restart")) {
      setCi(0);
      setAnswers([]);
      setShowReveal(false);
      setLastAnswer(null);
      setStreak(0);
      setMaxStreak(0);
      setTimes([]);
      setScreen("intro");
      return;
    }

    // 4. Topic Selection (Screen: topic-select)
    if (screen === "topic-select") {
      if (cmd.includes("beginner") || cmd.includes("new")) {
        handleTopicSelect("beginner");
        return;
      }
      if (cmd.includes("basics") || cmd.includes("investing basics")) {
        handleTopicSelect("basics");
        return;
      }
      if (cmd.includes("scams") || cmd.includes("investment scams")) {
        handleTopicSelect("scams");
        return;
      }
      if (cmd.includes("trading") || cmd.includes("fno") || cmd.includes("options")) {
        handleTopicSelect("fno");
        return;
      }
      if (cmd.includes("phishing") || cmd.includes("kyc")) {
        handleTopicSelect("phishing");
        return;
      }
      if (cmd.includes("deepfakes") || cmd.includes("ai")) {
        handleTopicSelect("deepfakes");
        return;
      }
      if (cmd.includes("social") || cmd.includes("instagram") || cmd.includes("whatsapp")) {
        handleTopicSelect("social");
        return;
      }
      if (cmd.includes("banking") || cmd.includes("upi")) {
        handleTopicSelect("banking");
        return;
      }
      if (cmd.includes("identity") || cmd.includes("impersonation")) {
        handleTopicSelect("identity");
        return;
      }
      if (cmd.includes("psychology") || cmd.includes("manipulation")) {
        handleTopicSelect("psych");
        return;
      }
      if (cmd.includes("safe") || cmd.includes("practices")) {
        handleTopicSelect("safe");
        return;
      }
    }

    // 5. Mascot Selection (Screen: mascot-select)
    if (screen === "mascot-select") {
      if (cmd.includes("gemmy") || cmd.includes("gem")) {
        handleMascotSelect(MASCOTS[0]);
        return;
      }
      if (cmd.includes("baggie") || cmd.includes("bag")) {
        handleMascotSelect(MASCOTS[1]);
        return;
      }
      if (cmd.includes("naruto")) {
        handleMascotSelect(MASCOTS[2]);
        return;
      }
      if (cmd.includes("doraemon") || cmd.includes("dora")) {
        handleMascotSelect(MASCOTS[3]);
        return;
      }
    }

    // 6. Generic Start / Continue
    if (cmd.includes("continue") || cmd.includes("start") || cmd.includes("next") || cmd.includes("आगे") || cmd.includes("التالي") || cmd.includes("siguiente")) {
      if (screen === "setup") {
        setScreen("intro");
        return;
      }
      if (screen === "tutorial") {
        setScreen("game");
        return;
      }
      if (screen === "game") {
        if (gameMode === "learn" && learnStep === "concept") {
          setLearnStep("swipe");
        } else if (showReveal) {
          handleNext();
        }
        return;
      }
    }

    // 7. Swiping / Answering (Screen: game)
    if (screen === "game" && !showReveal && learnStep !== "concept") {
      if (
        cmd.includes("scam") || 
        cmd.includes("left") || 
        cmd.includes("खराब") || 
        cmd.includes("احتيال") || 
        cmd.includes("estafa") ||
        cmd.includes("fake")
      ) {
        handleSwipe("left");
        return;
      }
      if (
        cmd.includes("legit") || 
        cmd.includes("right") || 
        cmd.includes("सही") || 
        cmd.includes("قانوني") || 
        cmd.includes("legítimo") || 
        cmd.includes("legitimo") ||
        cmd.includes("safe") ||
        cmd.includes("real")
      ) {
        handleSwipe("right");
        return;
      }
      if (
        cmd.includes("wisebot") || 
        cmd.includes("bot") || 
        cmd.includes("मदद") || 
        cmd.includes("मساعدة") || 
        cmd.includes("ayuda")
      ) {
        fetchWiseBotAnalysis(deck[ci]);
        return;
      }
    }

    // 8. ScamShield URL voice scans
    if (cmd.startsWith("scan ") || cmd.startsWith("check ")) {
      const target = command.substring(cmd.indexOf(" ") + 1).trim();
      if (target) {
        setScreen("scamshield");
        setScamShieldInput(target);
        setScamShieldTrigger(prev => prev + 1);
        speakText(`Scanning ${target}. Please wait.`);
        return;
      }
    }

    // 9. Other standard actions
    if (
      cmd.includes("read") || 
      cmd.includes("speak") || 
      cmd.includes("पढ़ो") || 
      cmd.includes("padho") || 
      cmd.includes("اقرأ") || 
      cmd.includes("leer") ||
      cmd.includes("repeat")
    ) {
      if (screen === "game" && deck[ci]) {
        if (showReveal) {
          speakText(deck[ci].explanation);
        } else {
          speakText(deck[ci].content);
        }
      } else {
        triggerScreenNarration();
      }
      return;
    }
    if (
      cmd.includes("stop") || 
      cmd.includes("रुको") || 
      cmd.includes("ruko") || 
      cmd.includes("قف") || 
      cmd.includes("parar")
    ) {
      stopSpeech();
      return;
    }
    if (
      cmd.includes("report") ||
      cmd.includes("report scam")
    ) {
      if (screen === "game" && showReveal && deck[ci]) {
        const newReport = {
          id: Date.now(),
          content: `Scam Scenario: ${deck[ci].content} | Handle: ${deck[ci].profileName}`,
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
          source: JURISDICTIONS[jurisdiction]?.name || "Global",
          status: "Pending"
        };
        setReportedScams(prev => [newReport, ...prev]);
        speakText(TRANSLATIONS[lang]?.reportedSuccess || "Scam reported successfully!");
        return;
      }
    }
  }, [screen, ci, showReveal, learnStep, deck, gameMode, jurisdiction, lang, speakText, stopSpeech, handleSwipe, handleNext, handleMascotSelect, handleTopicSelect, handleModeSelect, triggerScreenNarration, fetchWiseBotAnalysis]);

  const toggleVoiceCommands = useCallback(() => {
    setVoiceActive(prev => {
      const nextState = !prev;
      if (nextState) {
        speakText(lang === "hi" ? "एक्सेसिबिलिटी वॉयस गाइड सक्रिय है। मैं आपकी सहायता करूँगा।" : 
                  lang === "ar" ? "تم تفعيل التوجيه الصوتي للتسهيل. سأقوم بإرشادك." : 
                  lang === "es" ? "Guía de voz activada. Te ayudaré a navegar." : 
                  "Voice Guide activated. I will help you navigate.");
      } else {
        stopSpeech();
        speakText(lang === "hi" ? "वॉयस गाइड बंद है।" : 
                  lang === "ar" ? "تم إيقاف التوجيه الصوتي." : 
                  lang === "es" ? "Guía de voz desactivada." : 
                  "Voice Guide deactivated.");
      }
      return nextState;
    });
  }, [speakText, stopSpeech, lang]);

  // Self-Healing Speech Recognition effect
  useEffect(() => {
    if (!voiceActive) {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (err1) { console.warn(err1); }
      }
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported in this browser.");
      return;
    }

    let rec = recognitionRef.current;
    if (!rec) {
      rec = new SpeechRecognition();
      recognitionRef.current = rec;
    }

    rec.continuous = false;
    rec.interimResults = false;
    const langCodes = { en: "en-US", hi: "hi-IN", ar: "ar-AE", es: "es-ES" };
    rec.lang = langCodes[lang] || "en-US";

    rec.onstart = () => {
      setSpeechTranscript(
        lang === "hi" ? "सुन रहा हूँ..." : 
        lang === "ar" ? "جاري الاستماع..." : 
        lang === "es" ? "Escuchando..." : 
        "Listening..."
      );
    };

    rec.onresult = (event) => {
      const resultText = event.results[event.results.length - 1][0].transcript.trim();
      setSpeechTranscript(`"${resultText}"`);
      handleVoiceCommand(resultText);
    };

    rec.onerror = (e) => {
      console.error("Speech recognition error:", e);
      if (e.error === "not-allowed") {
        setVoiceActive(false);
        speakText("Microphone permission denied.");
      }
    };

    rec.onend = () => {
      if (voiceActiveRef.current) {
        try {
          rec.start();
        } catch (err) {
          console.error("Failed to restart speech recognition:", err);
          setTimeout(() => {
            if (voiceActiveRef.current) {
              try { rec.start(); } catch (err2) { console.warn(err2); }
            }
          }, 300);
        }
      }
    };

    try {
      rec.start();
    } catch (err) {
      console.error("Failed to start speech recognition:", err);
    }

    return () => {
      if (rec) {
        rec.onend = null;
        try { rec.stop(); } catch (e) { console.warn(e); }
      }
    };
  }, [voiceActive, lang, handleVoiceCommand, speakText]);

  // Global Activation Gestures (Spacebar to start/repeat, double click to toggle)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (!voiceActive) {
          setVoiceActive(true);
          speakText(lang === "hi" ? "एक्सेसिबिलिटी वॉयस गाइड सक्रिय है।" : 
                    lang === "ar" ? "تم تفعيل التوجيه الصوتي للتسهيل." : 
                    lang === "es" ? "Guía de voz activada." : 
                    "Voice Guide activated.");
        } else {
          triggerScreenNarration();
        }
      }
    };

    const handleDblClick = () => {
      toggleVoiceCommands();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("dblclick", handleDblClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("dblclick", handleDblClick);
    };
  }, [voiceActive, lang, triggerScreenNarration, toggleVoiceCommands, speakText]);

  // Cancel speech on screen switches
  useEffect(() => {
    window.speechSynthesis.cancel();
  }, [screen]);

  // Narration triggers on state shifts
  useEffect(() => {
    if (voiceActive) {
      triggerScreenNarration();
    }
  }, [screen, ci, showReveal, learnStep, voiceActive, lang, triggerScreenNarration]);

  // Narration for WiseBot responses
  useEffect(() => {
    if (!voiceActive || !wiseBotOpen) return;
    if (wiseBotLoading) {
      speakText("WiseBot is analyzing the message. Please wait.");
    } else if (wiseBotResponse) {
      if (wiseBotResponse.error) {
        speakText(`WiseBot analysis failed: ${wiseBotResponse.error}`);
      } else {
        const text = `WiseBot Verdict is: ${wiseBotResponse.verdict || ""}. Confidence is: ${wiseBotResponse.confidence || ""}. Red flags are: ${(wiseBotResponse.red_flags || []).join(". ")}. Action is: ${wiseBotResponse.action || ""}.`;
        speakText(text);
      }
    }
  }, [wiseBotOpen, wiseBotLoading, wiseBotResponse, voiceActive, speakText]);

  return (
    <div className={`sw-container ${isShaking ? "sw-shake-active" : ""} ${lang === "ar" ? "sw-rtl" : ""}`}>
      {/* Translation loading screen */}
      {translatingDeck && (
        <div className="sw-trans-loading">
          <div className="sw-wisebot-spinner" style={{ width: "50px", height: "50px", marginBottom: "20px" }}></div>
          <h3 style={{ fontFamily: "Outfit, sans-serif" }}>
            {lang === "hi" ? "Gemini AI परिदृश्य कार्डों का अनुवाद कर रहा है..." : 
             lang === "ar" ? "يقوم الذكاء الاصطناعي بترجمة بطاقات السيناريو..." : 
             lang === "es" ? "Gemini AI está traduciendo las tarjetas de escenario..." : 
             "Gemini AI translating scenario cards..."}
          </h3>
        </div>
      )}

      {/* Voice commands status indicator */}
      {voiceActive && (
        <div style={{ position: "fixed", top: "10px", left: "50%", transform: "translateX(-50%)", zIndex: 10000, width: "min(340px, 90vw)" }}>
          <div className="sw-voice-bar active">
            <div className="sw-mic-pulse"></div>
            <div>
              <strong>{TRANSLATIONS[lang]?.voiceMicOn || "Listening..."}</strong>
              <div style={{ fontSize: "10px", opacity: 0.8 }}>{speechTranscript}</div>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {screen === "setup" && (
          <motion.div
            key="setup"
            className="sw-content-wrapper sw-setup-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "8px", textAlign: "center", background: "linear-gradient(90deg, #00d2ff, #7b2ff7, #00d2ff)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {TRANSLATIONS[lang]?.title || "SwipeWise"}
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "14px", textAlign: "center" }}>
              {TRANSLATIONS[lang]?.setupTitle || "Customize Your Experience"}
            </p>

            <div className="sw-selection-group">
              <label>{TRANSLATIONS[lang]?.selectLang || "Select Language"}</label>
              <div className="sw-grid-select">
                <button className={`sw-select-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>🇬🇧 English</button>
                <button className={`sw-select-btn ${lang === "hi" ? "active" : ""}`} onClick={() => setLang("hi")}>🇮🇳 हिंदी (Hindi)</button>
                <button className={`sw-select-btn ${lang === "ar" ? "active" : ""}`} onClick={() => setLang("ar")}>🇦🇪 العربية (Arabic)</button>
                <button className={`sw-select-btn ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")}>🇪🇸 Español (Spanish)</button>
              </div>
            </div>

            <div className="sw-selection-group" style={{ marginTop: "20px" }}>
              <label>{TRANSLATIONS[lang]?.selectJurisdiction || "Select Jurisdiction"}</label>
              <div className="sw-grid-select">
                <button className={`sw-select-btn ${jurisdiction === "in" ? "active" : ""}`} onClick={() => setJurisdiction("in")}>🇮🇳 India (SEBI)</button>
                <button className={`sw-select-btn ${jurisdiction === "us" ? "active" : ""}`} onClick={() => setJurisdiction("us")}>🇺🇸 USA (SEC)</button>
                <button className={`sw-select-btn ${jurisdiction === "uk" ? "active" : ""}`} onClick={() => setJurisdiction("uk")}>🇬🇧 UK (FCA)</button>
                <button className={`sw-select-btn ${jurisdiction === "es" ? "active" : ""}`} onClick={() => setJurisdiction("es")}>🇪🇸 Spain (CNMV)</button>
                <button className={`sw-select-btn ${jurisdiction === "ae" ? "active" : ""}`} onClick={() => setJurisdiction("ae")} style={{ gridColumn: "span 2" }}>🇦🇪 UAE (SCA/FSRA)</button>
              </div>
            </div>

            <button
              className="sw-start-btn"
              onClick={() => setScreen("intro")}
              style={{ width: "100%", marginTop: "32px" }}
            >
              {TRANSLATIONS[lang]?.startBtn || "Start Playing"}
            </button>
          </motion.div>
        )}

        {screen === "intro" && (
          <motion.div
            key="intro"
            className="sw-content-wrapper sw-intro"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <motion.div 
                className="sw-shield-icon"
                animate={{ 
                  filter: ["drop-shadow(0 0 20px rgba(0,210,255,0.3))", "drop-shadow(0 0 40px rgba(123,47,247,0.4))", "drop-shadow(0 0 20px rgba(0,210,255,0.3))"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img
                  src={resolveAssetUrl("logo.png")}
                  alt="SwipeWise Logo"
                  style={{ width: "min(380px, 90vw)", height: "auto", objectFit: "contain", marginBottom: 0 }}
                />
              </motion.div>
              <div className="sw-subtitle" style={{ marginTop: "4px", marginBottom: "12px" }}>
                {TRANSLATIONS[lang]?.subtitle || "BY SEBI × IOSCO TECHSPRINT"}
              </div>

              <div className="sw-glass-card">
                <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>{lang === "hi" ? "अपना जागरूकता सूचकांक आंके" : lang === "ar" ? "اختبر مؤشر الوعي الخاص بك" : lang === "es" ? "Prueba tu Índice de Conciencia" : "Test Your Awareness Index"}</h2>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                  {lang === "hi" ? "क्या आप जाल में फंसने से पहले घोटालों को पहचान सकते हैं?" : lang === "ar" ? "هل يمكنك كشف عمليات الاحتيال قبل الوقوع فيها؟" : lang === "es" ? "¿Puedes detectar las estafas antes de que te atrapen?" : "Can you spot scams before they trap you?"}
                </p>
                <div className="sw-hint-container">
                  <div className="sw-hint-item">
                    <span className="sw-hint-emoji">👈</span>
                    <span className="sw-hint-label" style={{ color: "var(--scam-color)" }}>{TRANSLATIONS[lang]?.scam || "Scam"}</span>
                  </div>
                  <div className="sw-hint-item">
                    <span className="sw-hint-emoji">👉</span>
                    <span className="sw-hint-label" style={{ color: "var(--legit-color)" }}>{TRANSLATIONS[lang]?.legit || "Legit"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', paddingBottom: '60px' }}>
              <div className="sw-mode-buttons">
                <motion.button
                  className="sw-start-btn sw-mode-btn sw-mode-learn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleModeSelect("learn")}
                >
                  <div className="sw-mode-icon">🧠</div>
                  <div className="sw-mode-text">
                    <strong>{TRANSLATIONS[lang]?.learnMode || "Learn Mode"}</strong>
                    <span>{lang === "hi" ? "निर्देशित, बिना तनाव के" : lang === "ar" ? "موجه، بدون ضغوط" : lang === "es" ? "Guiado, sin presiones" : "Guided, no pressure"}</span>
                  </div>
                </motion.button>
                <motion.button
                  className="sw-start-btn sw-mode-btn sw-mode-game"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleModeSelect("game")}
                >
                  <div className="sw-mode-icon">🎮</div>
                  <div className="sw-mode-text">
                    <strong>{TRANSLATIONS[lang]?.gameMode || "Game Mode"}</strong>
                    <span>{lang === "hi" ? "समय और सिलसिला आधारित" : lang === "ar" ? "قائم على الوقت والتحدي" : lang === "es" ? "Basado en tiempo y racha" : "Timer & streak based"}</span>
                  </div>
                </motion.button>
              </div>
              <div className="sw-footer-info" style={{ marginTop: "12px", fontSize: "10px", color: "#444" }}>
                {lang === "hi" ? "10 राउंड • 3 मिनट • मुफ्त" : lang === "ar" ? "١٠ جولات • ٣ دقائق • مجاني" : lang === "es" ? "10 rondas • 3 min • Gratis" : "10 rounds • 3 min • Free"}
              </div>
            </div>
          </motion.div>
        )}

        {screen === "topic-select" && (
          <motion.div
            key="topic-select"
            className="sw-content-wrapper sw-topic-screen"
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "20px", textAlign: "center" }}>Choose Learning Path</h2>
            <div className="sw-topic-grid">
              {LEARN_TOPICS.map(t => (
                <motion.div
                  key={t.id}
                  className="sw-glass-card sw-topic-card"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTopicSelect(t.id)}
                >
                  <div style={{ fontSize: "36px", flexShrink: 0 }}>{t.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <h3 style={{ margin: 0, fontSize: "16px" }}>{t.title}</h3>
                      <span style={{ 
                        fontSize: "10px", padding: "2px 6px", borderRadius: "8px", 
                        background: t.diff === "Beginner" ? "rgba(46, 213, 115, 0.2)" : t.diff === "Intermediate" ? "rgba(255, 165, 2, 0.2)" : "rgba(255, 71, 87, 0.2)",
                        color: t.diff === "Beginner" ? "var(--legit-color)" : t.diff === "Intermediate" ? "#ffa502" : "var(--scam-color)"
                      }}>{t.diff}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: "12px", color: "var(--text-secondary)" }}>{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="sw-back-link" onClick={() => setScreen("intro")} style={{ marginTop: "10px" }}>← Back</button>
          </motion.div>
        )}

        {screen === "mascot-select" && (
          <motion.div
            key="mascot-select"
            className="sw-content-wrapper sw-intro"
            layout
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h2 className="sw-title" style={{ fontSize: "28px", marginBottom: "8px" }}>Choose Your Partner</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "40px", fontSize: "14px" }}>
              Select a mascot to help you spot scams!
            </p>

            <div className="sw-mascot-grid">
              {MASCOTS.map((m) => (
                <motion.div
                  key={m.id}
                  className="sw-mascot-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMascotSelect(m)}
                  style={{ borderColor: m.color }}
                >
                  <div className="sw-mascot-img-container">
                    <motion.img
                      src={resolveAssetUrl(m.img)}
                      alt={m.name}
                      className="sw-mascot-select-img"
                      decoding="async"
                      loading="eager"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                  </div>
                  <div className="sw-mascot-name" style={{ 
                    color: m.color, 
                    fontWeight: "800", 
                    marginTop: "12px",
                    fontSize: "16px",
                    textShadow: `0 0 10px ${m.color}44`
                  }}>{m.name}</div>
                </motion.div>
              ))}
            </div>

            <button
              className="sw-back-link"
              onClick={() => setScreen("intro")}
              style={{ marginTop: "40px" }}
            >
              ← Back
            </button>
          </motion.div>
        )}

        {screen === "tutorial" && (
          <motion.div
            key="tutorial"
            className="sw-content-wrapper sw-intro"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ position: 'relative', overscrollBehavior: 'none' }}
          >
            <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "20px", color: "var(--legit-color)", textAlign: "center" }}>How to Play</h2>
            
            <div style={{ position: "relative", width: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
              {/* Fake Background Cards */}
              <div className="sw-card sw-card-behind" style={{ transform: "scale(0.85) translateY(40px)", zIndex: 0, opacity: 0.4, background: "var(--glass-bg)", filter: "blur(4px)" }} />
              <div className="sw-card sw-card-behind" style={{ transform: "scale(0.92) translateY(20px)", zIndex: 1, opacity: 0.7, background: "var(--glass-bg)" }} />
              
              {/* Tutorial Animated Card */}
              <motion.div 
                className="sw-card"
                style={{ zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--glass-bg)", position: "absolute" }}
                animate={{ 
                  x: [0, -100, 0, 100, 0],
                  rotate: [0, -10, 0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div style={{ fontSize: "80px", opacity: 0.5 }}>💳</div>
                
                {/* Labels that fade in/out */}
                <motion.div 
                  className="sw-swipe-label" 
                  style={{ left: 20, color: "var(--scam-color)" }}
                  animate={{ opacity: [0, 1, 0, 0, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  SCAM
                </motion.div>
                <motion.div 
                  className="sw-swipe-label" 
                  style={{ right: 20, color: "var(--legit-color)" }}
                  animate={{ opacity: [0, 0, 0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  LEGIT
                </motion.div>
              </motion.div>
              
              {/* Hand Icon */}
              <motion.div
                style={{ position: "absolute", zIndex: 10, fontSize: "60px", bottom: "40px" }}
                animate={{ 
                  x: [0, -100, 0, 100, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                👆
              </motion.div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: "600", margin: "0 0 10px 0" }}>
                Spot scams before they trap you.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
                <span style={{ color: "var(--scam-color)", fontWeight: "bold", fontSize: "14px" }}>← Scam</span>
                <span style={{ color: "var(--legit-color)", fontWeight: "bold", fontSize: "14px" }}>Legit →</span>
              </div>
            </div>

            <button 
              className="sw-start-btn" 
              onClick={() => setScreen("game")}
              style={{ width: "100%", padding: "16px", background: "var(--primary-color)", color: "white", borderRadius: "12px", fontSize: "18px", fontWeight: "bold", border: "none", cursor: "pointer", boxShadow: "0 4px 15px rgba(123, 47, 247, 0.4)" }}
            >
              Start Playing
            </button>
            <button className="sw-back-link" onClick={() => setScreen("mascot-select")} style={{ marginTop: "20px" }}>← Back</button>
          </motion.div>
        )}

        {screen === "game" && (
          <motion.div
            key="game"
            className="sw-content-wrapper sw-game"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className={`sw-top-app-bar ${gameMode === 'learn' ? 'sw-top-app-bar--learn' : ''}`}>
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="sw-home-icon-btn" onClick={handleExitHome} title="Exit to Home">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </button>
                <button 
                  className={`sw-home-icon-btn ${voiceActive ? "active" : ""}`} 
                  onClick={toggleVoiceCommands} 
                  title="Toggle Voice Commands"
                  style={{ background: voiceActive ? "rgba(46, 213, 115, 0.2)" : "rgba(255,255,255,0.05)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: voiceActive ? "#2ed573" : "white" }}
                >
                  🎙️
                </button>
              </div>
              <div className="sw-game-header" style={{ flex: 1, paddingTop: 0 }}>
                <div className="sw-progress-bar">
                  {deck.map((_, i) => (
                    <div
                      key={i}
                      className="sw-progress-segment"
                      style={{
                        background:
                          i < ci + (showReveal ? 1 : 0)
                            ? answers[i]?.correct
                              ? "var(--legit-color)"
                              : "var(--scam-color)"
                            : i === ci && !showReveal
                            ? gameMode === 'learn' ? "var(--primary-color)" : "rgba(123,47,247,0.5)"
                            : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
                <div className="sw-header-stats">
                  <span>{ci + 1} / {deck.length}</span>
                  {gameMode === "game" && <span className={streak >= 3 ? "sw-streak-glow" : ""}>Streak: {streak}</span>}
                  {gameMode === "learn" && <span style={{ color: "var(--primary-color)" }}>Learn Mode</span>}
                </div>
              </div>
            </div>

            {/* Learn Mode: Concept Step */}
            {gameMode === "learn" && learnStep === "concept" && deck[ci]?.moduleData && (
              <motion.div 
                className="sw-learn-concept-card sw-glass-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <div className="sw-concept-header">
                  <span className="sw-concept-topic-icon">{LEARN_TOPICS.find(t => t.id === selectedTopicId)?.icon}</span>
                  <h3>{deck[ci].moduleData.title}</h3>
                </div>
                <div className="sw-concept-scrollable">
                  <div className="sw-concept-section">
                    <h4>Concept</h4>
                    <p>{deck[ci].moduleData.concept}</p>
                  </div>
                  <div className="sw-concept-section">
                    <h4>Real-World Example</h4>
                    <p style={{ fontStyle: "italic" }}>"{deck[ci].moduleData.example}"</p>
                  </div>
                  <div className="sw-concept-section">
                    <h4>Common Tactics</h4>
                    <ul>
                      {deck[ci].moduleData.tactics.map((t, idx) => <li key={idx}>{t}</li>)}
                    </ul>
                  </div>
                  <div className="sw-concept-section">
                    <h4>Why People Fall For This</h4>
                    <p>{deck[ci].moduleData.whyPeopleFall}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", marginTop: "20px", width: "100%" }}>
                  <button 
                    className="sw-action-btn sw-concept-next-btn"
                    onClick={() => setLearnStep("swipe")}
                    style={{ flex: 1 }}
                  >
                    Ready to Practice? Let's Go →
                  </button>
                  <button 
                    className={`sw-tts-btn ${ttsActive ? "active" : ""}`}
                    onClick={() => {
                      if (ttsActive) stopSpeech();
                      else speakText(`${deck[ci].moduleData.concept}. For example: ${deck[ci].moduleData.example}`);
                    }}
                    title="Listen to Concept"
                    style={{ width: "64px", height: "64px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", cursor: "pointer", fontSize: "20px", color: ttsActive ? "#00d2ff" : "white" }}
                  >
                    🔊
                  </button>
                </div>
              </motion.div>
            )}

            <AnimatePresence>
              {showExitConfirm && (
                <motion.div
                  className="sw-modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="sw-modal-content"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="sw-modal-icon">⚠️</div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', margin: '0 0 12px 0' }}>
                      {gameMode === 'learn' ? 'Exit Learn Mode?' : 'Exit Game?'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>
                      Are you sure you want to exit? Your current progress will be lost.
                    </p>
                    <div className="sw-modal-actions">
                      <button className="sw-modal-btn sw-btn-cancel" onClick={() => setShowExitConfirm(false)}>Resume</button>
                      <button className="sw-modal-btn sw-btn-confirm" onClick={confirmExit}>
                        {gameMode === 'learn' ? 'Exit Learn' : 'Exit Game'}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Only show cards if we are not in concept step */}
            {!(gameMode === "learn" && learnStep === "concept") && (
              <div className="sw-card-container">
                <>
                  {!showReveal && deck[ci + 2] && (
                    <div className="sw-card sw-card-behind" style={{ transform: "scale(0.90) translateY(40px)", zIndex: 0, opacity: 0.6, background: "var(--glass-bg)", filter: "blur(2px)" }} />
                  )}
                  {!showReveal && deck[ci + 1] && (
                    <div className="sw-card sw-card-behind" style={{ transform: "scale(0.95) translateY(20px)", zIndex: 1, opacity: 0.8, background: "var(--glass-bg)" }} />
                  )}
                  <AnimatePresence mode="wait">
                    {!showReveal ? (
                  <motion.div
                    key={deck[ci]?.id}
                    className="sw-card"
                    style={{ x, rotate, opacity, zIndex: 2 }}
                    drag={!showReveal ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -120 || info.velocity.x < -800) handleSwipe("left");
                      else if (info.offset.x > 120 || info.velocity.x > 800) handleSwipe("right");
                    }}
                    whileDrag={{ cursor: "grabbing" }}
                  >
                    <motion.div className="sw-swipe-label" style={{ right: 20, color: "var(--legit-color)", opacity: legitOpacity }}>LEGIT</motion.div>
                    <motion.div className="sw-swipe-label" style={{ left: 20, color: "var(--scam-color)", opacity: scamOpacity }}>SCAM</motion.div>

                    <div className="sw-post-header">
                      <div className="sw-avatar">
                        {typeof deck[ci].avatar === "string" && deck[ci].avatar.match(/\.(png|jpe?g|webp|svg)$/i) ? (
                          <img
                            src={resolveAssetUrl(deck[ci].avatar)}
                            alt="Logo"
                            style={{ width: 40, height: 40, objectFit: "contain" }}
                          />
                        ) : (
                          deck[ci].avatar
                        )}
                      </div>
                      <div className="sw-profile-info">
                        <div className="sw-profile-name">{deck[ci].profileName}</div>
                        <div className="sw-profile-verified">
                          {deck[ci].verified ? "✓ Verified" : "Unverified"}
                        </div>
                      </div>
                      <span
                        className="sw-tag"
                        style={{
                          background:
                            deck[ci].tag === "Sponsored" || deck[ci].tag === "Ad"
                              ? "rgba(255,71,87,0.1)"
                              : "rgba(46,213,115,0.1)",
                          color:
                            deck[ci].tag === "Sponsored" || deck[ci].tag === "Ad"
                              ? "var(--scam-color)"
                              : "var(--legit-color)",
                        }}
                      >
                        {deck[ci].tag}
                      </span>
                    </div>

                    <div className="sw-card-body" style={{ flex: 1, overflowY: "auto", padding: "0 20px", marginBottom: "10px" }}>
                      <div className="sw-content" style={{ padding: "0 0 16px 0" }}>{deck[ci].content}</div>

                      {deck[ci].image && (
                        <div className="sw-card-media" style={{ margin: "0 0 16px 0" }}>
                          <img
                            src={resolveAssetUrl(deck[ci].image)}
                            alt="Evidence"
                            className="sw-media-img"
                            decoding="async"
                            loading="lazy"
                            style={{ borderRadius: "12px", width: "100%" }}
                          />
                        </div>
                      )}

                      {deck[ci].video && (
                        <div className="sw-card-media" style={{ margin: "0 0 16px 0" }}>
                          <video 
                            src={resolveAssetUrl(deck[ci].video)} 
                            preload="auto"
                            muted
                            playsInline
                            controls 
                            className="sw-media-video"
                            poster={deck[ci].poster ? resolveAssetUrl(deck[ci].poster) : undefined}
                            ref={activeVideoRef}
                            style={{ borderRadius: "12px", width: "100%" }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="sw-post-stats">
                      <span>❤️ {deck[ci].stats?.likes || 0}</span>
                      <span>💬 {deck[ci].stats?.comments || 0}</span>
                      <span>↗ {deck[ci].stats?.shares || 0}</span>
                    </div>

                    {gameMode === "learn" && (
                      <div className="sw-learn-actions">
                        <button 
                          className="sw-learn-btn sw-reveal-answer-btn"
                          onClick={(e) => { e.stopPropagation(); handleRevealAnswer(); }}
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          📖 I'm Ready - Reveal Answer
                        </button>
                      </div>
                    )}

                    <div className="sw-wisebot-btn-container" style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                      <button 
                        className="sw-wisebot-btn"
                        onClick={(e) => { e.stopPropagation(); fetchWiseBotAnalysis(deck[ci]); }}
                        onPointerDown={(e) => e.stopPropagation()}
                        style={{ flex: 1 }}
                      >
                        💡 Ask WiseBot
                      </button>
                      <button 
                        className={`sw-wisebot-btn ${ttsActive ? "active" : ""}`}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          if (ttsActive) stopSpeech(); 
                          else speakText(deck[ci].content); 
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        style={{ flex: 1, background: ttsActive ? "rgba(0, 210, 255, 0.2)" : "" }}
                      >
                        🔊 {ttsActive ? "Stop" : "Listen Card"}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="reveal"
                    className="sw-card"
                    layout
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={handleNext}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="sw-reveal-overlay"
                      style={{
                        background: lastAnswer.correct ? "var(--legit-color)" : "var(--scam-color)",
                      }}
                    >
                      <div className="sw-reveal-status">{lastAnswer.correct ? "✅ Correct!" : "❌ Wrong!"}</div>
                      <div className="sw-reveal-type">This was: {deck[ci].type === "scam" ? "A SCAM" : "LEGITIMATE"}</div>

                      {deck[ci].redFlags.length > 0 && (
                        <ul className="sw-red-flags">
                          {deck[ci].redFlags.map((f, i) => (
                            <li key={i} className="sw-red-flag-item">{f}</li>
                          ))}
                        </ul>
                      )}

                      <div className="sw-explanation">{deck[ci].explanation}</div>
                      
                      {gameMode === "learn" && deck[ci].moduleData && (
                        <div className="sw-learn-checklist">
                          <h4>What You Should Check ✅</h4>
                          <ul>
                            {deck[ci].moduleData.checkList.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div style={{ 
                        marginTop: "24px", 
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        textAlign: "center", 
                        fontSize: "13px", 
                        fontWeight: "600",
                        opacity: 0.9,
                        letterSpacing: "0.5px"
                      }}>
                        {gameMode === 'learn' ? 'Next Lesson →' : 'Tap anywhere to continue →'}
                      </div>
                      
                      <div className="sw-wisebot-btn-container" style={{ marginTop: "16px", display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                        <button 
                          className="sw-wisebot-btn"
                          onClick={(e) => { e.stopPropagation(); fetchWiseBotAnalysis(deck[ci]); }}
                          onPointerDown={(e) => e.stopPropagation()}
                          style={{ flex: "1 1 45%" }}
                        >
                          💡 Ask WiseBot
                        </button>
                        <button 
                          className={`sw-wisebot-btn ${ttsActive ? "active" : ""}`}
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            if (ttsActive) stopSpeech(); 
                            else speakText(`${deck[ci].explanation}. Red flags were: ${deck[ci].redFlags.join(". ")}`); 
                          }}
                          onPointerDown={(e) => e.stopPropagation()}
                          style={{ flex: "1 1 45%", background: ttsActive ? "rgba(0, 210, 255, 0.2)" : "" }}
                        >
                          🔊 {ttsActive ? "Stop" : "Listen"}
                        </button>
                        <button 
                          className="sw-wisebot-btn"
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            const newReport = {
                              id: Date.now(),
                              content: `Scam Scenario: ${deck[ci].content} | Handle: ${deck[ci].profileName}`,
                              timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
                              source: JURISDICTIONS[jurisdiction]?.name || "Global",
                              status: "Pending"
                            };
                            setReportedScams(prev => [newReport, ...prev]);
                            alert(TRANSLATIONS[lang]?.reportedSuccess || "Scam reported successfully to regulators!");
                          }}
                          onPointerDown={(e) => e.stopPropagation()}
                          style={{ flex: "1 1 90%", background: "rgba(255,71,87,0.15)", border: "1px solid var(--scam-color)", color: "var(--scam-color)", fontWeight: "bold" }}
                        >
                          {TRANSLATIONS[lang]?.reportScamBtn || "🚩 Report Scam"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </>
            </div>
          )}

            {!showReveal && gameMode === "game" && (
              <div className="sw-confidence-selector">
                <div className="sw-confidence-label">How confident are you? (Optional)</div>
                <div className="sw-confidence-options">
                  <button onClick={() => setCurrentConfidence("low")} className={`sw-confidence-btn ${currentConfidence === "low" ? "active" : ""}`}>😕 Guessing</button>
                  <button onClick={() => setCurrentConfidence("medium")} className={`sw-confidence-btn ${currentConfidence === "medium" ? "active" : ""}`}>🤔 Somewhat Sure</button>
                  <button onClick={() => setCurrentConfidence("high")} className={`sw-confidence-btn ${currentConfidence === "high" ? "active" : ""}`}>😎 Very Confident</button>
                </div>
              </div>
            )}
            
            {!(gameMode === "learn" && learnStep === "concept") && (
              <div className="sw-hints" style={{ marginTop: "16px" }}>
                <span>← Swipe Left if Scam</span>
                <span>Swipe Right if Legit →</span>
              </div>
            )}

            {!(gameMode === "learn" && learnStep === "concept") && selectedMascot && !wiseBotOpen && (
              <motion.div
                className="sw-active-mascot"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                key={showReveal ? "reveal" : "idle"}
              >
                <AnimatePresence>
                  {showReveal && (
                    <motion.div
                      className="sw-mascot-bubble"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                    >
                      {lastAnswer?.correct ? "Awesome! 🌟" : "Oh no! 😟"}
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div
                    className={`sw-active-mascot-img-container${selectedMascot.id === "naruto" ? " sw-active-mascot-img-container--sm" : ""}`}
                    animate={showReveal ? {
                      scale: lastAnswer?.correct ? [1, 1.2, 1] : [1, 0.9, 1],
                      rotate: lastAnswer?.correct ? [0, 10, -10, 0] : [0, -5, 5, 0]
                    } : {
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: showReveal ? 0.5 : 3,
                      repeat: showReveal ? 0 : Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={showReveal ? (lastAnswer?.correct ? "happy" : "sad") : "idle"}
                        src={showReveal 
                          ? (lastAnswer?.correct ? resolveAssetUrl(selectedMascot.happyImg || selectedMascot.img) : resolveAssetUrl(selectedMascot.sadImg || selectedMascot.img))
                          : resolveAssetUrl(selectedMascot.img)
                        } 
                        alt={selectedMascot.name} 
                        className="sw-game-mascot-img"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    </AnimatePresence>
                  </motion.div>
              </motion.div>
            )}

            <AnimatePresence>
              {wiseBotOpen && (
                <motion.div
                  className="sw-wisebot-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setWiseBotOpen(false)}
                >
                  <motion.div
                    className="sw-wisebot-modal"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="sw-wisebot-header">
                      <div className="sw-wisebot-title">
                        <span className="sw-wisebot-icon">🤖</span> WiseBot
                      </div>
                      <button className="sw-wisebot-close" onClick={() => setWiseBotOpen(false)}>✕</button>
                    </div>

                    <div className="sw-wisebot-body">
                      {wiseBotLoading ? (
                        <div className="sw-wisebot-loading">
                          <div className="sw-wisebot-spinner"></div>
                          <p>WiseBot is thinking...</p>
                        </div>
                      ) : wiseBotResponse?.error ? (
                        <div className="sw-wisebot-error">
                          <p>❌ {wiseBotResponse.error}</p>
                          <button 
                            className="sw-wisebot-retry-btn"
                            onClick={() => fetchWiseBotAnalysis(deck[ci], true)}
                          >
                            🔄 Retry Analysis
                          </button>
                        </div>
                      ) : wiseBotResponse ? (
                        <div className="sw-wisebot-result">
                          <div className="sw-wisebot-verdict-row">
                            <div className={`sw-wisebot-verdict ${wiseBotResponse.verdict?.toLowerCase() === 'scam' ? 'sw-wb-scam' : 'sw-wb-legit'}`}>
                              🚨 Verdict: {wiseBotResponse.verdict}
                            </div>
                            <div className="sw-wisebot-confidence">
                              🎯 Confidence: <strong>{wiseBotResponse.confidence}</strong>
                            </div>
                          </div>

                          {wiseBotResponse.red_flags && wiseBotResponse.red_flags.length > 0 && (
                            <div className="sw-wisebot-section">
                              <h4>🚩 Red Flags</h4>
                              <ul>
                                {wiseBotResponse.red_flags.map((rf, idx) => (
                                  <li key={idx}>{rf}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {wiseBotResponse.tactics && wiseBotResponse.tactics.length > 0 && (
                            <div className="sw-wisebot-section">
                              <h4>🧠 Manipulation Tactics Detected</h4>
                              <ul>
                                {wiseBotResponse.tactics.map((t, idx) => (
                                  <li key={idx}>{t}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="sw-wisebot-section sw-wisebot-action">
                            <h4>✅ What You Should Do</h4>
                            <p>{wiseBotResponse.action}</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}

        {screen === "score" && (
          <motion.div
            key="score"
            className="sw-score-screen sw-game"
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* <motion.button
              className="sw-share-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setScreen("profile")}
              style={{ marginTop: "12px" }}
            >
              👤 View Profile
            </motion.button> */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
              <img
                src={resolveAssetUrl("logo.png")}
                alt="SwipeWise Logo"
                style={{ height: "80px", objectFit: "contain" }}
              />
            </div>
            

            <div className="sw-main-score-card">
              <div className="sw-score-header">
              <span>YOUR RESULTS</span>
              {/* <h1 className="sw-title">SwipeWise</h1> */}
            </div>
              <div className="sw-trust-label">Awareness Index</div>
              <div className="sw-trust-value" style={{ color: getTitleColor(trustIndex) }}>{trustIndex}</div>
              <div className="sw-trust-max">/100</div>
              
              <div className="sw-badge-title" style={{ color: getTitleColor(trustIndex) }}>
                <span>{getTitleEmoji(trustIndex)}</span>
                <span>{getTitle(trustIndex)}</span>
              </div>
              
              <div className="sw-stats-row">
                <div className="sw-stat-box">
                  <span className="sw-stat-val" style={{ color: "#00d2ff" }}>{accuracy}%</span>
                  <span className="sw-stat-label">Accuracy</span>
                </div>
                <div className="sw-stat-box">
                  <span className="sw-stat-val" style={{ color: "#ffa502" }}>🔥 {maxStreak}</span>
                  <span className="sw-stat-label">Best Streak</span>
                </div>
                <div className="sw-stat-box">
                  <span className="sw-stat-val" style={{ color: "var(--legit-color)" }}>{correctCount}/{deck.length}</span>
                  <span className="sw-stat-label">Correct</span>
                </div>
                <div className="sw-stat-box">
                  <span className="sw-stat-val" style={{ color: "#7b2ff7" }}>{confidenceScore}</span>
                  <span className="sw-stat-label">Confidence Score</span>
                </div>
              </div>
            </div>
            
            {overconfidenceRisk > 0 && (
              <div className="sw-overconfidence-alert">
                <div className="sw-overconfidence-icon">⚠️</div>
                <div className="sw-overconfidence-text">
                  <div className="sw-overconfidence-title">Overconfidence Risk</div>
                  <div className="sw-overconfidence-desc">You were highly confident but wrong in {overconfidenceRisk} case{overconfidenceRisk > 1 ? "s" : ""}.</div>
                </div>
              </div>
            )}

            <div className="sw-section-card">
              <div className="sw-section-title">🧠 COGNITIVE PROFILE</div>
              
              {vulnerabilities && vulnerabilities.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "20px" }}>⚠️</span>
                    <span style={{ fontWeight: "800", color: "var(--scam-color)", fontSize: "14px" }}>Vulnerability Areas</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {vulnerabilities.map(v => (
                      <span key={v} style={{ background: "rgba(255, 71, 87, 0.2)", color: "var(--scam-color)", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" }}>{v}</span>
                    ))}
                  </div>
                </div>
              )}

              {strengths && strengths.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "20px" }}>🏆</span>
                    <span style={{ fontWeight: "800", color: "var(--legit-color)", fontSize: "14px" }}>Strength Areas</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {strengths.map(v => (
                      <span key={v} style={{ background: "rgba(46, 213, 115, 0.2)", color: "var(--legit-color)", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" }}>{v}</span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "20px" }}>📈</span>
                  <span style={{ fontWeight: "800", color: "#00d2ff", fontSize: "14px" }}>Improvement Suggestion</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>
                  {vulnerabilities && vulnerabilities.length > 0 
                    ? `You should review the Learn Mode modules for ${vulnerabilities.join(" and ")} to improve your defense against these scams.`
                    : "Excellent work! Keep practicing in Game Mode to maintain your reflexes against new scam variations."}
                </p>
              </div>
            </div>

            <div className="sw-section-card">
              <div className="sw-section-title">SKILL RADAR</div>
              <div className="sw-radar-container">
                <RadarChart 
                  cats={CATEGORIES} 
                  scores={catScores} 
                  color="#00d2ff"
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <motion.button
                className="sw-share-button"
                style={{ flex: "1" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen("profile")}
              >
                👤 Profile
              </motion.button>

              <motion.button
                className="sw-share-button"
                style={{ flex: "3" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setScreen("share")}
              >
                📤 Share Your Score
              </motion.button>
            </div>

            <button
              className="sw-play-again-btn"
              onClick={() => {
                setCi(0);
                setAnswers([]);
                setShowReveal(false);
                setLastAnswer(null);
                setStreak(0);
                setMaxStreak(0);
                setTimes([]);
                setScreen("intro");
              }}
            >
              Play Again
            </button>
          </motion.div>
        )}
        {screen === "share" && (
          <motion.div
            key="share"
            className="sw-share-screen"
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="sw-share-preview-label">SHARE PREVIEW</div>
            
            <div className="sw-share-card">
              <div className="sw-share-title">SWIPEWISE</div>
              <div className="sw-share-subtitle">SEBI × IOSCO TechSprint 2026</div>
              
              <div className="sw-share-score" style={{ color: getTitleColor(trustIndex) }}>
                {trustIndex}
              </div>
              <div className="sw-share-label">Awareness Index</div>
              
              <div className="sw-share-badge" style={{ color: getTitleColor(trustIndex) }}>
                <span>{getTitleEmoji(trustIndex)}</span>
                <span>{getTitle(trustIndex)}</span>
              </div>
              
              <div className="sw-share-stats">
                <div className="sw-share-stat-item">
                  <span className="sw-share-stat-val" style={{ color: "#00d2ff" }}>{accuracy}%</span>
                  <span className="sw-share-stat-label">Accuracy</span>
                </div>
                <div className="sw-share-stat-item">
                  <span className="sw-share-stat-val" style={{ color: "#ffa502" }}>🔥 {maxStreak}</span>
                  <span className="sw-share-stat-label">Streak</span>
                </div>
              </div>
              
              <div className="sw-share-promo">
                <div className="sw-share-promo-text">Can you beat my Awareness Index? 🏆</div>
                <div className="sw-share-promo-sub">Play SwipeWise — Swipe left on scams!</div>
              </div>
            </div>
            
            <div className="sw-social-buttons">
              <button className="sw-social-btn">LinkedIn</button>
              <button className="sw-social-btn">Instagram</button>
              <button className="sw-social-btn">X</button>
            </div>
            
            <button className="sw-back-link" onClick={() => setScreen("score")}>
              ← Back to Scorecard
            </button>
          </motion.div>
        )}
        {screen === "profile" && (
          <motion.div
            key="profile"
            className="sw-score-screen"
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <img
                  src={resolveAssetUrl("logo.png")}
                  alt="SwipeWise Logo"
                  style={{ height: "60px", objectFit: "contain" }}
                />
              </div>
            {/* Header Bar */}
            <div className="sw-section-card" style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              
              <div style={{ fontWeight: "600", fontSize: "13px", color: "var(--text-secondary)" }}>
                @true_detective_1835
              </div>
            </div>
                
            {/* Avatar Section with Gradient */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7b2ff7 0%, #00d2ff 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "36px",
                  boxShadow: "0 8px 32px rgba(123, 47, 247, 0.3)",
                  marginBottom: "12px"
                }}
              >
                🛡️
              </div>
              
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "800", marginBottom: "4px" }}>
                  @true_detective_1835
                </div>
                <div style={{ 
                  fontSize: "12px", 
                  opacity: 0.8,
                  background: "linear-gradient(90deg, #ffd700, #ffaa00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "700"
                }}>
                  🏅 Sage Level
                </div>
              </div>
            </div>
              
            {/* Stats Row - Enhanced */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "24px",
                padding: "16px 0",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#7b2ff7" }}>{trustIndex}</div>
                <div style={{ fontSize: "11px", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Awareness Index</div>
              </div>
              <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}></div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#00d2ff" }}>26</div>
                <div style={{ fontSize: "11px", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Contributions</div>
              </div>
              <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}></div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#2ed573" }}>1y</div>
                <div style={{ fontSize: "11px", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Account Age</div>
              </div>
            </div>
            
            {/* Tabs - Enhanced */}
            
            <div className="sw-section-card" style={{ padding: "16px" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "12px",
                marginBottom: "16px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              <span
                onClick={() => setActiveProfileTab("activity")}
                style={{ 
                  opacity: activeProfileTab === "activity" ? 1 : 0.5,
                  paddingBottom: "8px",
                  borderBottom: activeProfileTab === "activity" ? "2px solid #7b2ff7" : "2px solid transparent",
                  transition: "all 0.2s ease"
                }}
              >
                Activity
              </span>
              <span
                onClick={() => setActiveProfileTab("achievements")}
                style={{ 
                  opacity: activeProfileTab === "achievements" ? 1 : 0.5,
                  paddingBottom: "8px",
                  borderBottom: activeProfileTab === "achievements" ? "2px solid #7b2ff7" : "2px solid transparent",
                  transition: "all 0.2s ease"
                }}
              >
                Achievements
              </span>
              <span
                onClick={() => setActiveProfileTab("about")}
                style={{ 
                  opacity: activeProfileTab === "about" ? 1 : 0.5,
                  paddingBottom: "8px",
                  borderBottom: activeProfileTab === "about" ? "2px solid #7b2ff7" : "2px solid transparent",
                  transition: "all 0.2s ease"
                }}
              >
                About
              </span>
            </div>
            
            {/* Activity Section */}
            {activeProfileTab === "activity" && (
              <div style={{ padding: "12px 0" }}>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                  📊 Recent Activity
                </div>
                <div style={{ 
                  background: "rgba(123, 47, 247, 0.1)", 
                  borderRadius: "12px", 
                  padding: "16px",
                  border: "1px solid rgba(123, 47, 247, 0.2)",
                  marginBottom: "12px"
                }}>
                  <div style={{ fontSize: "14px", fontWeight: "600", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>Scam Detection Test</span>
                    <span style={{ fontSize: "11px", opacity: 0.6, background: "rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: "8px" }}>
                      {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div style={{ fontSize: "13px", opacity: 0.8, marginBottom: "12px" }}>
                    Awareness Index: <span style={{ color: "#7b2ff7", fontWeight: "700" }}>{trustIndex}</span>
                  </div>
                  <div style={{ display: "flex", gap: "12px", fontSize: "12px" }}>
                    <div style={{ background: "rgba(46,213,115,0.15)", padding: "6px 10px", borderRadius: "8px" }}>
                      ✓ {answers.filter(a => a.correct).length} Correct
                    </div>
                    <div style={{ background: "rgba(255,71,87,0.15)", padding: "6px 10px", borderRadius: "8px" }}>
                      ✗ {answers.filter(a => !a.correct).length} Wrong
                    </div>
                  </div>
                </div>
                
                {/* Quiz Summary */}
                <div style={{ 
                  background: "rgba(0, 210, 255, 0.1)", 
                  borderRadius: "12px", 
                  padding: "16px",
                  border: "1px solid rgba(0, 210, 255, 0.2)"
                }}>
                  <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "12px" }}>
                    📋 Quiz Summary
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "12px" }}>
                    <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
                      <div style={{ opacity: 0.6, marginBottom: "4px" }}>Total Questions</div>
                      <div style={{ fontWeight: "700", fontSize: "16px" }}>{deck.length}</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
                      <div style={{ opacity: 0.6, marginBottom: "4px" }}>Accuracy</div>
                      <div style={{ fontWeight: "700", fontSize: "16px", color: "#2ed573" }}>{answers.length ? Math.round((answers.filter(a => a.correct).length / answers.length) * 100) : 0}%</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
                      <div style={{ opacity: 0.6, marginBottom: "4px" }}>Best Streak</div>
                      <div style={{ fontWeight: "700", fontSize: "16px", color: "#ffd700" }}>{maxStreak}</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>
                      <div style={{ opacity: 0.6, marginBottom: "4px" }}>Time Spent</div>
                      <div style={{ fontWeight: "700", fontSize: "16px" }}>{Math.round(times.reduce((a,b) => a+b, 0)/1000)}s</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab === "achievements" && (
              <div style={{ padding: "12px 0" }}>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                  🏆 Your Achievements
                </div>
                <div style={{ 
                  background: "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,170,0,0.1))", 
                  borderRadius: "12px", 
                  padding: "16px",
                  border: "1px solid rgba(255,215,0,0.2)"
                }}>
                  <div style={{ fontSize: "16px", marginBottom: "8px" }}>🎉</div>
                  <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "4px" }}>
                    Congratulations!
                  </div>
                  <div style={{ fontSize: "13px", opacity: 0.7 }}>
                    You unlocked access to a new exclusive podcast by Finance Guru.
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab === "about" && (
              <div style={{ padding: "12px 0" }}>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                  ℹ️ About SwipeWise
                </div>
                <div style={{ 
                  background: "rgba(0, 210, 255, 0.1)", 
                  borderRadius: "12px", 
                  padding: "16px",
                  border: "1px solid rgba(0, 210, 255, 0.2)"
                }}>
                  <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    SwipeWise helps users detect scams through interactive swipe-based learning and Awareness Index scoring. Learn to identify investment fraud, phishing attempts, and impersonation scams.
                  </div>
                </div>
              </div>
            )}
            </div>
            </div>
            <button
              className="sw-back-link"
              onClick={() => setScreen("score")}
              style={{ marginTop: "20px", fontSize: "14px" }}
            >
              ← Back to Scorecard
            </button>
            
          </motion.div>
        )}

        {screen === "scamshield" && (
          <motion.div
            key="scamshield"
            className="sw-content-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ paddingBottom: "100px", minHeight: "auto" }}
          >
            <ScamShield 
              translations={TRANSLATIONS} 
              lang={lang} 
              apiKey={import.meta.env.VITE_GEMINI_API_KEY} 
              input={scamShieldInput}
              setInput={setScamShieldInput}
              triggerScan={scamShieldTrigger}
              onScanComplete={(summary) => {
                if (voiceActive) {
                  speakText(summary);
                }
              }}
            />
          </motion.div>
        )}

        {screen === "admin" && (
          <motion.div
            key="admin"
            className="sw-content-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ paddingBottom: "100px", maxWidth: "800px", minHeight: "auto" }}
          >
            <AdminDashboard 
              translations={TRANSLATIONS} 
              lang={lang} 
              gameCards={GAME_CARDS} 
              reportedScams={reportedScams}
              onResolveReport={(id) => setReportedScams(prev => prev.filter(r => r.id !== id))}
              onAddCard={(card) => setCustomCards(prev => [...prev, card])}
              apiKey={import.meta.env.VITE_GEMINI_API_KEY}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Pop-up Modals for Settings */}
      <AnimatePresence>
        {activePopup === "lang" && (
          <div className="sw-modal-backdrop" onClick={() => setActivePopup(null)}>
            <motion.div 
              className="sw-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px", textAlign: "center" }}>
                {TRANSLATIONS[lang]?.selectLang || "Select Language"}
              </h3>
              <div className="sw-modal-grid">
                <button className={`sw-select-btn ${lang === "en" ? "active" : ""}`} onClick={() => { setLang("en"); setActivePopup(null); }}>🇬🇧 English</button>
                <button className={`sw-select-btn ${lang === "hi" ? "active" : ""}`} onClick={() => { setLang("hi"); setActivePopup(null); }}>🇮🇳 हिंदी (Hindi)</button>
                <button className={`sw-select-btn ${lang === "ar" ? "active" : ""}`} onClick={() => { setLang("ar"); setActivePopup(null); }}>🇦🇪 العربية (Arabic)</button>
                <button className={`sw-select-btn ${lang === "es" ? "active" : ""}`} onClick={() => { setLang("es"); setActivePopup(null); }}>🇪🇸 Español (Spanish)</button>
              </div>
            </motion.div>
          </div>
        )}

        {activePopup === "jurisdiction" && (
          <div className="sw-modal-backdrop" onClick={() => setActivePopup(null)}>
            <motion.div 
              className="sw-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px", textAlign: "center" }}>
                {TRANSLATIONS[lang]?.selectJurisdiction || "Select Jurisdiction"}
              </h3>
              <div className="sw-modal-grid">
                <button className={`sw-select-btn ${jurisdiction === "in" ? "active" : ""}`} onClick={() => { setJurisdiction("in"); setActivePopup(null); }}>🇮🇳 India (SEBI)</button>
                <button className={`sw-select-btn ${jurisdiction === "us" ? "active" : ""}`} onClick={() => { setJurisdiction("us"); setActivePopup(null); }}>🇺🇸 USA (SEC)</button>
                <button className={`sw-select-btn ${jurisdiction === "uk" ? "active" : ""}`} onClick={() => { setJurisdiction("uk"); setActivePopup(null); }}>🇬🇧 UK (FCA)</button>
                <button className={`sw-select-btn ${jurisdiction === "es" ? "active" : ""}`} onClick={() => { setJurisdiction("es"); setActivePopup(null); }}>🇪🇸 Spain (CNMV)</button>
                <button className={`sw-select-btn ${jurisdiction === "ae" ? "active" : ""}`} onClick={() => { setJurisdiction("ae"); setActivePopup(null); }} style={{ gridColumn: "span 2" }}>🇦🇪 UAE (SCA/FSRA)</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      {["intro", "scamshield", "admin", "score", "profile"].includes(screen) && (
        <div className="sw-bottom-nav">
          <button 
            className="sw-nav-item" 
            onClick={() => setActivePopup("lang")}
          >
            <span className="sw-nav-icon">🌐</span>
            <span>{lang.toUpperCase()}</span>
          </button>
          <button 
            className="sw-nav-item" 
            onClick={() => setActivePopup("jurisdiction")}
          >
            <span className="sw-nav-icon">📍</span>
            <span>{jurisdiction.toUpperCase()}</span>
          </button>
          <button 
            className={`sw-nav-item ${screen === "intro" ? "active" : ""}`} 
            onClick={() => setScreen("intro")}
          >
            <span className="sw-nav-icon">🎮</span>
            <span>{TRANSLATIONS[lang]?.navHome || "Home"}</span>
          </button>
          <button 
            className={`sw-nav-item ${screen === "scamshield" ? "active" : ""}`} 
            onClick={() => setScreen("scamshield")}
          >
            <span className="sw-nav-icon">🛡️</span>
            <span>{TRANSLATIONS[lang]?.navShield || "ScamShield"}</span>
          </button>
          <button 
            className={`sw-nav-item ${screen === "admin" ? "active" : ""}`} 
            onClick={() => setScreen("admin")}
          >
            <span className="sw-nav-icon">🏛️</span>
            <span>{TRANSLATIONS[lang]?.navAdmin || "Portal"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
