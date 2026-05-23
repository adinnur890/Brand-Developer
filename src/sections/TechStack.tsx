"use client";
import { motion } from "framer-motion";
import { LayoutGrid, Monitor, Code2, Server, Database, Cloud, GitBranch, Sparkles, Zap, Terminal, Layers, Package, ArrowUpRight, FileInput } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/lib/langStore";
import { localeText } from "@/lib/locale";

type LocalizedText = {
  id: string;
  en: string;
};

type TechItem = {
  name: LocalizedText;
  description: LocalizedText;
  icon: React.ElementType;
};

type TechCategory = {
  title: LocalizedText;
  icon: React.ElementType;
  items: TechItem[];
};

const categories: TechCategory[] = [
  {
    title: { id: "Teknologi Frontend", en: "Frontend Technologies" },
    icon: Monitor,
    items: [
      {
        name: { id: "Next.js", en: "Next.js" },
        description: { id: "Framework React berperforma tinggi dengan App Router dan render statis.", en: "High-performance React framework with App Router and static rendering." },
        icon: Code2,
      },
      {
        name: { id: "React", en: "React" },
        description: { id: "Library UI berbasis komponen untuk pengalaman web cepat dan skalabel.", en: "Component-driven UI library for fast, scalable web experiences." },
        icon: LayoutGrid,
      },
      {
        name: { id: "Tailwind CSS", en: "Tailwind CSS" },
        description: { id: "Utility-first styling untuk antarmuka bersih, responsif, dan konsisten.", en: "Utility-first styling for clean, responsive, and consistent interfaces." },
        icon: Sparkles,
      },
      {
        name: { id: "TypeScript", en: "TypeScript" },
        description: { id: "JavaScript bertipe untuk kode frontend yang mudah dipelihara dan andal.", en: "Type-safe JavaScript for maintainable and reliable frontend code." },
        icon: Zap,
      },
      {
        name: { id: "Framer Motion", en: "Framer Motion" },
        description: { id: "Interaksi halus dan transisi UI animasi dengan mudah.", en: "Smooth interactions and animated UI transitions with ease." },
        icon: ArrowUpRight,
      },
    ],
  },
  {
    title: { id: "Teknologi Backend", en: "Backend Technologies" },
    icon: Server,
    items: [
      {
        name: { id: "Node.js", en: "Node.js" },
        description: { id: "Runtime JavaScript server-side yang skalabel untuk API dan layanan backend.", en: "Scalable server-side JavaScript runtime for APIs and backend services." },
        icon: Terminal,
      },
      {
        name: { id: "Express.js", en: "Express.js" },
        description: { id: "Framework minimal dan fleksibel untuk membangun REST API dan logika backend.", en: "Minimal and flexible framework for building REST APIs and backend logic." },
        icon: Layers,
      },
      {
        name: { id: "PHP", en: "PHP" },
        description: { id: "Bahasa scripting server-side untuk aplikasi web dan integrasi CMS yang andal.", en: "Server-side scripting language for robust web applications and CMS integration." },
        icon: Code2,
      },
      {
        name: { id: "Laravel", en: "Laravel" },
        description: { id: "Framework PHP elegan untuk arsitektur aplikasi modern dan API.", en: "Elegant PHP framework for modern application architecture and APIs." },
        icon: Cloud,
      },
      {
        name: { id: "REST API", en: "REST API" },
        description: { id: "API terstruktur dan andal untuk menghubungkan frontend dengan backend.", en: "Reliable, structured APIs to connect frontend experiences with backend systems." },
        icon: Package,
      },
    ],
  },
  {
    title: { id: "Database", en: "Database" },
    icon: Database,
    items: [
      {
        name: { id: "MySQL", en: "MySQL" },
        description: { id: "Database relasional terpercaya untuk data terstruktur dan ketersediaan tinggi.", en: "Proven relational database for structured data and high availability." },
        icon: Database,
      },
      {
        name: { id: "PostgreSQL", en: "PostgreSQL" },
        description: { id: "Database SQL canggih dengan konsistensi dan extensibility yang kuat.", en: "Advanced SQL database with strong consistency and extensibility." },
        icon: Database,
      },
      {
        name: { id: "MongoDB", en: "MongoDB" },
        description: { id: "Database dokumen fleksibel untuk model data aplikasi modern.", en: "Flexible document database for modern app data models." },
        icon: Database,
      },
      {
        name: { id: "Supabase", en: "Supabase" },
        description: { id: "Backend as a service open source dengan database, auth, dan sinkron realtime.", en: "Open source backend as a service with database, auth, and real-time sync." },
        icon: Cloud,
      },
      {
        name: { id: "Firebase", en: "Firebase" },
        description: { id: "Database realtime dan hosting untuk deployment serverless cepat.", en: "Realtime database and hosting for fast, serverless deployments." },
        icon: Cloud,
      },
    ],
  },
  {
    title: { id: "Alat & Deployment", en: "Tools & Deployment" },
    icon: GitBranch,
    items: [
      {
        name: { id: "GitHub", en: "GitHub" },
        description: { id: "Source control dan kolaborasi untuk workflow development yang halus.", en: "Source control and collaboration for polished development workflows." },
        icon: GitBranch,
      },
      {
        name: { id: "Vercel", en: "Vercel" },
        description: { id: "Deploy cepat dan hosting edge untuk Next.js dan aplikasi frontend.", en: "Fast deployments and edge hosting for Next.js and frontend apps." },
        icon: ArrowUpRight,
      },
      {
        name: { id: "Cloudflare", en: "Cloudflare" },
        description: { id: "Performa dan keamanan di edge dengan caching global.", en: "Performance and security at the edge with global caching." },
        icon: Cloud,
      },
      {
        name: { id: "Postman", en: "Postman" },
        description: { id: "Testing API dan dokumentasi untuk integrasi backend yang sempurna.", en: "API testing and documentation for flawless backend integration." },
        icon: FileInput,
      },
      {
        name: { id: "Figma", en: "Figma" },
        description: { id: "Kolaborasi desain untuk UI pixel-perfect dan sistem desain.", en: "Design collaboration for pixel-perfect UI and design systems." },
        icon: LayoutGrid,
      },
    ],
  },
];

export default function TechStack() {
  const { lang } = useLang();
  const t = localeText[lang];

  return (
    <section id="tech" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t.techStack.badge}
          titleFirst={t.techStack.titleFirst}
          titleAccent={t.techStack.titleAccent}
          description={t.techStack.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-black/20"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-purple-600/15 to-blue-600/15 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-500/10">
                    <CategoryIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title[lang]}</h3>
                    <p className="text-sm text-zinc-400">{category.items.length} {lang === "id" ? "teknologi" : "technologies"}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.div
                        key={item.name.en}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_20px_80px_rgba(124,58,237,0.18)]"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-md shadow-purple-500/20">
                            <ItemIcon size={18} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white">{item.name[lang]}</h4>
                          </div>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">{item.description[lang]}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
