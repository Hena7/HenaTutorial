import GlassCard from "./component/GlassCard";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto space-y-10">
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Learn. Build. <span className="text-neon-cyan">Level Up.</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          A modern tutorial platform for developers who love clean code and
          beautiful UI.
        </p>

        <button className="mt-4 px-6 py-3 rounded-full border border-neon-cyan text-neon-cyan hover:shadow-[0_0_18px_rgba(0,255,209,0.25)] transition hover:cursor-pointer">
          Get Started
        </button>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <GlassCard title="Structured Courses">
          Step-by-step lessons with videos and code.
        </GlassCard>
        <GlassCard title="Track Progress">
          Know exactly where you are and what’s next.
        </GlassCard>
        <GlassCard title="Modern Stack">
          React, Next.js, Tailwind, PostgreSQL.
        </GlassCard>
      </div>
    </section>
  );
}
