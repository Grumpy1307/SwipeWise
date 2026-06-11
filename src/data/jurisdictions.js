// Jurisdictions metadata and customized localized scam/legitimate cards
export const JURISDICTIONS = {
  in: {
    name: "India",
    regulator: "SEBI (Securities and Exchange Board of India)",
    website: "https://sebi.gov.in",
    hotline: "1800-22-7575 / 1800-266-7575",
    logoEmoji: "🇮🇳",
    warningSignals: [
      "Unregistered Telegram channels offering 'sure-shot' stock tips",
      "Guaranteed monthly returns (strictly illegal under SEBI)",
      "High leverage and F&O tips from unregistered entities",
      "Demands to pay taxes or fees to a personal UPI ID before withdrawal"
    ],
    cards: [
      {
        id: 10001,
        category: "Investment Scams",
        type: "scam",
        profileName: "StockWealth SEBI Tips",
        avatar: "📈",
        tag: "Telegram",
        verified: false,
        stats: { likes: "8.2k", comments: "1.4k", shares: "921" },
        content: "🔥 SEBI REGISTERED WHATSAPP CLUB! Get daily stock tips with 99% accuracy. Earn ₹25,000 weekly using our options trading calls. Subscription: ₹2,000/month. Join now!",
        redFlags: ["'SEBI Registered Tips' - SEBI never registers tips, only advisors", "Guaranteed earnings (₹25k weekly)", "F&O tips via Telegram/WhatsApp without official disclosure"],
        explanation: "In India, providing stock advisory for a fee requires a SEBI Research Analyst (RA) or Investment Advisor (RIA) registration. Promising high returns is illegal."
      },
      {
        id: 10002,
        category: "Phishing",
        type: "scam",
        profileName: "Govt-PM-Kisan-Fund",
        avatar: "🌾",
        tag: "WhatsApp",
        verified: false,
        stats: { likes: "0", comments: "0", shares: "0" },
        content: "🚨 प्रधान मंत्री निवेश योजना 2026: Invest ₹5,000 today and get ₹10,000 monthly allowance from the government. Claim yours immediately: http://pm-kisan-yojana.online/claim",
        redFlags: ["Unrealistic returns (₹5,000 deposit for ₹10,000 monthly allowance)", "Suspicious non-government domain (.online instead of .gov.in)", "Unsolicited WhatsApp broadcast"],
        explanation: "Government programs use official domains (.gov.in or .nic.in). They never offer 200% monthly returns or send links via WhatsApp."
      },
      {
        id: 10003,
        category: "Impersonation",
        type: "scam",
        profileName: "SEBI Officer Rajan",
        avatar: "⚖️",
        tag: "WhatsApp",
        verified: false,
        stats: { likes: "0", comments: "0", shares: "0" },
        content: "This is a warning from SEBI Investigation Cell. Your demat account has suspicious short-selling history. To prevent immediate freeze and arrest, pay a security clearance fee of ₹15,000 to sebi-verify@upi.",
        redFlags: ["SEBI officers do not contact individuals via WhatsApp", "Threats of immediate arrest or account freeze", "UPI request for 'clearance fees'"],
        explanation: "SEBI never issues notices or demands payments via WhatsApp or UPI. This is a classic authorities impersonation scam."
      },
      {
        id: 10004,
        category: "Investment Scams",
        type: "legit",
        profileName: "SEBI Investor Education",
        avatar: "🏛️",
        tag: "Official",
        verified: true,
        stats: { likes: "12k", comments: "320", shares: "5k" },
        content: "Always check the SEBI registration status of an advisor before investing. Ask for their Registration Number and verify it at sebi.gov.in. Protect your savings! #SmarterInvestor",
        redFlags: [],
        explanation: "This is legitimate investor awareness material. It advises verification on the official regulatory portal and makes no return promises."
      }
    ]
  },
  us: {
    name: "United States",
    regulator: "SEC (U.S. Securities and Exchange Commission)",
    website: "https://sec.gov",
    hotline: "1-800-732-0330",
    logoEmoji: "🇺🇸",
    warningSignals: [
      "High-pressure sales tactics or pushy brokers (affinity fraud)",
      "Unregistered offerings claiming SEC exemptions",
      "Payment requests via crypto, gift cards, or wire transfers",
      "Guaranteed returns or double-your-money schemes"
    ],
    cards: [
      {
        id: 20001,
        category: "Investment Scams",
        type: "scam",
        profileName: "ChurchFellowship Wealth",
        avatar: "⛪",
        tag: "Ad",
        verified: false,
        stats: { likes: "325", comments: "44", shares: "12" },
        content: "Exclusive for our church community: Bro. Thomas is hosting a seminar on a faith-based crypto fund yielding 20% passive dividends monthly. Only for believers. Zero risk. Act fast!",
        redFlags: ["Affinity fraud - targeting a religious community to bypass skepticism", "Guaranteed 20% monthly returns", "Claims of 'zero risk' in cryptocurrency"],
        explanation: "This is 'Affinity Fraud' which targets members of identifiable groups. Scammers build trust within communities (churches, clubs) to promote fake programs."
      },
      {
        id: 20002,
        category: "Phishing",
        type: "scam",
        profileName: "SEC-HelpDesk-Alert",
        avatar: "⚖️",
        tag: "Email",
        verified: false,
        stats: { likes: "0", comments: "0", shares: "0" },
        content: "Dear Taxpayer, U.S. District Court has ordered the SEC to release your restitution funds from the XYZ Ponzi scheme case. Verify your SSN, banking info, and pay a $250 escrow fee at sec-restitution.net",
        redFlags: ["Asking for SSN and banking credentials via link", "Paying a fee ($250) to receive restitution money", "Fake domain sec-restitution.net (not sec.gov)"],
        explanation: "The SEC does not charge fees to return money to harmed investors, nor does it host restitution verification portals outside of the .gov domain."
      },
      {
        id: 20003,
        category: "Investment Scams",
        type: "legit",
        profileName: "SEC Investor.gov",
        avatar: "🦅",
        tag: "Official",
        verified: true,
        stats: { likes: "34k", comments: "1.2k", shares: "15k" },
        content: "Before you invest, research. Use the free search tool on Investor.gov to verify the background and registration of investment professionals. Avoid unregistered sellers.",
        redFlags: [],
        explanation: "This is a legitimate education post from the SEC. Asking users to verify professionals on Investor.gov is a trusted warning signal."
      }
    ]
  },
  uk: {
    name: "United Kingdom",
    regulator: "FCA (Financial Conduct Authority)",
    website: "https://fca.org.uk",
    hotline: "0800 111 6768",
    logoEmoji: "🇬🇧",
    warningSignals: [
      "Clone firms replicating details of legitimate FCA authorized businesses",
      "Pension liberation scams promising cash back before age 55",
      "Cold calls offering investments in overseas land, gold, or carbon credits",
      "No protection under the Financial Services Compensation Scheme (FSCS)"
    ],
    cards: [
      {
        id: 30001,
        category: "Investment Scams",
        type: "scam",
        profileName: "Barclays Private Equity Clone",
        avatar: "🦁",
        tag: "Sponsored",
        verified: false,
        stats: { likes: "1.2k", comments: "198", shares: "42" },
        content: "Barclays Private Yield Account: Earn 8.5% fixed annual return on high-grade bonds. Fully protected. FCA Reference Number: 135647. Click here to speak to an adviser: http://barclays-bond-yield.co.uk",
        redFlags: ["Suspicious domain barclays-bond-yield.co.uk (not barclays.co.uk)", "Using a real FCA firm's reference number on a fake site (clone firm)", "Promising high fixed bonds in a low-interest environment"],
        explanation: "This is a 'Clone Firm' scam. Scammers mimic authorized firms and list their genuine FCA Reference Numbers (FRNs) to trick users. Always contact firms through numbers listed on the FCA Register directly."
      },
      {
        id: 30002,
        category: "Investment Scams",
        type: "scam",
        profileName: "PensionCashbackUK",
        avatar: "💰",
        tag: "Ad",
        verified: false,
        stats: { likes: "84", comments: "21", shares: "9" },
        content: "Under 55? Unlock up to 25% of your pension cash tax-free now! Convert your slow pension into a high-performance alternative investment portfolio today. Limited time offer.",
        redFlags: ["Offering pension access before age 55 (illegal unless in severe ill health)", "High-performance claims", "Pushy sales tone"],
        explanation: "Pension liberation scams convince you to transfer your pension to access cash early, leading to massive tax penalties (up to 55%) and loss of the pension pot."
      },
      {
        id: 30003,
        category: "Investment Scams",
        type: "legit",
        profileName: "FCA ScamSmart",
        avatar: "🛡️",
        tag: "Official",
        verified: true,
        stats: { likes: "28k", comments: "440", shares: "9k" },
        content: "Be ScamSmart! Reject cold calls offering investment opportunities. Check the FCA Warning List before making any financial transfers: fca.org.uk/scamsmart #FCA",
        redFlags: [],
        explanation: "Legitimate safety warning from the FCA. Encourages using the official ScamSmart tool and warns against cold calls."
      }
    ]
  },
  es: {
    name: "Spain",
    regulator: "CNMV (Comisión Nacional del Mercado de Valores)",
    website: "https://cnmv.es",
    hotline: "+34 900 533 240",
    logoEmoji: "🇪🇸",
    warningSignals: [
      "Brokers operating as 'chiringuitos financieros' (boiler rooms) without authorization",
      "Cold-call pressures to invest in volatile currencies or options",
      "Offshore contact numbers or addresses (Cyprus, Bahamas, etc.)",
      "Spanish content containing translation errors or grammar mistakes"
    ],
    cards: [
      {
        id: 40001,
        category: "Investment Scams",
        type: "scam",
        profileName: "CryptoEuro Forex",
        avatar: "💶",
        tag: "Ad",
        verified: false,
        stats: { likes: "412", comments: "83", shares: "19" },
        content: "🇪🇸 ATENCIÓN INVERSORES: ¡Obtenga un 12% semanal operando en Forex y Opciones Binarias con nuestro asesor automático! Autorizado por reguladores internacionales. Regístrese ahora.",
        redFlags: ["12% weekly return claims", "Vague 'international regulators' authorization (not registered with CNMV)", "Promoting binary options which are highly restricted in Spain"],
        explanation: "Este es un 'chiringuito financiero'. La CNMV prohíbe la comercialización de opciones binarias a minoristas en España. Ninguna entidad autorizada garantiza 12% semanal."
      },
      {
        id: 40002,
        category: "Investment Scams",
        type: "scam",
        profileName: "CNMV Alerta Falsa",
        avatar: "⚖️",
        tag: "WhatsApp",
        verified: false,
        stats: { likes: "0", comments: "0", shares: "0" },
        content: "Notificación Urgente: La CNMV ha bloqueado sus fondos por sospecha de evasión de impuestos. Debe depositar 500 € a la cuenta ES91-XXXX-XXXX para liberar su saldo de inmediato.",
        redFlags: ["Demanding money to release 'blocked' funds", "CNMV contacting via WhatsApp", "Using personal bank accounts for tax settlement"],
        explanation: "La CNMV es un órgano supervisor y nunca cobra multas ni tasas de liberación de fondos a través de depósitos de WhatsApp. Esto es una estafa de suplantación."
      },
      {
        id: 40003,
        category: "Investment Scams",
        type: "legit",
        profileName: "CNMV Oficial",
        avatar: "🏛️",
        tag: "Official",
        verified: true,
        stats: { likes: "19k", comments: "210", shares: "4k" },
        content: "Evita los chiringuitos financieros. Antes de invertir dinero, consulta siempre el registro de entidades autorizadas en la web de la CNMV (cnmv.es) o llama al teléfono de atención al inversor.",
        redFlags: [],
        explanation: "Mensaje educativo legítimo de la CNMV para prevenir que los usuarios caigan en entidades financieras no registradas."
      }
    ]
  },
  ae: {
    name: "United Arab Emirates",
    regulator: "SCA (Securities and Commodities Authority)",
    website: "https://sca.gov.ae",
    hotline: "800-722-23",
    logoEmoji: "🇦🇪",
    warningSignals: [
      "Unlicensed crowdfunding for property investment promising rental gains",
      "Offshore trusts promising tax-free growth in gold or oil commodities",
      "WhatsApp VIP groups urging investors to buy high-risk crypto tokens",
      "Brokers lacking an official DED (Department of Economy and Tourism) license"
    ],
    cards: [
      {
        id: 50001,
        category: "Investment Scams",
        type: "scam",
        profileName: "Dubai Golden Trust",
        avatar: "👑",
        tag: "Sponsored",
        verified: false,
        stats: { likes: "2.1k", comments: "530", shares: "142" },
        content: "🇦🇪 Earn 15% guaranteed monthly passive income by investing in our Dubai Gold Trading Fund. Backed by physical gold reserves. Tax-free profits. License: SCA-exempt status.",
        redFlags: ["'Guaranteed monthly passive income' (15%)", "Claiming 'SCA-exempt' - SCA does not exempt retail gold funds from investor protection rules", "Tax-free urgency lure"],
        explanation: "All commodity and gold investment platforms operating in the UAE must have licensing from the SCA or appropriate freezone regulators (like DFSA or FSRA). Exemption claims are false."
      },
      {
        id: 50002,
        category: "Investment Scams",
        type: "scam",
        profileName: "PalmCrowd Properties",
        avatar: "🌴",
        tag: "Ad",
        verified: false,
        stats: { likes: "522", comments: "109", shares: "38" },
        content: "Invest in luxury hotel suites on the Palm Jumeirah with just AED 1,000! Earn 25% annual rental yields. Direct payout. Register via link and wire deposits to our offshore escrow account.",
        redFlags: ["25% annual rental yield (unrealistic - real yields are 6-9%)", "Escrow account located offshore (escaping UAE legal jurisdiction)", "Unlicensed fractional real estate offering"],
        explanation: "Fractional property crowdfunding is regulated in UAE. Legitimate portals are licensed by DFSA (DIFC) or FSRA (ADGM). Offshore wiring requests are high risk."
      },
      {
        id: 50003,
        category: "Investment Scams",
        type: "legit",
        profileName: "SCA UAE",
        avatar: "🛡️",
        tag: "Official",
        verified: true,
        stats: { likes: "15k", comments: "190", shares: "3.5k" },
        content: "Ensure your broker is licensed by the Securities and Commodities Authority (SCA) or local financial freezone authorities before making any investments. Verify licenses at sca.gov.ae.",
        redFlags: [],
        explanation: "Legitimate safety awareness advisory from the UAE Securities and Commodities Authority (SCA)."
      }
    ]
  }
};
