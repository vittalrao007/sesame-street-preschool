import { BusinessConfig } from '../types/business';

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  preschoolName: 'Sesame Street Preschool',
  tagline: 'Little Steps Today, Bright Futures Tomorrow!',
  logoPath: '/favicon.svg',
  aboutDescription:
    'At Sesame Street Preschool, we believe childhood should be a joyful adventure of discovery. Our child-centered curriculum combines Montessori principles and playful exploration in a safe, nurturing, and sanitized environment tailored for early childhood development.',
  establishedYear: '2018',

  generalPhone: '+91 73377 37717',
  principalPhone: '+91 73377 37717',
  whatsappNumber: '+91 73377 37717',
  businessEmail: 'admissions@sesamestreetpreschool.com',
  whatsappPrefillMessage: 'Hello Principal, I would like to enquire about preschool and daycare admissions for my child.',

  streetAddress: 'Plot 42, 4th Cross, 12th Main Road, HAL 2nd Stage',
  areaLocality: 'Indiranagar',
  city: 'Bengaluru',
  state: 'Karnataka',
  pinCode: '560038',
  googleMapsUrl: 'https://maps.google.com/?q=Indiranagar+Bengaluru',

  openingHours: '8:30 AM – 12:30 PM (Preschool) | 8:30 AM – 6:30 PM (Full Daycare)',
  workingDays: 'Monday to Saturday',
  daycareHours: 'Full Day: 8:30 AM – 6:30 PM | Half Day: 12:30 PM – 6:30 PM',
  preschoolAgeRange: '1.5 years to 6 years',
  admissionEnquiryText: 'Admissions are currently open for the academic year 2026–27. Contact the Principal or schedule a campus walkthrough today.',
  feeInformation: 'Transparent fee structure based on program and daycare slot selection. Contact us for complete brochure and fee breakdown.',

  websiteUrl: 'https://sesamestreetpreschool.com',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  youtubeUrl: '',

  programs: [
    {
      id: 'playgroup',
      name: 'Playgroup',
      ageRange: '1.5 – 2.5 Years',
      description: 'Sensory exploration, motor skill development, rhythmic singing, and first social peer interactions in a gentle setting.',
      timing: '9:00 AM – 11:30 AM',
      accentColor: 'mint',
      features: ['Sensory play stations', 'Social & emotional bonding', 'Music & movement', '1:5 teacher-child ratio']
    },
    {
      id: 'nursery',
      name: 'Nursery',
      ageRange: '2.5 – 3.5 Years',
      description: 'Language blossoming, phonics foundations, interactive storytelling, fine motor coordination, and curiosity-driven hands-on play.',
      timing: '9:00 AM – 12:00 PM',
      accentColor: 'yellow',
      features: ['Early phonics & literacy', 'Math readiness & counting', 'Creative arts & crafting', 'Confidence & speech']
    },
    {
      id: 'lkg',
      name: 'Lower Kindergarten (LKG)',
      ageRange: '3.5 – 4.5 Years',
      description: 'Pre-writing exercises, vocabulary expansion, STEM foundations, nature exploration, and collaborative problem-solving.',
      timing: '8:45 AM – 12:30 PM',
      accentColor: 'blue',
      features: ['Guided reading & writing', 'Science & nature curiosity', 'Logical sequencing', 'Group projects']
    },
    {
      id: 'ukg',
      name: 'Upper Kindergarten (UKG)',
      ageRange: '4.5 – 5.5 Years',
      description: 'Primary school readiness, sentence building, elementary arithmetic, self-reliance, and cognitive development.',
      timing: '8:45 AM – 12:45 PM',
      accentColor: 'pink',
      features: ['Primary school transition', 'Advanced phonics & math', 'Public speaking & show-tell', 'Critical thinking']
    },
    {
      id: 'daycare',
      name: 'Daycare & Extended Care',
      ageRange: '1.5 – 10 Years',
      description: 'Reliable, secure after-school care with restful sleep spaces, wholesome warm snack arrangements, homework support, and fun hobby time.',
      timing: '8:30 AM – 6:30 PM',
      accentColor: 'lavender',
      features: ['Hygienic nap rooms', 'Nutritious meal support', 'Supervised homework & play', 'Real-time parent updates']
    }
  ],

  facilities: [
    {
      id: 'activity-learning',
      title: 'Activity-Based Learning Spaces',
      description: 'Child-sized modular tables, natural light, child-safe rounded furniture, and thematic discovery corners.',
      accentColor: 'mint',
      icon: 'BookOpen'
    },
    {
      id: 'indoor-play',
      title: 'Indoor Soft Play Arena',
      description: 'Padded tumble mats, mini climbing structures, ball pit, and balance equipment ensuring active movement regardless of weather.',
      accentColor: 'yellow',
      icon: 'Smile'
    },
    {
      id: 'reading-nook',
      title: 'Cozy Story & Reading Corner',
      description: 'Low wooden bookshelves loaded with illustrated storybooks, plush floor cushions, and gentle ambient lighting for quiet time.',
      accentColor: 'blue',
      icon: 'Heart'
    },
    {
      id: 'creative-arts',
      title: 'Creative Arts & Sensory Studio',
      description: 'Non-toxic finger paints, pottery clay, kinetic sand, sensory bins, and building blocks to spark wild young imaginations.',
      accentColor: 'pink',
      icon: 'Palette'
    },
    {
      id: 'hygienic-rest',
      title: 'Clean & Sanitized Rest Area',
      description: 'Individual sterilized cots, fresh bed linen, air purifiers, and quiet climate control for peaceful afternoon naps.',
      accentColor: 'lavender',
      icon: 'Moon'
    },
    {
      id: 'secure-campus',
      title: 'Child-Safe & Monitored Campus',
      description: 'Single-entry access gate, background-verified staff, child-proof electrical fixtures, and continuous on-campus adult supervision.',
      accentColor: 'mint',
      icon: 'ShieldCheck'
    }
  ],

  dailyRoutine: [
    {
      id: '1',
      time: '8:30 AM – 9:00 AM',
      activity: 'Warm Arrival & Circle Time',
      details: 'Gentle greeting, morning songs, attendance fun, and setting positive intention for the day.',
      accent: 'mint'
    },
    {
      id: '2',
      time: '9:00 AM – 10:15 AM',
      activity: 'Montessori & Sensory Learning',
      details: 'Hands-on learning with guided activity trays, shapes, letters, and numbers.',
      accent: 'yellow'
    },
    {
      id: '3',
      time: '10:15 AM – 10:45 AM',
      activity: 'Wholesome Fruit & Snack Break',
      details: 'Cultivating good table manners, self-feeding, and hydration habits.',
      accent: 'pink'
    },
    {
      id: '4',
      time: '10:45 AM – 11:30 AM',
      activity: 'Outdoor & Gross Motor Movement',
      details: 'Free play, tricycle rides, coordination games, and fresh morning sunshine.',
      accent: 'blue'
    },
    {
      id: '5',
      time: '11:30 AM – 12:15 PM',
      activity: 'Storytelling & Expressive Arts',
      details: 'Puppet theatre, picture-book reading, nursery rhymes, and colorful art creation.',
      accent: 'lavender'
    },
    {
      id: '6',
      time: '12:30 PM – 2:30 PM',
      activity: 'Lunch & Relaxing Afternoon Nap',
      details: 'Supervised nutritious lunch followed by cozy story reading and peaceful restful sleep.',
      accent: 'mint'
    },
    {
      id: '7',
      time: '2:30 PM – 6:30 PM',
      activity: 'Daycare Activities & Creative Play',
      details: 'Evening snacks, puzzles, board games, hobby corners, and happy pick-up time.',
      accent: 'yellow'
    }
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What is the minimum age for Playgroup and Daycare admission?',
      answer: 'Children as young as 18 months (1.5 years) are eligible for our Playgroup and Daycare programs. We provide gentle settling-in periods to help your little one transition comfortably.',
      category: 'Admissions'
    },
    {
      id: 'faq-2',
      question: 'What is your teacher-to-child ratio in classrooms?',
      answer: 'We maintain an intimate ratio of 1:5 in Playgroup and 1:8 in Nursery to UKG. In our Daycare facility, dedicated caregivers ensure individualized attention, feeding support, and care at all times.',
      category: 'General'
    },
    {
      id: 'faq-3',
      question: 'How do you handle meals and snacks for daycare children?',
      answer: 'Parents can either send home-cooked meals in labeled lunchboxes or opt for our freshly prepared, warm, hygienic vegetarian meals and evening fruit snacks planned for growing toddlers.',
      category: 'Safety & Meals'
    },
    {
      id: 'faq-4',
      question: 'Can parents visit the preschool before applying?',
      answer: 'Yes! We warmly invite parents to schedule a guided school walkthrough between 9:30 AM and 12:30 PM on weekdays or on Saturday mornings. You can click "Call the Principal" or "WhatsApp Us" to arrange a suitable slot.',
      category: 'Admissions'
    },
    {
      id: 'faq-5',
      question: 'What safety measures and hygiene standards are followed?',
      answer: 'Our premises feature child-proofed electrical sockets, rounded furniture edges, daily sanitization of toys and play surfaces, background-verified caregivers, first-aid trained educators, and single-access gate monitoring.',
      category: 'Safety & Meals'
    },
    {
      id: 'faq-6',
      question: 'Are potty-training prerequisites required for admission?',
      answer: 'No, potty training is not mandatory for Playgroup or Nursery. Our caring support staff patiently assists with toilet training and maintains clean diaper-change hygiene.',
      category: 'Daycare'
    }
  ],

  testimonials: [
    {
      id: 'test-1',
      parentName: 'Priya & Rahul Sharma',
      childInfo: 'Parents of Ananya (Nursery)',
      quote: 'Sesame Street Preschool has been a second home for Ananya. Her vocabulary blossomed within three months, and she eagerly wakes up every morning excited to meet her teachers and friends.',
      rating: 5
    },
    {
      id: 'test-2',
      parentName: 'Deepak & Sneha Kulkarni',
      childInfo: 'Parents of Kabir (Daycare & LKG)',
      quote: 'As two working professionals, finding trustworthy daycare was our biggest worry. The caring staff, clean environment, and transparent communication give us complete peace of mind throughout our workday.',
      rating: 5
    },
    {
      id: 'test-3',
      parentName: 'Meera Nambiar',
      childInfo: 'Mother of Aarav (Playgroup)',
      quote: 'The teachers are exceptionally gentle and patient. Aarav transitioned from clinging at the door to happily waving goodbye within just one week. Highly recommended to local parents!',
      rating: 5
    }
  ],
  showTestimonials: true
};
