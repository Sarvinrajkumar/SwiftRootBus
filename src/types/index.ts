export interface Route {
  id: number;
  title: string;
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  perks: string[];
}

export interface CrewMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  route: string;
  content: string;
  rating: number;
  image: string;
}