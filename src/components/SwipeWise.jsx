import { useState, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import "./SwipeWise.css";

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

const DEFAULT_VIDEO_POSTER = "";

const CARDS = [
 {
  id: 1,
  category: "Investment Scams",
  type: "scam",
  profileName: "WealthMax Trading",
  avatar: "logo.png",
  tag: "Sponsored",
  verified: false,
  stats: { likes: "1.2k", comments: "428", shares: "125" },
  content:
   " GUARANTEED 20% monthly returns! Our AI-powered trading bot has NEVER lost a trade. Join 50,000+ investors earning passive income. Limited spots — register NOW with just ₹5,000! Link in bio ",
  redFlags: [
   "'Guaranteed returns' — no investment can guarantee returns",
   "'NEVER lost a trade' — statistically impossible claim",
   "Urgency tactic: 'Limited spots'",
   "Low entry amount to reduce hesitation",
   "No SEBI registration mentioned"
  ],
  explanation:
   "This is a classic investment scam. SEBI regulations prohibit guaranteeing returns. No trading system wins 100% of the time. The urgency and low entry point are manipulation tactics."
 },
 {
  id: 2,
  category: "Deepfakes",
  type: "scam",
  profileName: "Business Today Live",
  avatar: "📺",
  tag: "Verified ✓",
  verified: true,
  stats: { likes: "8.5k", comments: "1.2k", shares: "3.4k" },
  content:
   "BREAKING: Mukesh Ambani announces new crypto platform 'JioCoin' — says every Indian should invest ₹10,000 now for 10x returns by December. Watch full video interview ",
  redFlags: [
   "Celebrity endorsement for crypto — likely deepfake",
   "Specific return promise (10x)",
   "'Verified' badge can be faked on screenshots",
   "No official Reliance/Jio announcement exists",
   "Urgency: invest 'now'"
  ],
  explanation:
   "Deepfake videos of business leaders endorsing crypto are extremely common. Always verify announcements through official company channels, not social media posts."
 },
 {
  id: 3,
  category: "Investment Scams",
  type: "legit",
  profileName: "SEBI Investor Education",
  avatar: "⚖️",
  tag: "Government",
  verified: true,
  stats: { likes: "25k", comments: "890", shares: "12k" },
  content:
   "Investing in mutual funds? Remember: All mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Check if your advisor is SEBI-registered at sebi.gov.in #InvestorAwareness",
  redFlags: [],
  explanation:
   "This is legitimate investor education from SEBI. Key trust signals: proper risk disclaimers, directing to official website, no return promises, registered government handle."
 },
 {
  id: 4,
  category: "Phishing",
  type: "scam",
  profileName: "+91-98XXX-XXXXX",
  avatar: "💬",
  tag: "SMS",
  verified: false,
  stats: { likes: "2", comments: "0", shares: "0" },
  content:
   "URGENT: Your SBI account will be BLOCKED in 24 hours! Complete KYC verification immediately. Click here: http://sbi-kyc-update.xyz/verify. Enter your Aadhaar, PAN & account details to continue.",
  redFlags: [
   "Urgency threat: 'BLOCKED in 24 hours'",
   "Suspicious URL: sbi-kyc-update.xyz (not sbi.co.in)",
   "Asking for Aadhaar, PAN & account details via link",
   "Banks NEVER ask for credentials via SMS",
   "Generic sender number, not official SBI shortcode"
  ],
  explanation:
   "Classic KYC phishing scam. Banks never ask for sensitive details via SMS links. Always visit the official bank website or branch directly."
 },
 {
  id: 5,
  category: "Impersonation",
  type: "scam",
  profileName: "CA Rakesh Jhunjhunwala Fund",
  avatar: "🐂",
  tag: "Telegram Group",
  verified: false,
  stats: { likes: "450", comments: "120", shares: "85" },
  content:
   "Welcome to the official trading group of late Shri Rakesh Jhunjhunwala's team! We continue his legacy. Today's tip: Buy XYZTECH at ₹45, target ₹120 in 2 weeks. Minimum investment ₹1 lakh via our secure portal.",
  redFlags: [
   "Impersonating a deceased public figure",
   "Using someone's name without authorization",
   "'Secure portal' for payments — likely fraudulent",
   "Unrealistic target (167% in 2 weeks)",
   "Telegram groups are common scam channels"
  ],
  explanation:
   "Scammers frequently impersonate famous investors. Rakesh Jhunjhunwala's estate has no official trading group. No legitimate advisor guarantees specific price targets."
 },
 {
  id: 6,
  category: "Deepfakes",
  type: "legit",
  profileName: "Zerodha",
  avatar: "📱",
  tag: "Verified ✓",
  verified: true,
  stats: { likes: "12k", comments: "560", shares: "1.1k" },
  content:
   "New feature: Track your portfolio's asset allocation with our updated console. Equity, debt, gold — see where you stand. No predictions, no tips, just data. Update your app to the latest version. #Zerodha",
  redFlags: [],
  explanation:
   "Legitimate post from a SEBI-registered broker. Trust signals: no return promises, focuses on tools/features, directs to official app update, proper disclaimer tone, verified account."
 },
 {
  id: 7,
  category: "Phishing",
  type: "scam",
  profileName: "TradeMaster Pro AI",
  avatar: "🤖",
  tag: "Ad",
  verified: false,
  stats: { likes: "3.4k", comments: "890", shares: "450" },
  content:
   "Our AI has predicted the next 5 multibagger stocks for 2026! Download our app and get FREE access to premium stock picks. Already 2,0,000+ downloads. Pay nothing today — just connect your demat account to get started!",
  redFlags: [
   "'Predicted multibaggers' — AI cannot predict stock prices",
   "Asking to connect demat account — credential theft risk",
   "Free premium access is the bait",
   "Fake download numbers",
   "No SEBI Research Analyst registration"
  ],
  explanation:
   "No AI can predict multibagger stocks. Connecting your demat account gives scammers access to your portfolio. Always verify if the app/advisor has SEBI RA registration."
 },
 {
  id: 8,
  category: "Impersonation",
  type: "scam",
  profileName: "WhatsApp Message",
  avatar: "💬",
  tag: "WhatsApp",
  verified: false,
  stats: { likes: "1", comments: "0", shares: "0" },
  content:
   "Hi! I'm Priya from Angel One support team. We noticed unusual activity in your trading account. Please share your Client ID and password so we can secure your account immediately. This is time-sensitive!",
  redFlags: [
   "Broker support NEVER contacts via personal WhatsApp",
   "Asking for password — legitimate support never does this",
   "Urgency: 'time-sensitive' pressure",
   "No official verification of identity",
   "Unsolicited contact about 'unusual activity'"
  ],
  explanation:
   "Brokers never ask for passwords via WhatsApp. If you receive such messages, contact your broker directly through their official app or helpline number."
 },
 {
  id: 9,
  category: "Investment Scams",
  type: "legit",
  profileName: "AMFI India",
  avatar: "🇮🇳",
  tag: "Official",
  verified: true,
  stats: { likes: "45k", comments: "2.3k", shares: "15k" },
  content:
   "Mutual Fund Sahi Hai! Start your SIP with as little as ₹500/month. Visit amfiindia.com to learn about different fund categories and find a registered distributor near you. Investments are subject to market risk.",
  redFlags: [],
  explanation:
   "Legitimate awareness campaign by AMFI (Association of Mutual Funds in India). Trust signals: proper risk disclaimer, directing to official website, reasonable investment amounts, no return promises."
 },
 {
  id: 10,
  category: "Deepfakes",
  type: "scam",
  profileName: "CryptoElite India",
  avatar: "🪙",
  tag: "Instagram Reel",
  verified: false,
  stats: { likes: "2.1k", comments: "4.5k", shares: "890" },
  content:
   "WATCH: Ratan Tata's AI explains why Bitcoin will hit $5,00,000! He invested ₹500 crore last week. Comment 'JOIN' and we'll DM you the exclusive investment link. Only 100 spots left today!",
  redFlags: [
   "Using Ratan Tata's name without authorization — likely deepfake",
   "Specific Bitcoin price prediction",
   "Fake investment claim (₹500 crore)",
   "'Comment JOIN' — engagement farming tactic",
   "Artificial scarcity: '100 spots left'"
  ],
  explanation:
   "Deepfake scam using a trusted public figure. Ratan Tata has never endorsed any cryptocurrency. The 'comment to join' tactic harvests targets for DM-based scams."
 },
 {
  id: 11,
  category: "Investment Scams",
  type: "scam",
  profileName: "Synthetic Trade AI",
  avatar: "📊",
  tag: "Ad",
  verified: false,
  stats: { likes: "574", comments: "97", shares: "39" },
  content: "AI-POWERED GUARANTEED PROFITS. 98.5% WIN RATE. EARN 15% DAILY. DEPOSIT NOW — INSTANT ACCESS. Join thousands already earning with our proven algorithm!",
  image: "/src/assets/q11_trade.png",
  redFlags: [
   "'Guaranteed Profits' — no trading platform can guarantee profits",
   "'98.5% Win Rate' — statistically impossible for any real system",
   "'Earn 15% Daily' — 15% daily = 5,475% yearly, completely impossible",
   "Urgency: 'Deposit Now — Instant Access'",
   "No regulatory registration (SEBI/RBI) mentioned"
  ],
  explanation: "This is a fraudulent trading platform ad. Real trading always involves risk — 'guaranteed profits' is illegal to claim under SEBI rules. A '15% daily' return would make someone a billionaire in months. These platforms steal your deposit and vanish."
 },
 {
  id: 12,
  category: "Deepfakes",
  type: "scam",
  profileName: "InvestmentGuru Live",
  avatar: "🎬",
  tag: "Viral Video",
  verified: false,
  stats: { likes: "4276", comments: "118", shares: "116" },
  content: "WATCH: Amitabh Bachchan personally endorses this investment platform and shares how he turned ₹10,000 into ₹5 lakhs in 30 days! Click the link in bio to join — he says hurry, offer closes tonight!",
  video: "/src/assets/q12_bachchan.mp4",
  poster: "/src/assets/q12_bachchan_poster.png",
  redFlags: [
   "Celebrity deepfake endorsement",
   "Unrealistic returns (₹10k to ₹5L in 30 days)",
   "Urgency tactic: 'offer closes tonight'",
   "Directing to 'link in bio' for suspicious platforms"
  ],
  explanation: "This is a deepfake video scam. Scammers use AI to mimic celebrities endorsing fake platforms. No legitimate investment can multiply money 50x in a month. Always verify celebrity endorsements through their official accounts."
 },
 {
  id: 13,
  category: "Deepfakes",
  type: "scam",
  profileName: "Global Tech News",
  avatar: "🌍",
  tag: "Breaking",
  verified: false,
  stats: { likes: "12.4k", comments: "892", shares: "2.1k" },
  content: "EXCLUSIVE: New AI technology promises to double your savings in just 15 days! Watch this leaked interview where top tech leaders explain the secret algorithm. Don't miss out on this limited opportunity!",
   video: "/src/assets/e2d075e1d5cc464882baba7a257954de_small.mp4",
  redFlags: [
   "Unrealistic promise: 'double savings in 15 days'",
   "Using 'leaked' or 'secret' narrative to build curiosity",
   "Artificial urgency: 'limited opportunity'",
   "Likely deepfake of tech leaders",
   "No verified source or official confirmation"
  ],
  explanation: "This video uses deepfake technology to impersonate tech leaders and promote a 'get-rich-quick' scheme. No legitimate investment can double your money in such a short time. Scammers use the 'leaked interview' trope to bypass critical thinking."
 }
];

const CATEGORIES = ["Investment Scams", "Deepfakes", "Phishing", "Impersonation"];

const getTitle = (s) => (s <= 40 ? "Scam Rookie" : s <= 70 ? "Fraud Detective" : "Scam Slayer");
const getTitleColor = (s) => (s <= 40 ? "#ff4757" : s <= 70 ? "#ffa502" : "#2ed573");
const getTitleEmoji = (s) => (s <= 40 ? "⚠️" : s <= 70 ? "🕵️" : "🛡️");

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

const buildGameDeck = () => {
  const media = CARDS.filter(isMediaCard);
  if (media.length >= GAME_QUESTION_COUNT) {
    return shuffle(media).slice(0, GAME_QUESTION_COUNT);
  }

  const others = CARDS.filter((c) => !isMediaCard(c));
  const needed = GAME_QUESTION_COUNT - media.length;
  const pickedOthers = shuffle(others).slice(0, needed);
  return shuffle([...media, ...pickedOthers]);
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

  // Motion values for swiping
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const scamOpacity = useTransform(x, [-100, -50], [1, 0]);
  const legitOpacity = useTransform(x, [50, 100], [0, 1]);

  const handleStart = useCallback(() => {
    setScreen("mascot-select");
  }, []);

  const handleMascotSelect = (mascot) => {
    setSelectedMascot(mascot);
    setDeck(buildGameDeck());
    setCi(0);
    setAnswers([]);
    setTimes([]);
    setShowReveal(false);
    setLastAnswer(null);
    setStreak(0);
    setMaxStreak(0);
    x.set(0);
    setScreen("game");
    setCardStart(getNow());
  };

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

  const handleSwipe = useCallback((dir) => {
    if (showReveal) return;
    stopActiveVideo();
    const card = deck[ci];
    const userSays = dir === "left" ? "scam" : "legit";
    const correct = userSays === card.type;
    const t = Math.round(getNow() - cardStart);
    
    setTimes((p) => [...p, t]);
    setLastAnswer({ correct, userSays, card });
    setAnswers((p) => [...p, { cardId: card.id, correct, category: card.category, time: t }]);
    
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
  }, [ci, showReveal, cardStart, deck, stopActiveVideo]);

  const handleNext = useCallback(() => {
    stopActiveVideo();
    setShowReveal(false);
    setLastAnswer(null);
    x.set(0);
    if (ci + 1 >= deck.length) {
      setScreen("score");
    } else {
      setCi(c => c + 1);
      setCardStart(getNow());
    }
  }, [ci, x, deck.length, stopActiveVideo]);

  // Calculations
  const stats = useMemo(() => {
    const totalQuestions = deck.length || GAME_QUESTION_COUNT;
    const correctAnswers = answers.filter((a) => a.correct).length;
    const accuracy = answers.length ? Math.round((correctAnswers / answers.length) * 100) : 0;
    
    const avgTime = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
    // Speed Score: 100 if < 3s, linear drop to 0 at 15s
    const speedScore = Math.max(0, Math.min(100, Math.round(100 - (Math.max(0, avgTime - 3000) / 120))));
    
    // Streak Score: linear reward up to total questions
    const streakScore = totalQuestions ? Math.min(100, Math.round((maxStreak / totalQuestions) * 100)) : 0;

    // Awareness Index = 80% Accuracy + 10% Streak + 10% Speed
    // This ensures accuracy is the primary driver of trust
    const trustIndex = Math.round((accuracy * 0.8) + (streakScore * 0.1) + (speedScore * 0.1));
    
    const catScores = {};
    CATEGORIES.forEach((cat) => {
      const ca = answers.filter((a) => a.category === cat);
      catScores[cat] = ca.length ? Math.round((ca.filter((a) => a.correct).length / ca.length) * 100) : 0;
    });

    return { accuracy, trustIndex, catScores, correctCount: correctAnswers };
  }, [answers, times, maxStreak, deck.length]);

  const { accuracy, trustIndex, catScores, correctCount } = stats;

  return (
    <div className="sw-container">
      <AnimatePresence mode="wait">
        {screen === "intro" && (
          <motion.div
            key="intro"
            className="sw-content-wrapper sw-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="sw-shield-icon">
              <img
                src={resolveAssetUrl("logo.png")}
                alt="SwipeWise Logo"
                style={{ width: 380, height: 140, objectFit: "contain", marginBottom: 0 }}
              />
            </div>
            {/* <h1 className="sw-title">SwipeWise</h1> */}
            <div className="sw-subtitle" style={{ marginTop: "4px", marginBottom: "12px" }}>
              BY SEBI × IOSCO TECHSPRINT
            </div>

            <div className="sw-glass-card">
              <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>Test Your Awareness Index</h2>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                Can you spot scams before they trap you?
              </p>
              <div className="sw-hint-container">
                <div className="sw-hint-item">
                  <span className="sw-hint-emoji">👈</span>
                  <span className="sw-hint-label" style={{ color: "var(--scam-color)" }}>Scam</span>
                </div>
                <div className="sw-hint-item">
                  <span className="sw-hint-emoji">👉</span>
                  <span className="sw-hint-label" style={{ color: "var(--legit-color)" }}>Legit</span>
                </div>
              </div>
            </div>

            <motion.button
              className="sw-start-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
            >
              Start Game
            </motion.button>
            <div className="sw-footer-info" style={{ marginTop: "12px", fontSize: "10px", color: "#444" }}>
              10 rounds • 3 min • Free
            </div>
          </motion.div>
        )}

        {screen === "mascot-select" && (
          <motion.div
            key="mascot-select"
            className="sw-content-wrapper sw-intro"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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
                    <img
                      src={resolveAssetUrl(m.img)}
                      alt={m.name}
                      className="sw-mascot-select-img"
                      decoding="async"
                      loading="eager"
                    />
                  </div>
                  <div className="sw-mascot-name" style={{ color: m.color, fontWeight: "bold", marginTop: "10px" }}>{m.name}</div>
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

        {screen === "game" && (
          <motion.div
            key="game"
            className="sw-content-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="sw-game-header">
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
                          ? "rgba(123,47,247,0.5)"
                          : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
              <div className="sw-header-stats">
                <span>{ci + 1} / {deck.length}</span>
                <span>Streak: {streak}</span>
              </div>
            </div>

            <div className="sw-card-container">
              <AnimatePresence mode="wait">
                {!showReveal ? (
                  <motion.div
                    key={deck[ci]?.id}
                    className="sw-card"
                    style={{ x, rotate, opacity }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -100) handleSwipe("left");
                      else if (info.offset.x > 100) handleSwipe("right");
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

                    <div className="sw-content">{deck[ci].content}</div>

                    {deck[ci].image && (
                      <div className="sw-card-media">
                        <img
                          src={resolveAssetUrl(deck[ci].image)}
                          alt="Evidence"
                          className="sw-media-img"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {deck[ci].video && (
                      <div className="sw-card-media">
                        <video 
                          src={resolveAssetUrl(deck[ci].video)} 
                          preload="auto"
                          muted
                          playsInline
                          controls 
                          className="sw-media-video"
                          poster={deck[ci].poster ? resolveAssetUrl(deck[ci].poster) : undefined}
                          ref={activeVideoRef}
                        />
                      </div>
                    )}

                    <div className="sw-post-stats">
                      <span>❤️ {deck[ci].stats.likes}</span>
                      <span>💬 {deck[ci].stats.comments}</span>
                      <span>↗ {deck[ci].stats.shares}</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="reveal"
                    className="sw-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
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
                        Tap anywhere to continue →
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="sw-controls">
              <motion.button
                className="sw-action-btn sw-btn-scam"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe("left")}
                disabled={showReveal}
              >
                ✕
              </motion.button>
              <motion.button
                className="sw-action-btn sw-btn-legit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe("right")}
                disabled={showReveal}
              >
                ✓
              </motion.button>
            </div>
            
            <div className="sw-hints">
              <span>← Swipe Left if Scam</span>
              <span>Swipe Right if Legit →</span>
            </div>

            {selectedMascot && (
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
          </motion.div>
        )}

        {screen === "score" && (
          <motion.div
            key="score"
            className="sw-score-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
              </div>
            </div>

            <div className="sw-section-card">
              <div className="sw-section-title">CATEGORY BREAKDOWN</div>
              {CATEGORIES.map(cat => {
                const s = catScores[cat];
                const clr = s >= 70 ? "var(--legit-color)" : s >= 40 ? "#ffa502" : "var(--scam-color)";
                return (
                  <div key={cat} className="sw-cat-row">
                    <span className="sw-cat-name">{cat}</span>
                    <div className="sw-cat-bar-container">
                      <motion.div
                        className="sw-cat-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${s}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ background: clr }}
                      />
                    </div>
                    <span className="sw-cat-pct" style={{ color: clr }}>{s}%</span>
                  </div>
                );
              })}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
      </AnimatePresence>
    </div>
  );
}
