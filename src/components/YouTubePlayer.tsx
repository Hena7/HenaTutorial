type Props = {
  videoId: string;
};

export default function YouTubePlayer({ videoId }: Props) {
  // Extract video ID from full YouTube URL or query string
  const extractVideoId = (id: string) => {
    if (id.includes("v=")) {
      return id.split("v=")[1].split("&")[0];
    }
    return id;
  };

  const embedId = extractVideoId(videoId);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
