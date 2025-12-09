'use client';
import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Hls from 'hls.js';
if (typeof window !== 'undefined') window.Hls = Hls;


export default function PlyrPlayer({ url, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      controls: [
        'play', 
        'progress', 
        'current-time', 
        'mute', 
        'volume', 
        'settings', // for speed
        'fullscreen'
      ],
      settings: ['quality', 'speed', 'loop'],
      autoplay: false,
      preload: 'metadata',
    });

    // If the URL is HLS (.m3u8), let Plyr handle it with hls.js
    if (url?.endsWith('.m3u8') && window.Hls) {
      const hls = new window.Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);
    }

    return () => player.destroy();
  }, [url]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      className="w-full h-full object-cover object-center rounded-xl"
      playsInline
      controls
    >
      <source src={url} type="application/x-mpegURL" />
    </video>
  );
}
