
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

export const testimonials: Testimonial[] = [
  {
    id: "michelle-chivunga",
    quote:
      "Mercy's standout quality is her problem-solving ability. When she meets something she hasn't faced before, she researches, asks questions and puts in the extra effort to make it work. When our AI developer left with 72 hours to the Kingdom of Kush deadline, she found a replacement and kept the project moving. She has grown from a technical team member into someone who takes responsibility, leads others, and finds a way forward when there is a problem.",
    name: "Michelle Chivunga",
    role: "CEO",
    organization: "Global Policy House",
    relationship: "supervisor",
  },
  {
    id: "susan-kamau",
    quote:
      "Mercy is someone you can absolutely rely on. She shows up when she says she will and delivers when promised, and that reliability never comes at the expense of quality. She approaches challenging situations with calm focus, transforms vague objectives into crystal-clear work plans, and executes with precision. I recommend her without hesitation.",
    name: "Susan Kamau",
    role: "Strategic Project Manager",
    link: "https://www.linkedin.com/in/susan-kamau-ab9b7820b/",
    relationship: "supervisor",
  }
];

export function getPublishedTestimonials() {
  return testimonials.filter((t) => !t.placeholder);
}