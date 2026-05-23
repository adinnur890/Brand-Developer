export type LocalizedText = {
  id: string;
  en: string;
};

export type ServiceItem = {
  icon: string;
  title: LocalizedText;
  desc: LocalizedText;
};

export type ProductItem = {
  title: string;
  desc: LocalizedText;
  price: string;
  tag: string;
  url: string;
  image: string;
};

export type PortfolioItem = {
  title: string;
  desc: LocalizedText;
  stack: string[];
  color: string;
  url: string;
  image: string;
};

export type StatItem = {
  value: number;
  suffix: string;
  label: LocalizedText;
};

export type TestimonialItem = {
  name: string;
  role: LocalizedText;
  text: LocalizedText;
};

export const services: ServiceItem[] = [
  {
    icon: "Monitor",
    title: { id: "Pengembangan Website", en: "Website Development" },
    desc: { id: "Website modern yang cepat dan skalabel dibangun dengan teknologi terkini.", en: "Modern, fast, and scalable websites built with cutting-edge tech." },
  },
  {
    icon: "Layout",
    title: { id: "Landing Page", en: "Landing Page" },
    desc: { id: "Landing page yang dirancang untuk menangkap lead dan meningkatkan penjualan.", en: "High-converting landing pages designed to capture leads and sales." },
  },
  {
    icon: "ShoppingCart",
    title: { id: "E-Commerce", en: "E-Commerce" },
    desc: { id: "Toko online lengkap dengan integrasi pembayaran yang mulus.", en: "Full-featured online stores with seamless payment integration." },
  },
  {
    icon: "LayoutDashboard",
    title: { id: "Dashboard Admin", en: "Dashboard Admin" },
    desc: { id: "Panel admin kuat dengan data dan analitik real-time.", en: "Powerful admin panels with real-time data and analytics." },
  },
  {
    icon: "Palette",
    title: { id: "UI/UX Design", en: "UI/UX Design" },
    desc: { id: "Antarmuka indah dan intuitif yang disukai pengguna.", en: "Beautiful, intuitive interfaces that users love to interact with." },
  },
  {
    icon: "Code2",
    title: { id: "Aplikasi Web Kustom", en: "Custom Web App" },
    desc: { id: "Aplikasi web khusus yang dirancang untuk kebutuhan bisnis Anda.", en: "Tailored web applications built to solve your unique business needs." },
  },
];

export const products: ProductItem[] = [
  {
    title: "Tododin Premium",
    desc: {
      id: "Platform toko digital premium dengan sistem manajemen produk lengkap.",
      en: "Premium digital store platform with complete product management system.",
    },
    price: "Rp 400.000",
    tag: "Live",
    url: "https://tododinpremium.vercel.app/",
    image: "/tododin-preview.jpg",
  },
  {
    title: "Nexora AI",
    desc: {
      id: "Platform AI modern dengan fitur autentikasi, database real-time, dan integrasi AI canggih.",
      en: "Modern AI platform with authentication, real-time database, and advanced AI integration.",
    },
    price: "Rp 1.500.000",
    tag: "Live",
    url: "https://nexora-ai-twqz.vercel.app/",
    image: "/nexora-preview.jpg",
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: "Tododin Premium",
    desc: {
      id: "Platform toko digital premium dengan sistem manajemen produk lengkap.",
      en: "Premium digital store platform with complete product management system.",
    },
    stack: ["Node.js", "PHP", "Tailwind"],
    color: "from-purple-600 to-blue-600",
    url: "https://tododinpremium.vercel.app/",
    image: "/tododin-preview.jpg",
  },
  {
    title: "Nexora AI",
    desc: {
      id: "Platform AI modern dengan fitur autentikasi, database real-time, dan integrasi AI canggih.",
      en: "Modern AI platform with authentication, real-time database, and advanced AI integration.",
    },
    stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "Framer Motion", "Supabase", "AI & Custom Features"],
    color: "from-blue-600 to-cyan-500",
    url: "https://nexora-ai-twqz.vercel.app/",
    image: "/nexora-preview.jpg",
  },
];

export const stats: StatItem[] = [
  { value: 100, suffix: "+", label: { id: "Proyek Selesai", en: "Projects Completed" } },
  { value: 50, suffix: "+", label: { id: "Klien Puas", en: "Happy Clients" } },
  { value: 3, suffix: "+", label: { id: "Tahun Pengalaman", en: "Years Experience" } },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Andi",
    role: { id: "UMKM Fashion", en: "Fashion SME" },
    text: {
      id: "Website saya jadi terlihat jauh lebih profesional dan modern.",
      en: "My website now looks far more professional and modern.",
    },
  },
  {
    name: "Rizky",
    role: { id: "Digital Store", en: "Digital Store" },
    text: {
      id: "Proses cepat, desain premium, dan sangat responsive.",
      en: "Fast process, premium design, and highly responsive.",
    },
  },
  {
    name: "Fajar",
    role: { id: "Online Shop", en: "Online Shop" },
    text: {
      id: "Hasil website sangat memuaskan dan support sangat membantu.",
      en: "The website results were very satisfying and the support was very helpful.",
    },
  },
];

