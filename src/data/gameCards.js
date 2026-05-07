// Game Mode Cards — Challenge-only, fast-paced swipe content
export const GAME_CARDS = [
  // === INVESTMENT SCAMS ===
  {
    id: 101,
    category: "Investment Scams",
    type: "scam",
    profileName: "WealthMax Trading",
    avatar: "logo.png",
    tag: "Sponsored",
    verified: false,
    stats: { likes: "1.2k", comments: "428", shares: "125" },
    content: "🚀 GUARANTEED 20% monthly returns! Our AI-powered trading bot has NEVER lost a trade. Join 50,000+ investors earning passive income. Limited spots — register NOW with just ₹5,000! Link in bio",
    redFlags: ["'Guaranteed returns' — illegal claim under SEBI", "'NEVER lost a trade' — statistically impossible", "Urgency: 'Limited spots'", "No SEBI registration mentioned"],
    explanation: "This is a classic investment scam. SEBI regulations prohibit guaranteeing returns. No trading system wins 100% of the time."
  },
  {
    id: 102,
    category: "Investment Scams",
    type: "scam",
    profileName: "Synthetic Trade AI",
    avatar: "📊",
    tag: "Ad",
    verified: false,
    stats: { likes: "574", comments: "97", shares: "39" },
    content: "AI-POWERED GUARANTEED PROFITS. 98.5% WIN RATE. EARN 15% DAILY. DEPOSIT NOW — INSTANT ACCESS. Join thousands already earning with our proven algorithm!",
    image: "/src/assets/q11_trade.png",
    redFlags: ["'Guaranteed Profits' — no platform can guarantee profits", "'98.5% Win Rate' — statistically impossible", "'Earn 15% Daily' = 5,475% yearly — impossible", "No regulatory registration mentioned"],
    explanation: "Real trading always involves risk. '15% daily' would make someone a billionaire in months. These platforms steal your deposit and vanish."
  },
  {
    id: 103,
    category: "Investment Scams",
    type: "legit",
    profileName: "SEBI Investor Education",
    avatar: "⚖️",
    tag: "Government",
    verified: true,
    stats: { likes: "25k", comments: "890", shares: "12k" },
    content: "Investing in mutual funds? Remember: All mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Check if your advisor is SEBI-registered at sebi.gov.in #InvestorAwareness",
    redFlags: [],
    explanation: "Legitimate investor education from SEBI. Trust signals: proper risk disclaimers, directing to official website, no return promises."
  },
  {
    id: 104,
    category: "Investment Scams",
    type: "legit",
    profileName: "AMFI India",
    avatar: "🇮🇳",
    tag: "Official",
    verified: true,
    stats: { likes: "45k", comments: "2.3k", shares: "15k" },
    content: "Mutual Fund Sahi Hai! Start your SIP with as little as ₹500/month. Visit amfiindia.com to learn about different fund categories and find a registered distributor near you. Investments are subject to market risk.",
    redFlags: [],
    explanation: "Legitimate awareness campaign by AMFI. Trust signals: proper risk disclaimer, official website, no return promises."
  },
  {
    id: 105,
    category: "Investment Scams",
    type: "scam",
    profileName: "CopyTrade Elite",
    avatar: "💹",
    tag: "Sponsored",
    verified: false,
    stats: { likes: "3.1k", comments: "501", shares: "210" },
    content: "Copy our expert trader's portfolio automatically! He made 340% returns last year. Subscribe for ₹999/month and mirror every trade instantly. Zero knowledge required. Profits guaranteed or money back!",
    redFlags: ["'340% returns' — extraordinary unverified claim", "'Guaranteed profits or money back' — illegal under SEBI", "Copy trading without SEBI RA license is illegal", "No disclosure of risks"],
    explanation: "Copy trading services must be registered as Portfolio Management Services (PMS) with SEBI. Guaranteed return promises are illegal."
  },

  // === DEEPFAKES ===
  {
    id: 201,
    category: "Deepfakes",
    type: "scam",
    profileName: "Business Today Live",
    avatar: "📺",
    tag: "Verified ✓",
    verified: true,
    stats: { likes: "8.5k", comments: "1.2k", shares: "3.4k" },
    content: "BREAKING: Mukesh Ambani announces new crypto platform 'JioCoin' — says every Indian should invest ₹10,000 now for 10x returns by December. Watch full video interview",
    redFlags: ["Celebrity endorsement for crypto — likely deepfake", "Specific return promise (10x)", "'Verified' badge can be faked on screenshots", "No official Reliance/Jio announcement exists"],
    explanation: "Deepfake videos of business leaders endorsing crypto are extremely common. Always verify through official company channels."
  },
  {
    id: 202,
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
    redFlags: ["Celebrity deepfake endorsement", "Unrealistic returns (₹10k to ₹5L in 30 days)", "Urgency tactic: 'offer closes tonight'", "Directing to 'link in bio' for suspicious platform"],
    explanation: "Scammers use AI to mimic celebrities endorsing fake platforms. No legitimate investment can multiply money 50x in a month."
  },
  {
    id: 203,
    category: "Deepfakes",
    type: "scam",
    profileName: "CryptoElite India",
    avatar: "🪙",
    tag: "Instagram Reel",
    verified: false,
    stats: { likes: "2.1k", comments: "4.5k", shares: "890" },
    content: "WATCH: Ratan Tata's AI explains why Bitcoin will hit $5,00,000! He invested ₹500 crore last week. Comment 'JOIN' and we'll DM you the exclusive investment link. Only 100 spots left today!",
    redFlags: ["Using Ratan Tata's name — likely deepfake", "Specific Bitcoin price prediction", "Fake investment claim (₹500 crore)", "'Comment JOIN' — engagement farming tactic"],
    explanation: "Deepfake scam using a trusted public figure. Ratan Tata has never endorsed any cryptocurrency."
  },
  {
    id: 204,
    category: "Deepfakes",
    type: "legit",
    profileName: "Zerodha",
    avatar: "📱",
    tag: "Verified ✓",
    verified: true,
    stats: { likes: "12k", comments: "560", shares: "1.1k" },
    content: "New feature: Track your portfolio's asset allocation with our updated console. Equity, debt, gold — see where you stand. No predictions, no tips, just data. Update your app to the latest version. #Zerodha",
    redFlags: [],
    explanation: "Legitimate post from a SEBI-registered broker. No return promises, focuses on tools, directs to official app."
  },

  // === PHISHING ===
  {
    id: 301,
    category: "Phishing",
    type: "scam",
    profileName: "+91-98XXX-XXXXX",
    avatar: "💬",
    tag: "SMS",
    verified: false,
    stats: { likes: "2", comments: "0", shares: "0" },
    content: "URGENT: Your SBI account will be BLOCKED in 24 hours! Complete KYC verification immediately. Click here: http://sbi-kyc-update.xyz/verify. Enter your Aadhaar, PAN & account details to continue.",
    redFlags: ["Urgency threat: 'BLOCKED in 24 hours'", "Suspicious URL: sbi-kyc-update.xyz (not sbi.co.in)", "Asking for Aadhaar, PAN via link", "Banks NEVER ask for credentials via SMS"],
    explanation: "Classic KYC phishing scam. Banks never ask for sensitive details via SMS links. Visit the official bank website or branch directly."
  },
  {
    id: 302,
    category: "Phishing",
    type: "scam",
    profileName: "HDFC Bank Alert",
    avatar: "🏦",
    tag: "Email",
    verified: false,
    stats: { likes: "0", comments: "0", shares: "0" },
    content: "Dear Customer, Your Net Banking has been temporarily disabled. To restore access, verify your identity at: hdfc-secure-login.net/verify within 2 hours or account will be permanently suspended. Enter OTP you receive.",
    redFlags: ["Fake domain: hdfc-secure-login.net (not hdfcbank.com)", "Urgency: '2 hours or permanent suspension'", "Asking for OTP — banks NEVER ask for OTP", "Generic greeting 'Dear Customer'"],
    explanation: "HDFC Bank's official domain is hdfcbank.com only. Any link from a different domain is phishing. Never share OTPs with anyone."
  },
  {
    id: 303,
    category: "Phishing",
    type: "scam",
    profileName: "Income Tax Department",
    avatar: "🇮🇳",
    tag: "WhatsApp",
    verified: false,
    stats: { likes: "1", comments: "0", shares: "0" },
    content: "IT Department Notice: You have an unclaimed tax refund of ₹18,450. To process your refund immediately, share your bank account number, IFSC code and ATM PIN via this secure link: incometax-refund.in/claim",
    redFlags: ["Government never asks for ATM PIN", "Fake domain: incometax-refund.in (not incometax.gov.in)", "Unsolicited refund claim", "Asking for bank + ATM details together"],
    explanation: "Income Tax refunds go directly to your registered bank account. The government never asks for ATM PINs or sends refund links via WhatsApp."
  },

  // === IMPERSONATION ===
  {
    id: 401,
    category: "Impersonation",
    type: "scam",
    profileName: "CA Rakesh Jhunjhunwala Fund",
    avatar: "🐂",
    tag: "Telegram Group",
    verified: false,
    stats: { likes: "450", comments: "120", shares: "85" },
    content: "Welcome to the official trading group of late Shri Rakesh Jhunjhunwala's team! We continue his legacy. Today's tip: Buy XYZTECH at ₹45, target ₹120 in 2 weeks. Minimum investment ₹1 lakh via our secure portal.",
    redFlags: ["Impersonating a deceased public figure", "'Secure portal' for payments — likely fraudulent", "Unrealistic target (167% in 2 weeks)", "Telegram groups are common scam channels"],
    explanation: "Scammers frequently impersonate famous investors. No legitimate advisor guarantees specific price targets."
  },
  {
    id: 402,
    category: "Impersonation",
    type: "scam",
    profileName: "WhatsApp Message",
    avatar: "💬",
    tag: "WhatsApp",
    verified: false,
    stats: { likes: "1", comments: "0", shares: "0" },
    content: "Hi! I'm Priya from Angel One support team. We noticed unusual activity in your trading account. Please share your Client ID and password so we can secure your account immediately. This is time-sensitive!",
    redFlags: ["Broker support NEVER contacts via personal WhatsApp", "Asking for password — legitimate support never does this", "Urgency: 'time-sensitive' pressure", "No official verification of identity"],
    explanation: "Brokers never ask for passwords via WhatsApp. Contact your broker directly through their official app or helpline number."
  },
  {
    id: 403,
    category: "Impersonation",
    type: "scam",
    profileName: "SEBI Official Notice",
    avatar: "⚖️",
    tag: "WhatsApp",
    verified: false,
    stats: { likes: "0", comments: "0", shares: "0" },
    content: "This is SEBI Officer Rajan Kumar (ID: SEBI/2024/001). Your trading account shows suspicious transactions. To avoid arrest, pay a settlement amount of ₹50,000 to this UPI ID: settlement@sebi-legal.in and forward to 10 people.",
    redFlags: ["SEBI never contacts via WhatsApp", "Threatening arrest for trading is illegal intimidation", "SEBI has no UPI IDs for payments", "Chain message request is classic fraud"],
    explanation: "SEBI officers never contact individuals via WhatsApp. SEBI communicates only through official letters. This is an impersonation scam."
  },

  // === TELEGRAM / PUMP GROUPS ===
  {
    id: 501,
    category: "Investment Scams",
    type: "scam",
    profileName: "StockAlerts Pro",
    avatar: "📡",
    tag: "Telegram",
    verified: false,
    stats: { likes: "892", comments: "341", shares: "78" },
    content: "🚨 URGENT BUY ALERT 🚨\nStock: MICROCAP XYZ\nCMP: ₹12\nTarget: ₹45 (3x in 30 days!)\n⚠️ Act NOW before price jumps! Our insiders have confirmed upcoming news. Only shared with premium members. Buy maximum quantity!",
    redFlags: ["'Insiders' claim — using insider information is illegal (SEBI Act)", "Micro-cap stocks targeted — easy to manipulate", "Urgent buy call without SEBI RA license", "'Act NOW' creates irrational FOMO"],
    explanation: "This is a classic 'pump and dump' scheme. The organizers buy first, then spread hype, then sell at peak when others rush in. Classic market manipulation under SEBI Act."
  },
  {
    id: 502,
    category: "Investment Scams",
    type: "scam",
    profileName: "F&O Millionaire Club",
    avatar: "⚡",
    tag: "Telegram",
    verified: false,
    stats: { likes: "1.4k", comments: "287", shares: "95" },
    content: "Made ₹2.3 lakhs today with a single options trade! 🔥 Join my premium channel for ₹5,000/month and I'll share all my trades LIVE. I turned ₹50,000 into ₹25 lakhs in 6 months. Screenshot proof available!",
    redFlags: ["Fake PnL screenshots are easily fabricated", "No SEBI Research Analyst registration mentioned", "Providing tips for payment without license is illegal", "F&O has high failure rate — 89% retail traders lose"],
    explanation: "SEBI data shows 89% of F&O traders lose money. Anyone providing paid trading tips needs a SEBI Research Analyst license. Fake PnL screenshots are extremely common."
  },

  // === UPI / QR SCAMS ===
  {
    id: 601,
    category: "Phishing",
    type: "scam",
    profileName: "OLX Buyer",
    avatar: "💬",
    tag: "WhatsApp",
    verified: false,
    stats: { likes: "0", comments: "0", shares: "0" },
    content: "Hi! I want to buy your laptop. I'm in the army and can't meet in person. I'll send payment via UPI. Please scan this QR code to RECEIVE the advance payment of ₹5,000. [QR Code Image]",
    redFlags: ["'Army person' excuse to avoid in-person meeting", "You scan QR code to 'receive' money — impossible (QR codes debit, not credit)", "Advance payment pressure tactic", "Never scan QR codes sent by strangers"],
    explanation: "Scanning a QR code always sends money FROM your account, never to it. 'Receive payment by scanning QR' is the classic OLX/Quikr scam."
  },
  {
    id: 602,
    category: "Phishing",
    type: "scam",
    profileName: "Phone Pay Support",
    avatar: "📱",
    tag: "Call",
    verified: false,
    stats: { likes: "0", comments: "0", shares: "0" },
    content: "Customer received a call: 'Hello, I'm calling from PhonePe. We noticed your KYC is incomplete. To avoid account suspension, please approve a small ₹1 payment request on your PhonePe app to verify your account.'",
    redFlags: ["PhonePe never calls asking to approve payment requests", "Approving the 'verification' request actually sends money", "KYC is done through the official app only", "Unsolicited call with urgency is a red flag"],
    explanation: "This is a social engineering scam. The 'verification payment' actually deducts money from your account. KYC is only done through the official app, never via phone calls."
  },

  // === CRYPTO / FAKE APPS ===
  {
    id: 701,
    category: "Investment Scams",
    type: "scam",
    profileName: "CryptoWin India",
    avatar: "₿",
    tag: "Ad",
    verified: false,
    stats: { likes: "2.8k", comments: "612", shares: "189" },
    content: "🪙 CRYPTO ARBITRAGE BOT 🪙\nEarn ₹15,000-₹50,000 daily! No trading knowledge needed. Our bot buys low on one exchange and sells high on another automatically. Just deposit ₹10,000 to start. Withdrawal anytime!",
    redFlags: ["'₹50,000 daily' — astronomical unrealistic claim", "Arbitrage opportunities are extremely small and rare", "'Withdrawal anytime' — common rug-pull promise", "No RBI/SEBI authorization for crypto platforms"],
    explanation: "Crypto arbitrage bots promising huge daily returns are scams. Real arbitrage opportunities are tiny and exploited by institutional players in milliseconds."
  },
  {
    id: 702,
    category: "Investment Scams",
    type: "scam",
    profileName: "GlobalInvest App",
    avatar: "🌐",
    tag: "App Store",
    verified: false,
    stats: { likes: "1.1k", comments: "234", shares: "67" },
    content: "⭐⭐⭐⭐⭐ VERIFIED RETURNS\nDeposit ₹5,000 → Receive ₹7,500 in 7 days!\nOver 2 lakh satisfied investors. RBI licensed. SEBI approved. Download our app now! [Download Link]",
    redFlags: ["'RBI licensed, SEBI approved' — fake claims for investment returns", "Specific return in specific days is guaranteed — illegal", "Fake reviews and user counts", "Third-party download link, not official app stores"],
    explanation: "Neither SEBI nor RBI 'approve' investment returns. These are fabricated claims. Always verify any platform's registration at sebi.gov.in or rbi.org.in."
  },

  // === SOCIAL MEDIA / INFLUENCER SCAMS ===
  {
    id: 801,
    category: "Investment Scams",
    type: "scam",
    profileName: "Rahul_FinanceGuru",
    avatar: "🎥",
    tag: "Instagram",
    verified: false,
    stats: { likes: "18.4k", comments: "892", shares: "1.2k" },
    content: "Made ₹12 lakhs this month trading from my phone! 📱💰 DM me 'LEARN' and I'll add you to my exclusive paid course where I share all my secret strategies. Only ₹15,000 for lifetime access. Spots filling fast!",
    redFlags: ["Displaying wealth without proof of legitimate income", "No SEBI Research Analyst registration", "Paid courses for trading tips require regulatory approval", "Creating FOMO with 'spots filling fast'"],
    explanation: "Many finance influencers operate without SEBI registration. Providing investment advice for payment requires a SEBI RA license. Report unregistered advisors to SEBI."
  },
  {
    id: 802,
    category: "Investment Scams",
    type: "scam",
    profileName: "WhatsApp Broadcast",
    avatar: "💬",
    tag: "WhatsApp",
    verified: false,
    stats: { likes: "0", comments: "0", shares: "0" },
    content: "🌟 GOVT APPROVED SCHEME 🌟\nPM Modi launches new scheme: Invest ₹2,000 and get ₹50,000 in 60 days! This is a real government initiative for poor families. Share with 20 contacts to activate your account. Limited time!",
    redFlags: ["Government never launches investment schemes via WhatsApp", "Chain message requirement is fraud pattern", "'PM Modi scheme' — political figures used to build trust", "No official government scheme has such returns"],
    explanation: "Government schemes are announced through official channels (PIB, government websites), never via WhatsApp chains. This is a viral fraud designed to steal personal information."
  },

  // === FAKE IPO / JOB SCAMS ===
  {
    id: 901,
    category: "Investment Scams",
    type: "scam",
    profileName: "IPO Alert India",
    avatar: "📋",
    tag: "Email",
    verified: false,
    stats: { likes: "234", comments: "45", shares: "23" },
    content: "EXCLUSIVE: You have been pre-selected for [Large Company] IPO allotment! To confirm your allotment of 500 shares worth ₹1.5 lakhs, pay a one-time processing fee of ₹5,000 to: paytm@ipoallotment.in before 5 PM today.",
    redFlags: ["IPO allotment is random via ASBA — no pre-selection", "Processing fees for IPO allotment don't exist", "Fake domain for payment", "Time pressure: '5 PM today'"],
    explanation: "IPO allotment is done by a lottery system (ASBA) — there are no 'pre-selected' allotments. No processing fees are charged for IPO applications."
  },
  {
    id: 902,
    category: "Investment Scams",
    type: "scam",
    profileName: "FinancePro HR",
    avatar: "👔",
    tag: "LinkedIn",
    verified: false,
    stats: { likes: "12", comments: "3", shares: "1" },
    content: "URGENT HIRING: Stock Market Analyst — Work from Home\nSalary: ₹80,000/month\nRequirements: None\nJust invest ₹25,000 as security deposit (refundable) to get access to our trading terminal. Interview via WhatsApp only.",
    redFlags: ["No legitimate company asks for security deposits for jobs", "WhatsApp-only interview is a red flag", "High salary for 'no requirements' is unrealistic", "Investment required to start work = scam"],
    explanation: "Job scams that require upfront payments are extremely common. Legitimate employers never ask for security deposits. Report to the National Cyber Crime Helpline: 1930."
  },

  // === FAKE CUSTOMER SUPPORT ===
  {
    id: 1001,
    category: "Impersonation",
    type: "scam",
    profileName: "Groww Support",
    avatar: "📞",
    tag: "Google Ad",
    verified: false,
    stats: { likes: "156", comments: "28", shares: "7" },
    content: "Groww Customer Care: 1800-XXX-XXXX (Toll Free)\nHaving issues with your account? Withdrawal stuck? KYC problem? Call now for instant resolution. Available 24/7. Our experts will remotely access your phone to fix issues.",
    redFlags: ["Fake customer care numbers on Google ads are common", "'Remote access to phone' — they install malware/spy apps", "Official Groww support never asks for remote access", "Ads can be purchased by anyone, including scammers"],
    explanation: "Scammers buy Google ads with fake support numbers. Never allow remote access to your phone. Always find support numbers from the official app or website."
  },
  {
    id: 1002,
    category: "Impersonation",
    type: "legit",
    profileName: "Groww",
    avatar: "💚",
    tag: "Verified ✓",
    verified: true,
    stats: { likes: "34k", comments: "1.2k", shares: "2.8k" },
    content: "📢 Important: Groww will NEVER ask for your password, PIN, or OTP via phone, email, or WhatsApp. Our support team only contacts you through the in-app support chat. Stay safe, stay invested. #CyberSafety",
    redFlags: [],
    explanation: "This is legitimate communication from Groww warning users about scams. Real companies actively communicate security reminders. Always use in-app support channels."
  },

  // === DEEPFAKE AI NEWS ===
  {
    id: 1101,
    category: "Deepfakes",
    type: "scam",
    profileName: "Global Tech News",
    avatar: "🌍",
    tag: "Breaking",
    verified: false,
    stats: { likes: "12.4k", comments: "892", shares: "2.1k" },
    content: "EXCLUSIVE: New AI technology promises to double your savings in just 15 days! Watch this leaked interview where top tech leaders explain the secret algorithm. Don't miss out on this limited opportunity!",
    video: "/src/assets/e2d075e1d5cc464882baba7a257954de_small.mp4",
    redFlags: ["'Double savings in 15 days' — impossible", "Using 'leaked' narrative to build curiosity", "Artificial urgency: 'limited opportunity'", "Likely deepfake of tech leaders"],
    explanation: "This video uses deepfake technology to impersonate tech leaders. No legitimate investment can double money in 15 days."
  },
  {
    id: 1102,
    category: "Deepfakes",
    type: "scam",
    profileName: "CryptoNews24",
    avatar: "📰",
    tag: "YouTube",
    verified: false,
    stats: { likes: "5.6k", comments: "723", shares: "445" },
    content: "WATCH LIVE: Narayana Murthy REVEALS the hidden crypto that will make every Indian a millionaire in 2025! He's giving away ₹50,000 in Bitcoin to the first 1,000 subscribers. Comment your wallet address NOW!",
    redFlags: ["Celebrity live streams used for giveaway scams", "'Wallet address' collection — direct crypto theft", "Narayana Murthy has no crypto giveaway", "Commenting wallet address exposes you to phishing"],
    explanation: "Deepfake live stream scams use celebrities to create fake giveaways. Sharing your crypto wallet address enables targeted scam attacks. Never share wallet addresses publicly."
  },

  // === BANKING & PAYMENTS ===
  {
    id: 1201,
    category: "Phishing",
    type: "scam",
    profileName: "Google Pay Alert",
    avatar: "💳",
    tag: "SMS",
    verified: false,
    stats: { likes: "1", comments: "0", shares: "0" },
    content: "GPay: Your account is suspended due to suspicious activity. Verify now at: gpay-verify-account.com/secure or your account will be permanently closed in 12 hours. Enter your UPI PIN to verify.",
    redFlags: ["Fake domain: gpay-verify-account.com (not google.com)", "UPI PIN should NEVER be shared", "12-hour urgency is a pressure tactic", "Google Pay never contacts via SMS for PIN verification"],
    explanation: "UPI PINs are used only to authorise transactions — sharing them gives full access to your money. Google Pay's official domain is pay.google.com only."
  },
  {
    id: 1202,
    category: "Phishing",
    type: "legit",
    profileName: "National Payments Corporation of India",
    avatar: "🏛️",
    tag: "Official",
    verified: true,
    stats: { likes: "89k", comments: "3.4k", shares: "22k" },
    content: "🔒 UPI Safety Reminder:\n✅ Never share your UPI PIN with anyone\n✅ Never approve payment requests from unknown people\n✅ Banks & NPCI will NEVER ask for your PIN\nReport fraud: 1800-120-1740 or cybercrime.gov.in",
    redFlags: [],
    explanation: "Legitimate safety advisory from NPCI. Trust signals: provides official helpline numbers, no requests for personal information, educating rather than alarming."
  },

  // === FAKE PNL / SCREENSHOTS ===
  {
    id: 1301,
    category: "Investment Scams",
    type: "scam",
    profileName: "TradingWithSuresh",
    avatar: "📈",
    tag: "Telegram",
    verified: false,
    stats: { likes: "2.3k", comments: "445", shares: "178" },
    content: "Today's result 🔥🔥🔥\n[Screenshot: Zerodha P&L showing ₹4,23,567 profit today]\nThis is REAL. My premium group members got this same call. Join for just ₹3,999/month. Tonight special: First 10 people get 50% off! DM NOW 🎯",
    redFlags: ["P&L screenshots are extremely easy to edit/fabricate", "No SEBI Research Analyst license mentioned", "Urgency: 'Tonight special' + artificial scarcity", "Paid tip service without SEBI registration is illegal"],
    explanation: "P&L screenshots can be easily fabricated using editing tools or by modifying browser developer tools. SEBI requires Research Analyst registration for paid advice."
  }
];

export const GAME_CATEGORIES = ["Investment Scams", "Deepfakes", "Phishing", "Impersonation"];
