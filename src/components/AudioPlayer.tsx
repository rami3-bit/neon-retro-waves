import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Radio, Loader2 } from "lucide-react";

/**
 * AudioPlayer - Sticky bottom audio player for live stream
 * Stream URL: Zeno.fm DJ Lobo Radio
 */
const STREAM_URL = "https://stream.zeno.fm/gzzqvbuy0d7uv";

const AudioPlayer = () => {
  // State for player controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [nowPlaying, setNowPlaying] = useState("DJ Lobo Radio - 80s & 90s Hits");
  
  // Reference to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Handle play/pause toggle
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Playback failed:", error);
          setIsLoading(false);
        });
    }
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    
    // Unmute if volume is changed while muted
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };
  
  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };
  
  // Set initial volume and handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = volume;
    
    // Handle stream ending or errors
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);
    
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
    };
  }, []);
  
  return (
    <>
      {/* Hidden audio element - persists across navigation */}
      <audio
        ref={audioRef}
        src={STREAM_URL}
        preload="none"
      />
      
      {/* Sticky player bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Play button and equalizer animation */}
            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                disabled={isLoading}
                className="w-14 h-14 rounded-full bg-gradient-neon flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg shadow-primary/30 disabled:opacity-70"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 text-background animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6 text-background" fill="currentColor" />
                ) : (
                  <Play className="w-6 h-6 text-background ml-1" fill="currentColor" />
                )}
              </button>
              
              {/* Equalizer animation (visible when playing) */}
              <div className="hidden sm:flex items-end gap-1 h-8">
                {isPlaying ? (
                  <>
                    <div className="w-1 bg-primary rounded-full animate-equalizer-1" />
                    <div className="w-1 bg-secondary rounded-full animate-equalizer-2" />
                    <div className="w-1 bg-accent rounded-full animate-equalizer-3" />
                    <div className="w-1 bg-primary rounded-full animate-equalizer-2" />
                    <div className="w-1 bg-secondary rounded-full animate-equalizer-1" />
                  </>
                ) : (
                  <>
                    <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
                    <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
                    <div className="w-1 h-4 bg-muted-foreground/50 rounded-full" />
                    <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
                  </>
                )}
              </div>
            </div>
            
            {/* Center: Now Playing info */}
            <div className="flex-1 min-w-0 text-center">
              <div className="flex items-center justify-center gap-2">
                <Radio className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Now Playing</span>
              </div>
              <p className="text-sm md:text-base font-medium truncate text-foreground">
                {nowPlaying}
              </p>
            </div>
            
            {/* Right: Volume control */}
            <div className="flex items-center gap-2">
              {/* Mute button */}
              <button
                onClick={toggleMute}
                className="p-2 hover:text-primary transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              
              {/* Volume slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="hidden sm:block w-20 md:w-24 h-1 bg-muted rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:bg-primary
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:shadow-md
                  [&::-webkit-slider-thumb]:hover:scale-125
                  [&::-webkit-slider-thumb]:transition-transform"
                aria-label="Volume"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
