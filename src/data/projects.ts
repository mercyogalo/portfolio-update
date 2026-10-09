export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string;
  image: string;
  frame: "browser" | "phone";
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Global Policy House Official Website",
    category: "Organization Website / Events Platform",
    description:
      "Official website for Global Policy House. I built and maintain the Django backend on PostgreSQL, including event registration and booking with Stripe, PayPal and Flutterwave payments, and backend functionality powering an admin dashboard for managing registrations and website data. Automated email notifications are sent via Resend, with background task processing handled by Celery.",
    tech: "Django | PostgreSQL | Celery | Resend | Stripe | PayPal | Flutterwave",
    image: "/images/projects/gph-website.jpg",
    frame: "browser",
  },
  {
    title: "Kingdom of Kush Website",
    category: "Citizenship & Passport Application Platform",
    description:
      "Platform for passport and citizenship applications. I developed the Django and PostgreSQL backend covering application submission, data processing and administrative management, plus the backend behind an admin dashboard for managing application data and records. Also includes an event booking system with Stripe, PayPal and Flutterwave, with Celery handling asynchronous processes and Resend sending automated emails.",
    tech: "Django | PostgreSQL | Celery | Resend | Stripe | PayPal | Flutterwave",
    image: "/images/projects/kush-website.jpg",
    frame: "browser",
  },
  {
    title: "StayEasy",
    category: "Booking Platform",
    description:
      "Booking platform with Next.js, NestJS and MongoDB. M-Pesa Daraja STK Push with async callbacks, JWT auth with role-based access, booking conflict prevention with scheduled expiry of unpaid bookings, WebSocket real-time reviews, Cloudinary and Resend.",
    tech: "Next.js | NestJS | MongoDB | M-Pesa Daraja | JWT | Cloudinary | Resend",
    image: "/images/stayeasy-placeholder.svg",
    frame: "browser",
    placeholder: true, // TODO: add screenshot
  },
  {
    title: "Qatalyst Project",
    category: "Blockchain Project",
    description:
      "Qatalyst project is a web3 platform to help people manage staff and customers in their business. Is a platform for small business owners who have a problem with managing queues due to the number. I worked on the UI design and the frontend functionality ",
    tech: "Typescript | Tailwind CSS ",
    image: "/images/projects/qatalyst.jpg",
    frame: "browser",
  },
  {
    title: "AgriGrow Farms",
    // TODO: CV lists this as "Farm Management System" and PostgreSQL; portfolio currently says Inventory Management and MySQL.
    category: "Inventory Management App",
    description:
      "Comprehensive inventory management system for agriculture businesses. Features role-based authentication, dashboard analytics, and efficient tracking of stock and operations.",
    tech: "Django | Python | MySQL | Bootstrap | JavaScript",
    image: "/images/projects/agrigrow.jpg",
    frame: "browser",
  },
  {
    title: "Baobab Website",
    // TODO: portfolio says Django; CV says MERN stack.
    category: "Restaurant Website",
    description:
      "Fully responsive restaurant website showcasing Kenyan cuisine. Features contact and reservation forms with Django backend integration and mobile-optimized design.",
    tech: "Django | HTML5 | CSS3 | JavaScript | Bootstrap",
    image: "/images/projects/baobab.jpg",
    frame: "browser",
  },
  {
    title: "M-treat Health Organization Site",
    category: "Health Organization App",
    description:
      "Dynamic health organization website with automated email system for contact forms and newsletter functionality with subscription management.",
    tech: "Django | React | REST API | Email Integration",
    image: "/images/projects/mtreat.jpg",
    frame: "browser",
  },
  {
    title: "Jay Foundation",
    category: "Charity Organization App",
    description:
      "Charity organization website with M-Pesa payment integration for secure donations, automated email responses, and responsive design across all devices.",
    tech: "Django | JavaScript | M-Pesa API | Bootstrap",
    image: "/images/projects/jay-foundation.jpg",
    frame: "browser",
  },
  {
    title: "Lumina interiors",
    category: "Interior Design Website",
    description:
      "Developed a modern web application for an interior design startup to showcase their portfolio and streamline client engagement through an intuitive booking interface. The Django and React-based platform features responsive design, dynamic content management, and optimized performance for displaying high-quality interior design imagery.",
    tech: "Django | React | Bootstrap",
    image: "/images/projects/lumina.jpg",
    frame: "browser",
  },
];
