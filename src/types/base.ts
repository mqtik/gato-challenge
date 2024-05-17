export interface Document {
  // Oddly, id is a string
  id: string;
}
export interface Job extends Document {
  title: string;
  description: number;
  fulltime: boolean;
  logo: string;
  location: string;
  company: string;
  city: string;
  created: string;
  details: string;
}
