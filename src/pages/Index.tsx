import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudioPlayer from "@/components/AudioPlayer";
import ProgramSchedule from "@/components/ProgramSchedule";
import AboutSection from "@/components/AboutSection";
import SocialFeed from "@/components/SocialFeed";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

/**
 * Index - Main page for DJ Lobo Radio
 */
const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden scrollbar-neon">
        {/* Scanline overlay for retro effect */}
        <div className="fixed inset-0 pointer-events-none scanlines z-40" />
        
        {/* Fixed header */}
        <Header />
        
        {/* Main content with top padding for header and bottom padding for player */}
        <main className="pt-16 pb-24">
          <HeroSection />
          <ProgramSchedule />
          <AboutSection />
          <SocialFeed />
          <Footer />
        </main>
        
        {/* Sticky audio player - always at bottom */}
        <AudioPlayer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
