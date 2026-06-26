import React from "react";

export interface NewsItem {
  title: string;
  content: string;
  label: string;
  Icon: React.ComponentType<any>;
  iconColor: string;
  to?: string;
  mediaType?: "video" | "image";
  mediaSrc?: string;
  mediaAlt?: string;
}

export interface ProductCard {
  title: string;
  badge: string;
  image: string;
  description: string[];
  link: string;
  buttonText: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}