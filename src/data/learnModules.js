export const LEARN_MODULES = [
  // --- TOPIC: beginner (I'm New to Investing) ---
  {
    id: "beginner-1",
    topicId: "beginner",
    level: "Beginner",
    title: "What is SEBI?",
    concept: "SEBI (Securities and Exchange Board of India) is the regulator for the securities market in India. It protects investors and ensures the market functions fairly.",
    example: "Imagine a referee in a football match—SEBI makes sure everyone follows the rules and no one gets cheated.",
    tactics: ["Using fake SEBI logos", "Impersonating SEBI officials", "Claiming 'SEBI Guaranteed' returns"],
    checkList: ["Check if the person is SEBI-registered", "Visit the official sebi.gov.in website", "Never trust 'guaranteed' promises"],
    whyPeopleFall: "The government's name builds instant trust, and scammers exploit this authority.",
    card: {
      content: "Official Notice from SEBI Officer: Your demat account is under investigation for illegal trading. To clear your name, pay a fine of ₹5,000 to this UPI ID immediately.",
      type: "scam",
      redFlags: ["SEBI never contacts individuals via WhatsApp/UPI", "Threats of investigation to create fear", "Demanding money to 'clear your name'"],
      explanation: "SEBI communicates via official letters and never asks for fines via UPI. This is an impersonation scam."
    }
  },
  {
    id: "beginner-2",
    topicId: "beginner",
    level: "Beginner",
    title: "Investing vs Gambling",
    concept: "Investing is putting money into assets (like stocks or mutual funds) based on research for long-term growth. Gambling is betting on outcomes with high risk and no underlying value.",
    example: "Buying a share in a profitable company is investing; putting all your money on a 'hidden crypto' is gambling.",
    tactics: ["Promising 100x returns in days", "Encouraging 'all-in' bets", "Focusing on luck rather than logic"],
    checkList: ["Is there a real underlying business?", "Does the risk match the return?", "Am I being told it's 'easy money'?"],
    whyPeopleFall: "The 'get rich quick' dream is a powerful psychological trigger.",
    card: {
      content: "Turn ₹1,000 into ₹1,00,000 in just 24 hours! It's 100% luck-based but our secret algorithm ensures you win. Try your luck now!",
      type: "scam",
      redFlags: ["Unrealistic growth (100x in 24h)", "'Secret algorithm' claim", "Luck-based profit promises"],
      explanation: "Legitimate investing takes time and research. Any platform promising 100x overnight is a gambling scam."
    }
  },
  {
    id: "beginner-3",
    topicId: "beginner",
    level: "Beginner",
    title: "Guaranteed Returns are Fake",
    concept: "All investments carry some level of risk. SEBI rules strictly prohibit anyone from 'guaranteeing' returns in the stock market.",
    example: "If someone says 'You will definitely get 15% monthly', they are breaking the law and likely trying to steal your money.",
    tactics: ["Fixed daily/monthly profit claims", "Safety 'guarantees'", "Hiding market risks"],
    checkList: ["Does it sound too good to be true?", "Is there a risk disclaimer?", "Is the return significantly higher than bank FD rates?"],
    whyPeopleFall: "People fear losing money, so the word 'Guaranteed' feels like a safe haven.",
    card: {
      content: "Join our Diamond Plan: Invest ₹50,000 and get a GUARANTEED return of ₹10,000 every month. No risk, only profit. SEBI approved platform.",
      type: "scam",
      redFlags: ["'GUARANTEED return' promise", "'No risk' claim (impossible)", "Monthly returns far exceeding logic (20% monthly)"],
      explanation: "No legitimate investment can guarantee profits. Fixed monthly returns in equity are a hallmark of a Ponzi scheme."
    }
  },
  {
    id: "beginner-4",
    topicId: "beginner",
    level: "Beginner",
    title: "The Danger of 'Tips'",
    concept: "Unregistered 'tipsters' often provide stock recommendations without proper analysis or legal authority. They might use you to pump up a stock they own.",
    example: "A Telegram group promising 'sure-shot' multi-bagger stocks for a fee.",
    tactics: ["Creating FOMO (Fear Of Missing Out)", "Fake screenshots of massive profits", "Claiming insider information"],
    checkList: ["Is the tipster a SEBI Registered Investment Advisor (RIA)?", "Are they guaranteeing a specific stock's movement?", "Are they asking for a percentage of profits?"],
    whyPeopleFall: "The desire for easy, effort-free profits and trust in 'experts'.",
    card: {
      content: "INSIDER INFO! Buy 'XYZ Infra' immediately before 2 PM. Guaranteed upper circuit tomorrow. Pay ₹2000 to join VIP channel for more tips.",
      type: "scam",
      redFlags: ["Claiming 'insider info' (which is illegal)", "Guaranteed stock movement", "Asking for money for tips"],
      explanation: "Trading on unregistered tips is risky. SEBI rules mandate that only registered advisors can provide paid stock recommendations."
    }
  },
  {
    id: "beginner-5",
    topicId: "beginner",
    level: "Beginner",
    title: "Fake Trading Apps",
    concept: "Scammers create convincing clones of popular trading apps or entirely new fake apps to steal your deposits.",
    example: "An app that shows your money multiplying rapidly but never allows you to withdraw it.",
    tactics: ["High 'virtual' profits shown in-app", "Tax or fee demands before withdrawal", "Apps not available on official stores"],
    checkList: ["Is the app on the Google Play Store or Apple App Store?", "Is the broker SEBI registered?", "Do they ask for a 'withdrawal tax'?"],
    whyPeopleFall: "The apps look professional and show fake, inflating balances that make the victim feel rich.",
    card: {
      content: "Download our new 'ProTradeX' app via this APK link to get 500% leverage and zero brokerage. Exclusive for first 100 users!",
      type: "scam",
      redFlags: ["APK link instead of official app store", "Unrealistic 500% leverage", "Urgency ('first 100 users')"],
      explanation: "Always download trading apps from official stores and ensure the broker is SEBI registered. Sideloaded APKs can steal data and money."
    }
  },
  {
    id: "beginner-6",
    topicId: "beginner",
    level: "Beginner",
    title: "Pump and Dump Schemes",
    concept: "Fraudsters buy cheap, low-volume stocks (penny stocks) and then spread fake positive news to 'pump' the price. Once everyday investors buy in, the fraudsters 'dump' their shares, crashing the price.",
    example: "Getting an SMS saying a ₹2 stock is about to win a ₹1000 crore government contract.",
    tactics: ["Mass SMS/WhatsApp blasts about a specific unknown stock", "Claims of huge upcoming contracts", "Artificial urgency"],
    checkList: ["Is it a 'penny stock' (very low price, low market cap)?", "Can you verify the 'news' from reliable sources?", "Why is a stranger sharing this 'secret'?"],
    whyPeopleFall: "The stock price actually rises initially due to the manipulation, making the tip look genuine.",
    card: {
      content: "STRONG BUY RECOMMENDATION: 'ABC Global Tech' is about to get acquired by a tech giant. Current price ₹3. Target ₹50 in 1 week. Buy NOW!",
      type: "scam",
      redFlags: ["Target price is >15x in a week", "Pushing an unknown low-priced stock", "Unverified acquisition claims"],
      explanation: "This is a classic 'Pump and Dump'. The sender likely owns the stock at ₹1 and wants you to buy so they can sell at a profit, leaving you with worthless shares."
    }
  },
  {
    id: "beginner-7",
    topicId: "beginner",
    level: "Beginner",
    title: "Phishing for Credentials",
    concept: "Scammers send fake links disguised as your bank or broker to steal your login credentials or OTPs.",
    example: "An email claiming your Demat account will be blocked unless you verify your details immediately.",
    tactics: ["Creating panic (account block threats)", "Links that look *almost* real (e.g., zeredha.com)", "Asking for OTPs"],
    checkList: ["Check the sender's email address or SMS ID carefully.", "Never click links in unexpected messages.", "Never share your OTP with anyone."],
    whyPeopleFall: "Fear of losing access to investments causes panic, overriding critical thinking.",
    card: {
      content: "Dear Customer, your Demat KYC is pending. Your account will be frozen in 2 hours. Update KYC here: http://kyc-update-portal.info/login",
      type: "scam",
      redFlags: ["Urgent threat (frozen in 2 hours)", "Suspicious URL (.info instead of official domain)", "Unsecured HTTP link"],
      explanation: "Brokers and banks don't threaten immediate account freezing via SMS links. Always log in directly through the official app or website."
    }
  },
  {
    id: "beginner-8",
    topicId: "beginner",
    level: "Beginner",
    title: "The 'Recovery' Scam",
    concept: "After you've been scammed once, fraudsters will contact you pretending to be hackers, police, or SEBI, offering to recover your lost money—for an upfront fee.",
    example: "Someone messages you saying 'I know you lost money in XYZ scam. Pay me ₹10,000 and I will hack them to get it back.'",
    tactics: ["Targeting existing victims", "Claiming specialized skills or insider access", "Demanding upfront 'processing fees'"],
    checkList: ["Are they asking for money to recover money?", "Are they an official law enforcement agency?", "Are they claiming to use illegal methods (hacking)?"],
    whyPeopleFall: "Victims are desperate to get their money back and are vulnerable to false hope.",
    card: {
      content: "Did you lose money in the recent crypto scam? I am a certified ethical hacker. Pay me a small fee of ₹2000 for server costs, and I will retrieve your funds.",
      type: "scam",
      redFlags: ["Asking for an upfront fee", "Claiming to be a hacker recovering funds", "Unverifiable 'certified' claims"],
      explanation: "This is a secondary scam. Legitimate authorities like the police or cyber cell do not charge fees to investigate or recover stolen funds."
    }
  },
  {
    id: "beginner-9",
    topicId: "beginner",
    level: "Beginner",
    title: "Unrealistic Returns in Crypto",
    concept: "While legitimate cryptocurrencies exist, scammers often create fake tokens or platforms promising astronomical returns with 'zero risk'.",
    example: "A new 'MoonCoin' that promises a 50% daily return on staking.",
    tactics: ["Complex jargon to confuse victims", "Fake celebrity endorsements", "Promises of fixed daily returns in a highly volatile market"],
    checkList: ["Do they promise fixed returns on crypto?", "Is the platform known and regulated?", "Is the founder team anonymous?"],
    whyPeopleFall: "The complexity of crypto makes it hard to distinguish between real innovation and a scam.",
    card: {
      content: "Invest in 'SafeYield Token'. We use AI trading bots to guarantee a 5% daily return on your investment. Zero risk. Deposit USDT now.",
      type: "scam",
      redFlags: ["'Guarantee' in a volatile market", "5% daily return is mathematically impossible to sustain", "Using buzzwords ('AI trading bots') to hide the lack of a real product"],
      explanation: "Crypto is highly volatile. Any platform guaranteeing fixed, high daily returns is running a Ponzi scheme and will eventually steal deposits."
    }
  },
  {
    id: "beginner-10",
    topicId: "beginner",
    level: "Beginner",
    title: "Social Media Impersonation",
    concept: "Scammers create fake social media profiles of famous investors or influencers and message their followers offering 'exclusive' investment opportunities.",
    example: "A WhatsApp message from someone pretending to be a famous mutual fund manager offering to manage your portfolio.",
    tactics: ["Copying profile pictures and bios", "Reaching out via direct message (DM)", "Asking to move the conversation to Telegram or WhatsApp"],
    checkList: ["Is the account verified (blue tick)?", "Check the exact username (e.g., @real_investor vs @real_investor_)", "Would a billionaire really DM you for ₹5000?"],
    whyPeopleFall: "The excitement of being contacted by a celebrity or expert clouds judgment.",
    card: {
      content: "Hi, this is Warren. I'm selecting 5 lucky followers to join my private crypto wealth building program. Send ₹10,000 to my assistant's UPI to secure your spot.",
      type: "scam",
      redFlags: ["Famous investor asking for small amounts", "Reaching out via random DM", "Using personal UPI IDs for 'wealth programs'"],
      explanation: "Famous investors and real financial influencers do not DM followers asking for money. This is a cloned profile scam."
    }
  },

  // --- TOPIC: phishing (Phishing & KYC Fraud) ---
  {
    id: "phishing-1",
    topicId: "phishing",
    level: "Intermediate",
    title: "The KYC Trap",
    concept: "Phishing is when scammers send fake messages to trick you into giving your passwords, OTPs, or bank details.",
    example: "An SMS saying 'Your bank account is blocked, click here to update KYC' is almost always a trap.",
    tactics: ["Urgency ('Block in 24h')", "Fake links (hdfc-kyc.net vs hdfcbank.com)", "Fear-based messaging"],
    checkList: ["Check the sender's ID", "Look for spelling mistakes in the URL", "Never click links in SMS for banking"],
    whyPeopleFall: "Fear of losing access to their money makes people act without thinking.",
    card: {
      content: "URGENT: Your bank account will be suspended in 3 hours. Complete your KYC update now at: bit.ly/bank-verify-2024. Failure will lead to permanent block.",
      type: "scam",
      redFlags: ["3-hour urgency threat", "Shortened URL (bit.ly)", "Vague 'bank' name (not naming a specific bank)"],
      explanation: "Banks never use bit.ly links or threaten immediate suspension via SMS. Always use the official bank app."
    }
  },

  // --- TOPIC: scams (Investment Scams) ---
  {
    id: "scams-1",
    topicId: "scams",
    level: "Intermediate",
    title: "Ponzi Schemes",
    concept: "In a Ponzi scheme, the scammer pays 'returns' to early investors using the money from new investors. It eventually collapses when new people stop joining.",
    example: "A company that pays you money just for referring more friends to invest is likely a Ponzi scheme.",
    tactics: ["Referral bonuses", "No clear product or business", "Focus on 'recruiting' rather than 'investing'"],
    checkList: ["How does the company make money?", "Are returns tied to new members?", "Is the business model transparent?"],
    whyPeopleFall: "Early investors actually get paid, which builds fake credibility for the scam.",
    card: {
      content: "Double your money in 6 months! Plus, get a 10% bonus for every person you bring into the network. Thousands are already earning daily!",
      type: "scam",
      redFlags: ["Referral-based bonuses", "Unrealistic doubling of money", "Focus on 'network' rather than assets"],
      explanation: "Returns based on recruiting new members are the definition of a Ponzi/Pyramid scheme. Legitimate businesses profit from services/goods."
    }
  },

  // --- TOPIC: deepfakes (Deepfakes & AI Fraud) ---
  {
    id: "deepfakes-1",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfake Celebrity Scams",
    concept: "Deepfakes use AI to create realistic videos of celebrities or leaders saying things they never did. Scammers use these to 'endorse' fake apps.",
    example: "A video of Ratan Tata or Mukesh Ambani telling people to invest in a 'new crypto' is almost certainly a deepfake.",
    tactics: ["Unnatural lip movements", "Grainy background", "Celebrity recommending something 'secret'"],
    checkList: ["Is this on the celebrity's official handle?", "Is the audio-video perfectly synced?", "Is the news reported by major media?"],
    whyPeopleFall: "We trust the faces we know and respect from TV and news.",
    card: {
      content: "Video: An AI-generated Mukesh Ambani says 'I am launching JioCoin today to help every Indian earn ₹1 Lakh daily. Click the link to join my private wealth group.'",
      type: "scam",
      redFlags: ["Unrealistic income (₹1 Lakh daily)", "No official Reliance announcement", "Deepfake audio/visual artifacts"],
      explanation: "Always verify celebrity endorsements through official company websites. High-profile leaders do not promote 'private wealth groups' via random videos."
    }
  }
,
  {
    id: "phishing-2",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 2",
    concept: "Advanced concept 2 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 2). Click here to secure your account: http://fake-link-2.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-3",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 3",
    concept: "Advanced concept 3 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 3). Click here to secure your account: http://fake-link-3.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-4",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 4",
    concept: "Advanced concept 4 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 4). Click here to secure your account: http://fake-link-4.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-5",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 5",
    concept: "Advanced concept 5 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 5). Click here to secure your account: http://fake-link-5.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-6",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 6",
    concept: "Advanced concept 6 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 6). Click here to secure your account: http://fake-link-6.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-7",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 7",
    concept: "Advanced concept 7 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 7). Click here to secure your account: http://fake-link-7.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-8",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 8",
    concept: "Advanced concept 8 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 8). Click here to secure your account: http://fake-link-8.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-9",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 9",
    concept: "Advanced concept 9 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 9). Click here to secure your account: http://fake-link-9.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "phishing-10",
    topicId: "phishing",
    level: "Intermediate",
    title: "Phishing Concept 10",
    concept: "Advanced concept 10 regarding phishing scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated phishing attack message (Variant 10). Click here to secure your account: http://fake-link-10.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic phishing attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-2",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 2",
    concept: "Advanced concept 2 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 2). Click here to secure your account: http://fake-link-2.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-3",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 3",
    concept: "Advanced concept 3 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 3). Click here to secure your account: http://fake-link-3.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-4",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 4",
    concept: "Advanced concept 4 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 4). Click here to secure your account: http://fake-link-4.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-5",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 5",
    concept: "Advanced concept 5 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 5). Click here to secure your account: http://fake-link-5.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-6",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 6",
    concept: "Advanced concept 6 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 6). Click here to secure your account: http://fake-link-6.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-7",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 7",
    concept: "Advanced concept 7 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 7). Click here to secure your account: http://fake-link-7.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-8",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 8",
    concept: "Advanced concept 8 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 8). Click here to secure your account: http://fake-link-8.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-9",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 9",
    concept: "Advanced concept 9 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 9). Click here to secure your account: http://fake-link-9.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "scams-10",
    topicId: "scams",
    level: "Intermediate",
    title: "Scams Concept 10",
    concept: "Advanced concept 10 regarding scams scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated scams attack message (Variant 10). Click here to secure your account: http://fake-link-10.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic scams attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-2",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 2",
    concept: "Advanced concept 2 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 2). Click here to secure your account: http://fake-link-2.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-3",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 3",
    concept: "Advanced concept 3 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 3). Click here to secure your account: http://fake-link-3.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-4",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 4",
    concept: "Advanced concept 4 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 4). Click here to secure your account: http://fake-link-4.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-5",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 5",
    concept: "Advanced concept 5 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 5). Click here to secure your account: http://fake-link-5.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-6",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 6",
    concept: "Advanced concept 6 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 6). Click here to secure your account: http://fake-link-6.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-7",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 7",
    concept: "Advanced concept 7 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 7). Click here to secure your account: http://fake-link-7.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-8",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 8",
    concept: "Advanced concept 8 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 8). Click here to secure your account: http://fake-link-8.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-9",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 9",
    concept: "Advanced concept 9 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 9). Click here to secure your account: http://fake-link-9.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  },
  {
    id: "deepfakes-10",
    topicId: "deepfakes",
    level: "Advanced",
    title: "Deepfakes Concept 10",
    concept: "Advanced concept 10 regarding deepfakes scams. Scammers use sophisticated techniques to bypass your logical defenses.",
    example: "For example, they might use a multi-stage attack where the first contact seems completely benign.",
    tactics: ["Tactic A", "Tactic B", "Tactic C"],
    checkList: ["Verify source", "Check official channels", "Do not rush"],
    whyPeopleFall: "The scam is designed to look like a standard operating procedure.",
    card: {
      content: "This is a simulated deepfakes attack message (Variant 10). Click here to secure your account: http://fake-link-10.com",
      type: "scam",
      redFlags: ["Suspicious URL", "Unsolicited contact", "Urgency"],
      explanation: "This is a classic deepfakes attempt. Always verify through official channels."
    }
  }
,

  // --- TOPIC: basics (Investing Basics) ---
  {
    id: "basics-1",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 1",
    concept: "Markets & Risk Concept 1: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-2",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 2",
    concept: "Markets & Risk Concept 2: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-3",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 3",
    concept: "Markets & Risk Concept 3: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-4",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 4",
    concept: "Markets & Risk Concept 4: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-5",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 5",
    concept: "Markets & Risk Concept 5: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-6",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 6",
    concept: "Markets & Risk Concept 6: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-7",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 7",
    concept: "Markets & Risk Concept 7: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-8",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 8",
    concept: "Markets & Risk Concept 8: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-9",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 9",
    concept: "Markets & Risk Concept 9: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "basics-10",
    topicId: "basics",
    level: "Beginner",
    title: "Investing Basics Lesson 10",
    concept: "Markets & Risk Concept 10: Understanding the nuances of investing basics is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Investing Basics' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Investing Basics: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },

  // --- TOPIC: fno (F&O / Trading Traps) ---
  {
    id: "fno-1",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 1",
    concept: "Leverage & Options Concept 1: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-2",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 2",
    concept: "Leverage & Options Concept 2: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-3",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 3",
    concept: "Leverage & Options Concept 3: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-4",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 4",
    concept: "Leverage & Options Concept 4: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-5",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 5",
    concept: "Leverage & Options Concept 5: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-6",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 6",
    concept: "Leverage & Options Concept 6: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-7",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 7",
    concept: "Leverage & Options Concept 7: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-8",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 8",
    concept: "Leverage & Options Concept 8: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-9",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 9",
    concept: "Leverage & Options Concept 9: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "fno-10",
    topicId: "fno",
    level: "Advanced",
    title: "F&O / Trading Traps Lesson 10",
    concept: "Leverage & Options Concept 10: Understanding the nuances of f&o / trading traps is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'F&O / Trading Traps' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic F&O / Trading Traps: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },

  // --- TOPIC: social (Social Media Fraud) ---
  {
    id: "social-1",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 1",
    concept: "Influencer Scams Concept 1: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-2",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 2",
    concept: "Influencer Scams Concept 2: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-3",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 3",
    concept: "Influencer Scams Concept 3: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-4",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 4",
    concept: "Influencer Scams Concept 4: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-5",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 5",
    concept: "Influencer Scams Concept 5: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-6",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 6",
    concept: "Influencer Scams Concept 6: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-7",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 7",
    concept: "Influencer Scams Concept 7: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-8",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 8",
    concept: "Influencer Scams Concept 8: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-9",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 9",
    concept: "Influencer Scams Concept 9: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "social-10",
    topicId: "social",
    level: "Beginner",
    title: "Social Media Fraud Lesson 10",
    concept: "Influencer Scams Concept 10: Understanding the nuances of social media fraud is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Social Media Fraud' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Social Media Fraud: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },

  // --- TOPIC: banking (Banking & Payments) ---
  {
    id: "banking-1",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 1",
    concept: "UPI & QR Scams Concept 1: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-2",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 2",
    concept: "UPI & QR Scams Concept 2: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-3",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 3",
    concept: "UPI & QR Scams Concept 3: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-4",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 4",
    concept: "UPI & QR Scams Concept 4: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-5",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 5",
    concept: "UPI & QR Scams Concept 5: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-6",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 6",
    concept: "UPI & QR Scams Concept 6: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-7",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 7",
    concept: "UPI & QR Scams Concept 7: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-8",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 8",
    concept: "UPI & QR Scams Concept 8: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-9",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 9",
    concept: "UPI & QR Scams Concept 9: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "banking-10",
    topicId: "banking",
    level: "Intermediate",
    title: "Banking & Payments Lesson 10",
    concept: "UPI & QR Scams Concept 10: Understanding the nuances of banking & payments is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Banking & Payments' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Banking & Payments: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },

  // --- TOPIC: identity (Identity Impersonation) ---
  {
    id: "identity-1",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 1",
    concept: "Support Clones Concept 1: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-2",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 2",
    concept: "Support Clones Concept 2: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-3",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 3",
    concept: "Support Clones Concept 3: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-4",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 4",
    concept: "Support Clones Concept 4: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-5",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 5",
    concept: "Support Clones Concept 5: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-6",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 6",
    concept: "Support Clones Concept 6: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-7",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 7",
    concept: "Support Clones Concept 7: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-8",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 8",
    concept: "Support Clones Concept 8: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-9",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 9",
    concept: "Support Clones Concept 9: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "identity-10",
    topicId: "identity",
    level: "Advanced",
    title: "Identity Impersonation Lesson 10",
    concept: "Support Clones Concept 10: Understanding the nuances of identity impersonation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Identity Impersonation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Identity Impersonation: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },

  // --- TOPIC: psych (Psychological Manipulation) ---
  {
    id: "psych-1",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 1",
    concept: "FOMO & Fear Concept 1: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-2",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 2",
    concept: "FOMO & Fear Concept 2: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-3",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 3",
    concept: "FOMO & Fear Concept 3: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-4",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 4",
    concept: "FOMO & Fear Concept 4: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-5",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 5",
    concept: "FOMO & Fear Concept 5: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-6",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 6",
    concept: "FOMO & Fear Concept 6: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-7",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 7",
    concept: "FOMO & Fear Concept 7: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-8",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 8",
    concept: "FOMO & Fear Concept 8: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-9",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 9",
    concept: "FOMO & Fear Concept 9: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "psych-10",
    topicId: "psych",
    level: "Advanced",
    title: "Psychological Manipulation Lesson 10",
    concept: "FOMO & Fear Concept 10: Understanding the nuances of psychological manipulation is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Psychological Manipulation' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Psychological Manipulation: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },

  // --- TOPIC: safe (Safe Investing Practices) ---
  {
    id: "safe-1",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 1",
    concept: "Registration & 2FA Concept 1: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 1. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 1]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-2",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 2",
    concept: "Registration & 2FA Concept 2: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 2. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 2]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-3",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 3",
    concept: "Registration & 2FA Concept 3: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 3. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 3]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-4",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 4",
    concept: "Registration & 2FA Concept 4: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 4. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 4]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-5",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 5",
    concept: "Registration & 2FA Concept 5: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 5. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 5]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-6",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 6",
    concept: "Registration & 2FA Concept 6: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 6. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 6]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-7",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 7",
    concept: "Registration & 2FA Concept 7: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 7. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 7]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-8",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 8",
    concept: "Registration & 2FA Concept 8: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 8. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 8]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-9",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 9",
    concept: "Registration & 2FA Concept 9: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 9. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 9]",
      type: "scam",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a scam. Always remember to verify before you trust any financial information."
    }
  },
  {
    id: "safe-10",
    topicId: "safe",
    level: "Beginner",
    title: "Safe Investing Practices Lesson 10",
    concept: "Registration & 2FA Concept 10: Understanding the nuances of safe investing practices is crucial for financial safety.",
    example: "Imagine a scenario where someone approachs you with a 'Safe Investing Practices' opportunity that seems too good to be true.",
    tactics: ["Tactical psychological pressure", "Creating artificial urgency", "Using technical jargon to confuse"],
    checkList: ["Check SEBI Registration", "Verify official domain", "Never share OTPs"],
    whyPeopleFall: "The sophisticated nature of these attacks exploits common human biases like trust and greed.",
    card: {
      content: "Topic Safe Investing Practices: Scenario 10. Do you think this message is a scam or a legitimate financial advice? [Scenario Detail 10]",
      type: "legit",
      redFlags: ["Unsolicited contact", "Suspicious link", "Pressure to act fast"],
      explanation: "This is a legit message. Always remember to verify before you trust any financial information."
    }
  }
];
