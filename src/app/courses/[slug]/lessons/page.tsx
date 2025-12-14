import YouTubePlayer from "@/app/component/YouTubePlayer";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
    lessonSlug?: string;
  }>;
};

export default async function LessonPage(props: Props) {
  const params = await props.params;

  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <Link
        href={`/courses/${params.slug}`}
        className="text-sm text-neon-cyan hover:underline"
      >
        ← Back to Course
      </Link>

      <h1 className="text-3xl font-bold">
        {params.lessonSlug ? params.lessonSlug.replace(/-/g, " ") : "Lessons"}
      </h1>

      <YouTubePlayer videoId="watch?v=uX5SF94RBNI" />

      <p className="text-slate-300 leading-relaxed">
        In this lesson, you’ll learn the core concepts and how they apply in
        real projects.
      </p>
    </section>
  );
}
