type Props = {
  videoId: string;
};

export default function YouTubePlayer({ videoId }: Props) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
