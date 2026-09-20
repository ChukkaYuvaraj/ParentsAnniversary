export interface Memory {
  id: string;
  year: number;
  title: string;
  titleTe: string;
  description: string;
  descriptionTe: string;
  image: string;
  category: 'timeline' | 'gallery' | 'family';
}

export const memories: Memory[] = [
  {
    id: "mem-2004",
    year: 2004,
    title: "The Beginning",
    titleTe: "ప్రారంభం",
    description: "The day our beautiful journey started together. A day filled with love, blessings, and the promise of a lifetime.",
    descriptionTe: "మా అందమైన ప్రయాణం ప్రారంభమైన రోజు. ప్రేమ, ఆశీర్వాదాలు మరియు జీవితకాల వాగ్దానంతో నిండిన రోజు.",
    image: "/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg",
    category: "timeline"
  },
  {
    id: "mem-2005",
    year: 2005,
    title: "A New Chapter",
    titleTe: "ఒక కొత్త అధ్యాయం",
    description: "In 2026, our love continues to grow, carrying every memory forward as we build each new day together.",
    descriptionTe: "2026లో కూడా మా ప్రేమ మరింతగా పెరుగుతూనే ఉంది. ప్రతి జ్ఞాపకాన్ని వెంట తీసుకుని, ప్రతి కొత్త రోజును కలిసి నిర్మించుకుంటున్నాము.",
    image: "/images/memories/20240512_184038.jpg",
    category: "timeline"
  },
  {
    id: "mem-2010",
    year: 2010,
    title: "Growing Together",
    titleTe: "కలిసి ఎదుగుతూ",
    description: "Through the years, our bond only grew stronger. Every challenge made us closer, every joy made us richer.",
    descriptionTe: "సంవత్సరాలు గడుస్తున్న కొద్దీ, మా బంధం మరింత బలపడింది. ప్రతి సవాలు మమ్మల్ని దగ్గర చేసింది, ప్రతి సంతోషం మమ్మల్ని గొప్పవారిని చేసింది.",
    image: "/images/memories/IMG-20230211-WA0017.jpg",
    category: "timeline"
  }
];
