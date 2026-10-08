export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization?: string;
  link?: string;
  relationship: "client" | "colleague" | "learner" | "supervisor";
  placeholder?: boolean;
};

// TODO: replace with real testimonials
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote: "Replace with a real testimonial.",
    name: "Name",
    role: "Learner, MERN Stack Course",
    organization: "Power Learn Project",
    relationship: "learner",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    quote: "Replace with a real testimonial.",
    name: "Name",
    role: "Colleague",
    organization: "Organization",
    relationship: "colleague",
    placeholder: true,
  },
  {
    id: "placeholder-3",
    quote: "Replace with a real testimonial.",
    name: "Name",
    role: "Supervisor",
    organization: "Organization",
    relationship: "supervisor",
    placeholder: true,
  },
];

export function getPublishedTestimonials() {
  if (process.env.NODE_ENV === "production") {
    return testimonials.filter((item) => !item.placeholder);
  }
  return testimonials;
}
