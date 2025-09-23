export interface Market {
  id: string;
  title: string;
  description?: string;
  icon: string;
  options: Array<{
    label: string;
    percentage: number;
    isYes: boolean;
  }>;
  volume: string;
  isLive?: boolean;
  chance?: number;
}

export const markets: Market[] = [
  {
    id: "nyc-mayor",
    title: "New York City Mayoral Election",
    icon: "🏛️",
    options: [
      { label: "Zohran Mamdani", percentage: 88, isYes: true },
      { label: "Andrew Cuomo", percentage: 11, isYes: false },
    ],
    volume: "$88m",
    isLive: false,
  },
  {
    id: "fed-decision",
    title: "Fed decision in October?",
    icon: "💰",
    options: [
      { label: "50+ bps decrease", percentage: 4, isYes: false },
      { label: "25 bps decrease", percentage: 83, isYes: true },
    ],
    volume: "$17m",
    isLive: false,
  },
  {
    id: "super-bowl",
    title: "Super Bowl Champion 2026",
    icon: "🏈",
    options: [
      { label: "Buffalo", percentage: 18, isYes: false },
      { label: "Baltimore", percentage: 13, isYes: false },
    ],
    volume: "$67m",
    isLive: false,
  },
  {
    id: "jimmy-kimmel",
    title: "What will Jimmy Kimmel say during return show on September 23?",
    icon: "📺",
    options: [
      { label: "Kirk", percentage: 73, isYes: true },
      { label: "ABC", percentage: 68, isYes: true },
    ],
    volume: "$62k",
    isLive: false,
  },
  {
    id: "pirates-game",
    title: "Pirates vs Reds Game Result",
    icon: "⚾",
    options: [
      { label: "Pirates", percentage: 69, isYes: true },
      { label: "Reds", percentage: 31, isYes: false },
    ],
    volume: "$3m",
    isLive: true,
  },
  {
    id: "white-sox-game",
    title: "White Sox vs Yankees Game",
    icon: "⚾",
    options: [
      { label: "White Sox", percentage: 15, isYes: false },
      { label: "Yankees", percentage: 85, isYes: true },
    ],
    volume: "$1m",
    isLive: true,
  },
  {
    id: "eric-adams",
    title: "Will Eric Adams drop out?",
    icon: "🏛️",
    options: [
      { label: "Yes", percentage: 62, isYes: true },
      { label: "No", percentage: 38, isYes: false },
    ],
    volume: "$2m",
    chance: 62,
  },
  {
    id: "costco-earnings",
    title: "Will Costco Wholesale (COST) beat its quarterly earnings estimate?",
    icon: "🏪",
    options: [
      { label: "Yes", percentage: 78, isYes: true },
      { label: "No", percentage: 22, isYes: false },
    ],
    volume: "$190k",
    chance: 78,
  },
  {
    id: "trump-h1b",
    title: "Trump pause or remove 100K H-1B policy by...",
    icon: "🇺🇸",
    options: [
      { label: "Yes", percentage: 41, isYes: true },
      { label: "No", percentage: 59, isYes: false },
    ],
    volume: "$96k",
    chance: 41,
  },
  {
    id: "tiktok-sale",
    title: "TikTok sale announced by...?",
    icon: "📱",
    options: [
      { label: "September 30", percentage: 27, isYes: false },
      { label: "October 31", percentage: 65, isYes: true },
    ],
    volume: "$1m",
  },
  {
    id: "us-venezuela",
    title: "US x Venezuela military engagement by...?",
    icon: "🌎",
    options: [
      { label: "September 30", percentage: 4, isYes: false },
      { label: "October 31", percentage: 20, isYes: false },
    ],
    volume: "$2m",
  },
  {
    id: "nato-russia",
    title: "NATO x Russia military clash in 2025?",
    icon: "🛡️",
    options: [
      { label: "Yes", percentage: 28, isYes: false },
      { label: "No", percentage: 72, isYes: true },
    ],
    volume: "$643k",
    chance: 28,
  },
  {
    id: "metamask-token",
    title: "Will MetaMask launch a token in 2025?",
    icon: "🦊",
    options: [
      { label: "Yes", percentage: 43, isYes: true },
      { label: "No", percentage: 57, isYes: false },
    ],
    volume: "$174k",
    chance: 43,
  },
  {
    id: "trump-gold",
    title: "How many Gold Cards will Trump sell in 2025?",
    icon: "🏆",
    options: [
      { label: "0", percentage: 52, isYes: true },
      { label: "1-100", percentage: 22, isYes: false },
    ],
    volume: "$3m",
  },
  {
    id: "trump-meeting",
    title: "Who will Trump meet with in 2025?",
    icon: "🤝",
    options: [
      { label: "Xi Jinping", percentage: 89, isYes: true },
      { label: "Abdel Fattah El-Sisi", percentage: 57, isYes: true },
    ],
    volume: "$3m",
  },
  {
    id: "russia-nato-invasion",
    title: "Will Russia invade a NATO country by...?",
    icon: "⚔️",
    options: [
      { label: "December 31, 2025", percentage: 5, isYes: false },
      { label: "June 30, 2026", percentage: 9, isYes: false },
    ],
    volume: "$643k",
  },
];