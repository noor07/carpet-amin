export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Real client and designer testimonials go here as they come in.
// The section that renders these (components/Testimonials.tsx) shows nothing
// until there's at least one real entry — never fill this with placeholder
// quotes attributed to people who didn't say them.
export const testimonials: Testimonial[] = [];
