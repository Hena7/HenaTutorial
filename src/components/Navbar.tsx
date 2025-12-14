import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-neon-cyan">
          Heni<span className="text-cyan-300">Tutorial</span>
        </Link>

        <div className="flex gap-6 text-sm">
          <Link
            href="/courses"
            className="text-neon-cyan hover:text-neon-cyan transition hover:shadow-[0_0_18px_rgba(0,255,209,0.25)]"
          >
            Courses
          </Link>
          <Link
            href="/login"
            className="text-neon-cyan hover:text-neon-cyan transition hover:shadow-[0_0_18px_rgba(0,255,209,0.25)]"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
