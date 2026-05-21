import React from 'react';

type Props = { videoId: string; title?: string };

export default function YouTubeEmbed({videoId, title = 'YouTube video'}: Props) {
  return (
    <div className="videoEmbed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
