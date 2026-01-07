import HeroSection from "@/components/HeroSection";
import AudioPlayer from "@/components/AudioPlayer";
import ProgramSchedule from "@/components/ProgramSchedule";
import AboutSection from "@/components/AboutSection";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";

/**
 * Index - Main page for DJ Adolfo's radio station
 * 
 * Layout:
 * 1. Hero Section - Profile and live status
 * 2. Program Schedule - Upcoming shows grid
 * 3. About Section - Bio and features
 * 4. Footer - Social links
 * 5. Audio Player - Sticky bottom bar (always visible)
 * 
 * Note: The audio player uses pb-24 padding at the bottom 
 * to prevent content from being hidden behind the sticky player.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden scrollbar-neon">
      {/* Scanline overlay for retro effect */}
      <div className="fixed inset-0 pointer-events-none scanlines z-40" />
      
      {/* Main content with bottom padding for sticky player */}
      <main className="pb-24">
        <HeroSection />
        <ProgramSchedule />
        <AboutSection />
        <SocialFeed />
        <Footer />
      </main>
      
      {/* Sticky audio player - always at bottom */}
      <AudioPlayer />
    </div>
  );
};

export default Index;
