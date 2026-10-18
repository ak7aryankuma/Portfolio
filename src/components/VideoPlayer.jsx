import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';

export default function VideoPlayer({ src, poster, title }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => setHasError(true));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen().catch((err) => console.error(err));
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (hasError) {
    return (
      <div className="relative aspect-video w-full rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-6 text-center">
        {poster && (
          <img src={poster} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        )}
        <div className="relative z-10 space-y-2">
          <p className="text-zinc-300 text-sm font-medium">Video preview loading or unsupported codec</p>
          <a 
            href={src} 
            download 
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline"
          >
            Direct download / view source video
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-2xl"
      onMouseEnter={() => setShowControls(true)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Big Play Overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none transition-opacity">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/90 text-zinc-950 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform backdrop-blur-sm pl-1">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
          </div>
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div 
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 bg-zinc-700/80 rounded-lg appearance-none cursor-pointer accent-emerald-400 hover:h-1.5 transition-all mb-2"
        />

        <div className="flex items-center justify-between text-xs text-zinc-300">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1.5 rounded-lg text-white hover:text-emerald-400 hover:bg-zinc-800/60 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="p-1.5 rounded-lg text-white hover:text-emerald-400 hover:bg-zinc-800/60 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <span className="font-mono text-[11px] text-zinc-400">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg text-white hover:text-emerald-400 hover:bg-zinc-800/60 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
