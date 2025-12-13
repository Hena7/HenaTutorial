import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function CoursePage({ params }: Props) {
  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-neon-cyan">
        Course: {params.slug}
      </h1>

      <p className="text-slate-400">This is the course detail page.</p>
      <Link href="/courses" className="text-sm text-neon-cyan hover:underline">
        ← Back to Courses
      </Link>
    </section>
  );
}
