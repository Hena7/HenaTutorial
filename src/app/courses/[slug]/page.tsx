import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage(props: Props) {
  const params = await props.params;
  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-neon-cyan">
        {params.slug.replace(/-/g, " ")}
      </h1>

      <ul className="space-y-3">
        <li>
          <Link
            href={`/courses/${params.slug}/lessons/intro`}
            className="text-neon-cyan hover:underline"
          >
            Introduction
          </Link>
        </li>
      </ul>
      <Link href="/courses" className="text-sm text-neon-cyan hover:underline">
        ← Back to Courses
      </Link>
    </section>
  );
}
