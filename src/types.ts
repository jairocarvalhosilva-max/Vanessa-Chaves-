export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  recommendation: string;
  iconName: string;
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface Step {
  stepNumber: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  procedure: string;
  comment: string;
  rating: number;
  isExample: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  procedure?: string;
  phase: string;
  preferredDate: string;
  preferredPeriod: string;
  city: string;
  notes: string;
}

