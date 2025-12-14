type Props = {
  params: Promise<{
    slug: string;
    lessonSlug: string;
  }>;
};

export default async function LessonPage(props: Props) {
  const params = await props.params;

  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        Lesson: {params.lessonSlug.replace(/-/g, " ")}
      </h1>

      <p className="text-slate-400">Course: {params.slug}</p>
    </section>
  );
}
