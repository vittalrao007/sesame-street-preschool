export interface ProgramItem {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  timing: string;
  accentColor: 'mint' | 'yellow' | 'blue' | 'pink' | 'lavender';
  features: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  accentColor: 'mint' | 'yellow' | 'blue' | 'pink' | 'lavender';
  icon: string;
}

export interface RoutineItem {
  id: string;
  time: string;
  activity: string;
  details: string;
  accent: 'mint' | 'yellow' | 'blue' | 'pink' | 'lavender';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Daycare' | 'General' | 'Safety & Meals';
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childInfo: string;
  quote: string;
  rating: number;
}

export interface BusinessConfig {
  // Business Identity
  preschoolName: string;
  tagline: string;
  logoPath: string;
  aboutDescription: string;
  establishedYear: string;
  
  // Contact Information
  generalPhone: string;
  principalPhone: string;
  whatsappNumber: string;
  businessEmail: string;
  whatsappPrefillMessage: string;

  // Address
  streetAddress: string;
  areaLocality: string;
  city: string;
  state: string;
  pinCode: string;
  googleMapsUrl: string;

  // Business Information
  openingHours: string;
  workingDays: string;
  daycareHours: string;
  preschoolAgeRange: string;
  admissionEnquiryText: string;
  feeInformation: string;

  // Social & Optional
  websiteUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;

  // Dynamic Lists
  programs: ProgramItem[];
  facilities: FacilityItem[];
  dailyRoutine: RoutineItem[];
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  showTestimonials: boolean;
}
