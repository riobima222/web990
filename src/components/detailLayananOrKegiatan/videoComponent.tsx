interface VideoComponentProps {
  url: string;
  width?: number | string;
  height?: number | string;
  title?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  url,
  width = 560,
  height = 315,
  title = "Embedded video",
}) => {
  const getEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }

    // If it's already an embed URL, return it as is
    if (url.includes("youtube.com/embed/")) {
      return url;
    }

    // If no match, return the original URL
    return url;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="video-wrapper">
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoComponent;
