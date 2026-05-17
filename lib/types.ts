export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  slug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  coverImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  icon: string;
}
