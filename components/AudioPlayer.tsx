"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  // Autoplay setelah interaksi pertama user (klik/tap)
  useEffect(() => {
    const start = () => {
      if (audioRef.current && !playing) {
        audioRef.current
          .play()
          .then(() => setPlaying(true))
          .catch(() => {});
      }
      window.removeEventListener("click", start);
    };

    window.addEventListener("click", start);
    return () => window.removeEventListener("click", start);
  }, [playing]);

  // Atur volume awal (opsional)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6; // 0–1
    }
  }, []);

  return (
    <>
      {/* ganti src dengan nama file mp3 kamu */}
      <audio ref={audioRef} src="/audio/lagu.mp3" loop />

      <button
        onClick={togglePlay}
        className="
          fixed bottom-6 right-6 z-9999
          bg-white/15 backdrop-blur-xl border border-white/30
          p-3.5 rounded-full shadow-xl
          text-white flex items-center justify-center
          hover:bg-white/25 transition-all duration-300
        "
      >
        {playing ? <Pause size={20} /> : <Music size={20} />}
      </button>
    </>
  );
}