export const pricingPlans = [
  {
    name: { id: "Basic", en: "Basic" },
    type: { id: "Paket Basic", en: "Basic Package" },
    description: {
      id: "Cocok untuk personal branding dan UMKM kecil.",
      en: "Perfect for personal branding and small businesses.",
    },
    price: "Rp 100.000",
    features: {
      id: [
        "Landing page sederhana",
        "Responsive mobile",
        "Tombol WhatsApp",
        "Desain clean modern",
      ],
      en: [
        "Simple landing page",
        "Mobile responsive",
        "WhatsApp button",
        "Clean modern design",
      ],
    },
    highlight: false,
  },
  {
    name: { id: "Starter", en: "Starter" },
    type: { id: "Paket Starter", en: "Starter Package" },
    description: {
      id: "Cocok untuk usaha kecil dan portfolio.",
      en: "Ideal for small businesses and portfolios.",
    },
    price: "Rp 250.000",
    features: {
      id: [
        "Landing page premium",
        "Responsive semua device",
        "Form kontak",
        "Integrasi WhatsApp",
        "Basic SEO",
      ],
      en: [
        "Premium landing page",
        "Responsive on all devices",
        "Contact form",
        "WhatsApp integration",
        "Basic SEO",
      ],
    },
    highlight: false,
  },
  {
    name: { id: "Business", en: "Business" },
    type: { id: "Paket Business", en: "Business Package" },
    description: {
      id: "Untuk bisnis yang ingin tampil profesional.",
      en: "For businesses aiming to look professional.",
    },
    price: "Rp 500.000",
    features: {
      id: [
        "Multi halaman",
        "Dashboard sederhana",
        "Optimasi performa",
        "Desain modern premium",
        "Support revisi",
      ],
      en: [
        "Multi-page website",
        "Simple dashboard",
        "Performance optimization",
        "Premium modern design",
        "Revision support",
      ],
    },
    highlight: true,
  },
  {
    name: { id: "Store", en: "Store" },
    type: { id: "Paket Store", en: "Store Package" },
    description: {
      id: "Cocok untuk toko online dan jual produk digital.",
      en: "Perfect for online stores and selling digital products.",
    },
    price: "Rp 850.000",
    features: {
      id: [
        "Sistem keranjang",
        "Checkout WhatsApp",
        "Dashboard admin",
        "Upload produk",
        "Responsive premium UI",
      ],
      en: [
        "Shopping cart system",
        "WhatsApp checkout",
        "Admin dashboard",
        "Product upload",
        "Premium responsive UI",
      ],
    },
    highlight: false,
  },
  {
    name: { id: "Premium", en: "Premium" },
    type: { id: "Paket Premium", en: "Premium Package" },
    description: {
      id: "Untuk website custom dan full stack project.",
      en: "For custom full stack websites and projects.",
    },
    price: "Rp 1.500.000+",
    features: {
      id: [
        "Website custom full stack",
        "Login system",
        "Database",
        "API integration",
        "Dashboard user & admin",
        "Optimasi security",
      ],
      en: [
        "Custom full stack website",
        "Login system",
        "Database",
        "API integration",
        "User & admin dashboard",
        "Security optimization",
      ],
    },
    highlight: false,
  },
  {
    name: { id: "Enterprise", en: "Enterprise" },
    type: { id: "Paket Enterprise", en: "Enterprise Package" },
    description: {
      id: "Untuk startup, SaaS, dan platform besar.",
      en: "For startups, SaaS, and enterprise platforms.",
    },
    price: "Rp 3.000.000+",
    features: {
      id: [
        "Full custom development",
        "Scalable architecture",
        "Premium UI/UX",
        "Advanced dashboard",
        "Maintenance & konsultasi",
      ],
      en: [
        "Full custom development",
        "Scalable architecture",
        "Premium UI/UX",
        "Advanced dashboard",
        "Maintenance & consultation",
      ],
    },
    highlight: false,
  },
];

export const techStack = [
  "Next.js 16",
  "React 19",
  "Tailwind CSS 4",
  "Framer Motion",
  "Lucide React",
  "TypeScript",
  "Supabase",
  "Vercel",
];

export const faqItems = [
  {
    question: {
      id: "Berapa lama pengerjaan website?",
      en: "How long does it take to build a website?",
    },
    answer: {
      id: "Rata-rata 2-4 minggu, tergantung fitur dan kompleksitas proyek.",
      en: "Usually 2-4 weeks depending on project features and complexity.",
    },
  },
  {
    question: {
      id: "Apakah bisa revisi?",
      en: "Can revisions be made?",
    },
    answer: {
      id: "Ya, setiap paket termasuk revisi desain hingga hasil akhir sesuai kebutuhan Anda.",
      en: "Yes, every package includes revisions until the final website meets your needs.",
    },
  },
  {
    question: {
      id: "Apakah bisa custom design?",
      en: "Can it be custom designed?",
    },
    answer: {
      id: "Tentu. Kami membuat desain website custom yang mencerminkan identitas brand Anda.",
      en: "Absolutely. We create custom website designs that reflect your brand identity.",
    },
  },
  {
    question: {
      id: "Apakah website responsive?",
      en: "Is the website responsive?",
    },
    answer: {
      id: "Semua website dibangun responsif untuk tampil mulus di desktop, tablet, dan mobile.",
      en: "All websites are built responsive to perform smoothly on desktop, tablet, and mobile.",
    },
  },
  {
    question: {
      id: "Apakah bisa dibuat toko online?",
      en: "Can it be made into an online store?",
    },
    answer: {
      id: "Ya, kami menyediakan fitur toko online lengkap dengan manajemen produk dan checkout WhatsApp.",
      en: "Yes, we provide online store features with product management and WhatsApp checkout.",
    },
  },
  {
    question: {
      id: "Apakah support setelah website selesai?",
      en: "Is support available after the website is finished?",
    },
    answer: {
      id: "Kami menyediakan support setelah selesai, termasuk update, perbaikan, dan konsultasi lanjutan.",
      en: "We offer post-launch support, including updates, fixes, and ongoing consultation.",
    },
  },
];
