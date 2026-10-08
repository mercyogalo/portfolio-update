import { getPublishedTestimonials } from "@/data/testimonials";

export default function Testimonials() {
  const items = getPublishedTestimonials();
  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="testimonials-heading"
          className="text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          What people say
        </h2>
      </div>
    </section>
  );
}
