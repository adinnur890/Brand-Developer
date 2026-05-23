import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src="/brand-developer.svg"
            alt="Brand Developer Logo"
            fill
            className="object-contain animate-pulse"
            style={{ filter: "drop-shadow(0 0 12px #7C3AED) drop-shadow(0 0 4px #3B82F6)" }}
            priority
          />
        </div>
        <p className="text-zinc-500 text-sm tracking-widest uppercase">Loading...</p>
      </div>
    </div>
  );
}