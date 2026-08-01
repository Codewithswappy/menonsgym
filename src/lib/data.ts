// Verified details for MENON'S GYM Greater Khanda Panvel
export const GYM_DETAILS = {
  name: "MENON'S GYM",
  tagline: 'Build your strongest self.',
  subheading: 'A premier local fitness center in Greater Khanda, Panvel engineered for real strength, body recomposition, and personal coaching.',
  address: '1st Floor, Tulsi Prerna, Khanda Colony, Plot 9, Sector - 1, Greater Khanda, Maharashtra 410206',
  phone: '099874 56736',
  whatsapp: '+919987456736',
  whatsappMessage: "Hi MENON'S GYM! I would like to book my free trial session.",
  email: 'contact@menonsgym.com',
  hours: {
    weekdays: '5:30 AM – 10:30 PM',
    saturday: '5:30 AM – 10:30 PM',
    sunday: '9:00 AM – 2:00 PM',
  },
  // Google Business metrics
  googleRating: 4.9,
  googleReviewsCount: 111,

  estimatedMembers: '1,000+',
  yearsInBusiness: '5+ years',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#programs' },
  { label: 'Coaches', href: '#trainers' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'strength-hypertrophy',
    title: 'Strength & hypertrophy',
    category: 'Resistance Training',
    description: 'Progressive overload protocols focused on barbell compounds, machine isolation, and targeted muscle development.',
    highlights: ['Olympic barbells & racks', 'Progressive overload', 'Form evaluation'],
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'crossfit-functional',
    title: 'CrossFit & functional WODs',
    category: 'CrossFit',
    description: 'High-energy metabolic conditioning circuits designed to build endurance, agility, and full-body athletic power.',
    highlights: ['Group WOD atmosphere', 'Agility & sled drills', 'Kettlebell conditioning'],
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'fat-loss-conditioning',
    title: 'Fat loss & cardio deck',
    category: 'Conditioning',
    description: 'Calorie-burning interval workouts combining cardio machines and resistance circuits for body recomposition.',
    highlights: ['Calorie burn tracking', 'Commercial treadmills', 'Fat loss guidance'],
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'personal-coaching',
    title: '1-on-1 personal coaching',
    category: 'Personal Training',
    description: 'Dedicated 1-on-1 training tailored to your specific schedule, physical baseline, and personal transformation targets.',
    highlights: ['Custom workout plan', '1-on-1 guidance', 'Nutrition coaching'],
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
];

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  bio: string;
  image: string;
}

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Head Coach Alex',
    role: 'Head strength & fitness coach',
    experience: '7+ yrs exp',
    specialization: ['Hypertrophy', 'Strength', 'Biomechanics'],
    bio: 'Specializes in progressive overload and posture correction for safe, sustainable strength gains.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-2',
    name: 'Coach Sarah',
    role: 'Fat loss & HIIT coach',
    experience: '5+ yrs exp',
    specialization: ['Weight loss', 'Body shaping', 'Conditioning'],
    bio: 'Focuses on sustainable habit creation, high-energy HIIT workouts, and supportive motivation.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-3',
    name: 'Coach Marcus',
    role: 'CrossFit & functional coach',
    experience: '6+ yrs exp',
    specialization: ['CrossFit', 'Functional WODs', 'Agility'],
    bio: 'Leads metabolic group WODs and mobility training to build joint health and athletic power.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-4',
    name: 'Coach Elena',
    role: 'Mobility & recovery coach',
    experience: '4+ yrs exp',
    specialization: ['Core stability', 'Flexibility', 'Posture'],
    bio: 'Guides structural body balance, joint mobility, and active recovery routines for everyday health.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-5',
    name: 'Coach Vikram',
    role: 'Powerlifting specialist',
    experience: '8+ yrs exp',
    specialization: ['Squat & Bench', 'Deadlift mechanics', 'Power'],
    bio: 'Specializes in competition barbell mechanics, CNS priming, and heavy compound progression.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-6',
    name: 'Coach Ananya',
    role: 'Nutrition & body recomposition',
    experience: '5+ yrs exp',
    specialization: ['Calorie planning', 'Macro guidance', 'Habit coaching'],
    bio: 'Combines strength training routines with practical macronutrient planning for effective body recomposition.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
];

export interface Transformation {
  id: number;
  name: string;
  goal: string;
  stats: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    name: 'David M.',
    goal: 'Fat loss & strength',
    stats: '-18kg fat loss | 16 weeks',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    quote: "The coaches at MENON'S GYM helped me correct my posture and stick to a consistent lifting routine.",
  },
  {
    id: 2,
    name: 'Pooja R.',
    goal: 'Body recomposition',
    stats: '-12kg weight loss | 12 weeks',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    quote: 'I felt so welcomed as a beginner. Greater Khanda gym floor is clean, quiet, and encouraging.',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Khanda Colony resident',
    rating: 5,
    comment: "MENON'S GYM in Greater Khanda has excellent equipment and clean facilities. The coaches pay attention to posture and technique.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Member since 2023',
    rating: 5,
    comment: 'Very supportive environment for women. The trainers help you get over beginner hesitation and start lifting weights safely.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Amit Deshmukh',
    role: 'Regular member',
    rating: 5,
    comment: 'Clean environment, great air conditioning during workout hours, and good parking space in Khanda Colony.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Neha Kulkarni',
    role: 'Morning workout regular',
    rating: 5,
    comment: 'The barbell area and dumbbells are always well maintained and organized. Highly recommended in Panvel!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Vikram Shinde',
    role: 'Weight loss member',
    rating: 5,
    comment: 'Lost 14kg in 4 months thanks to head coach guidance. Consistent posture checks and diet macro tracking.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Sneha Verma',
    role: 'CrossFit enthusiast',
    rating: 5,
    comment: 'The evening WOD sessions are high energy! Best community spirit and certified trainers in Navi Mumbai.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'What are your operational hours?',
    answer: "We are open Monday through Saturday from 5:30 AM to 10:30 PM, and on Sundays from 9:00 AM to 2:00 PM at 1st Floor, Tulsi Prerna, Khanda Colony, Greater Khanda.",
  },
  {
    id: '2',
    question: 'Do you offer a free trial pass?',
    answer: 'Yes! We offer a free trial pass so you can test our equipment, floor environment, and meet our coaching team before deciding.',
  },
  {
    id: '3',
    question: 'Is the gym suitable for absolute beginners?',
    answer: 'Yes. Every new member receives a complimentary orientation session where a coach guides you through machine setups and basic exercise form.',
  },
  {
    id: '4',
    question: 'Are diet and nutrition guidelines provided?',
    answer: 'Yes, our coaches provide practical nutrition advice and calorie/macro targets based on your weight loss or muscle building goals.',
  },
];

