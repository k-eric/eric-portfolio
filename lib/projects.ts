import type { ProjectSlug } from "@/lib/project-slugs";

export type ProjectStatus = "Prototype / demo" | "Live website" | "Completed build";
export type ProjectPreviewVariant = "watch" | "creative" | "in-for-christ";
export type ProjectFeatureStatus = "Implemented" | "In progress" | "Planned";

export type ProjectFeature = {
  name: string;
  status: ProjectFeatureStatus;
  description?: string;
};

export type Project = {
  slug: ProjectSlug;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  platform?: string;
  overview?: string;
  problem?: string;
  goals?: string[];
  role?: string;
  contributions?: string[];
  technologies?: string[];
  designDecisions?: string[];
  challenges?: string[];
  lessonsLearned?: string[];
  features?: ProjectFeature[];
  preview: {
    variant: ProjectPreviewVariant;
    label: string;
  };
  liveUrl?: string;
  repositoryUrl?: string;
  dateInfo?: string;
  completedWork?: string[];
  currentProgress?: string[];
  areasToEvaluate?: string[];
  nextSteps?: string[];
  pendingDetails?: string[];
  contentTodo?: string[];
  caseStudyReady?: boolean;
  featuredOnHome: boolean;
};

export const projects: Project[] = [
  {
    slug: "watch-ric",
    title: "WATCH RIC",
    category: "E-commerce",
    status: "Prototype / demo",
    shortDescription:
      "A watch-shopping prototype with product browsing, cart, checkout, and admin workflows. Payments are sandbox-only; it is not accepting real orders.",
    platform: "Lovable",
    overview:
      "WATCH RIC explores an online watch-shopping journey, from viewing a product to moving through checkout. The goal was to develop the idea end to end as a working prototype, including the customer-facing flow and an admin panel.",
    problem:
      "The project needed a connected shopping experience rather than isolated product pages: customers should be able to discover watches, review product details, use a cart, and proceed through a demo checkout.",
    goals: [
      "Create a responsive storefront for browsing watches and viewing product details.",
      "Connect product discovery to a cart and checkout flow.",
      "Include authentication and an admin panel as part of the prototype.",
    ],
    role: "End-to-end project development, from shaping the shopping experience to implementing the prototype with Lovable and Supabase.",
    contributions: [
      "Developed the WATCH RIC project end to end using Lovable, with Supabase as its backend.",
      "Implemented the product listing and detail views, shopping cart, checkout flow, admin panel, and authentication.",
      "Built responsive layouts for the shopping experience.",
      "Added sandbox/demo payment handling to the checkout flow; live payment processing is not enabled.",
    ],
    technologies: ["Lovable", "Supabase"],
    features: [
      { name: "Product listing and product details", status: "Implemented" },
      { name: "Shopping cart", status: "Implemented" },
      {
        name: "Checkout flow",
        status: "Implemented",
        description: "The flow uses sandbox/demo payments only.",
      },
      { name: "Admin panel", status: "Implemented" },
      { name: "Responsive layout", status: "Implemented" },
      { name: "Authentication", status: "Implemented" },
      {
        name: "Live payments and real orders",
        status: "Planned",
        description:
          "Live payment processing is not enabled, and the site is not accepting real orders.",
      },
    ],
    designDecisions: [
      "Used Lovable to develop the product experience and Supabase for backend services.",
      "Kept payment handling in a sandbox/demo state rather than presenting the prototype as a live store.",
    ],
    challenges: [
      "The shopping journey spans product discovery, cart state, checkout, authentication, and admin workflows; those pieces need to work together while the project remains a prototype.",
    ],
    lessonsLearned: [
      "A completed demo checkout is not the same as a live commerce system: real orders require verified persistence, error handling, and a production payment integration.",
    ],
    preview: {
      variant: "watch",
      label: "CSS-based illustration for WATCH RIC; not a screenshot of the application.",
    },
    liveUrl: "https://watchric-kenya-time.lovable.app/",
    repositoryUrl: "https://github.com/k-eric/watchric-kenya-time.git",
    completedWork: [
      "Built product listings and detail views, cart and checkout flows, an admin panel, authentication, and responsive layouts.",
      "Implemented sandbox/demo payments only; live payments are not enabled.",
    ],
    currentProgress: [
      "Prototype/demo; it is not ready for customers and is not accepting real orders.",
      "No live payment provider is connected.",
    ],
    nextSteps: [
      "Improve product information so shoppers can make informed choices.",
      "Test cart behavior and checkout validation, including invalid and incomplete inputs.",
      "Verify authentication behavior and Supabase database permissions.",
      "Test order persistence and error handling throughout the checkout journey.",
      "Select and integrate a suitable live payment provider for Kenya before accepting real orders.",
      "Complete end-to-end and mobile testing before considering a customer-ready release.",
    ],
    featuredOnHome: true,
  },
  {
    slug: "kericreatives",
    title: "KeriCreatives",
    category: "Creative studio & digital portfolio",
    status: "Live website",
    shortDescription:
      "My creative studio website, designed and implemented end to end to bring its identity, services, and creative work online.",
    platform: "Lovable",
    overview:
      "KeriCreatives is my creative studio website. I took it from design through implementation to create a clear online home for the studio and its work.",
    problem:
      "A creative studio needs an online presence where its identity and range of creative work can be presented together. This project brings that presentation into a dedicated website.",
    goals: [
      "Create a distinct digital presence for the creative studio.",
      "Bring the studio's identity and creative work together in a coherent website.",
    ],
    role: "End-to-end ownership across the website's design and implementation.",
    contributions: [
      "Designed and implemented the creative studio website from end to end.",
      "Built the application with React, TypeScript, Vite, and Tailwind CSS, using shadcn/ui-style components built on Radix UI.",
      "Used React Router for navigation and TanStack Query for data-related application needs.",
      "Used React Hook Form and Zod, and integrated Supabase JS for authentication and blog-related operations.",
      "Hosted the website on Vercel and included Vercel Speed Insights.",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite 5",
      "Tailwind CSS 3",
      "shadcn/ui-style components",
      "Radix UI",
      "React Router",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Supabase JS",
      "Vercel Speed Insights",
      "Vercel",
    ],
    designDecisions: [
      "Used a React and TypeScript application with Vite and Tailwind CSS for the website implementation.",
      "Combined shadcn/ui-style components with Radix UI primitives, and used React Router, TanStack Query, React Hook Form, and Zod for their respective application concerns.",
      "Integrated Supabase JS for authentication and blog-related operations.",
    ],
    challenges: [
      "The site brings visual presentation together with navigation, forms, data handling, and authentication. Keeping those concerns organized while maintaining a consistent studio identity shaped the implementation.",
    ],
    lessonsLearned: [
      "A focused set of libraries can support distinct parts of a website without making every interaction depend on the same layer.",
      "Integrations should be described according to what the running application is verified to use, not simply everything present in a repository.",
    ],
    preview: {
      variant: "creative",
      label: "CSS-based illustration for KeriCreatives; not a screenshot of the website.",
    },
    liveUrl: "https://www.kericreatives.com/",
    repositoryUrl: "https://github.com/k-eric/kericreatives",
    nextSteps: [
      "Continue reviewing the website's accessibility, responsive behavior, and content as the studio evolves.",
    ],
    featuredOnHome: false,
  },
  {
    slug: "in-for-christ",
    title: "In For Christ",
    category: "Faith-focused website",
    status: "Completed build",
    shortDescription:
      "A complete website I built for a Christian faith-focused initiative, creating a dedicated online presence for its purpose.",
    platform: "Lovable",
    overview:
      "In For Christ is a Christian faith-focused initiative. I built its whole website to give the initiative a dedicated place online and communicate its purpose.",
    problem:
      "The initiative needed a website centered on its Christian faith-focused purpose. The scope of my work was to build the complete website, rather than a single page or isolated component.",
    goals: [
      "Create a complete website for the In For Christ initiative.",
      "Give the initiative a clear online presence grounded in its faith-focused purpose.",
    ],
    role: "End-to-end website development; I built the whole website using Lovable.",
    contributions: [
      "Built the complete website for the Christian faith-focused initiative.",
      "Owned the website-development work from end to end using Lovable.",
    ],
    challenges: [
      "The work called for keeping the website centered on the initiative's purpose without assuming features or technical requirements beyond the confirmed scope.",
    ],
    lessonsLearned: [
      "For an initiative-led website, the project purpose should guide the content and presentation; unsupported implementation details should not be presented as facts.",
    ],
    preview: {
      variant: "in-for-christ",
      label: "CSS-based illustration for In For Christ; not a screenshot of the website.",
    },
    liveUrl: "http://inforchrist.org/",
    featuredOnHome: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
