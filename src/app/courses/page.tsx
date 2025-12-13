import GlassCard from "../component/GlassCard";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <Link href="/courses/react-basics">
        <GlassCard title="React Basics">
          Learn components, props, and hooks.
        </GlassCard>
      </Link>

      <Link href="/courses/node-api">
        <GlassCard title="Node API">Build REST APIs with Express.</GlassCard>
      </Link>
      <Link href="/courses/typescript-fundamentals">
        <GlassCard title="Typescript Fundamentals">
          Learn Typescript Fundamentals
        </GlassCard>
      </Link>
    </div>
  );
}
