import djAdolfoImage from "@/assets/dj-adolfo.jpg";
import { Radio } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * HeroSection - Main hero area featuring DJ Adolfo's profile
 */
const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating neon orbs for atmosphere */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* ON AIR indicator - prominent pulsing button */}
        <div className="inline-flex items-center gap-3 glass-card px-6 py-3 mb-8 neon-border-pink animate-pulse-glow">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent shadow-[0_0_20px_hsl(var(--accent))]" />
          </span>
          <span className="font-display text-lg font-bold tracking-widest text-accent neon-text-pink">
            {t('onAir')}
          </span>
        </div>
        
        {/* DJ Profile Image with glowing ring */}
        <div className="flex justify-center mb-8">
          <div className="glow-ring w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img
                src={djAdolfoImage}
                alt="DJ Adolfo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Title with neon glow */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
          <span className="gradient-text">DJ ADOLFO</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
          {t('tagline')} <span className="text-primary neon-text-cyan">80s</span> {t('and')} <span className="text-accent neon-text-pink">90s</span>
        </p>
        
        {/* Radio wave icon with neon effect */}
        <div className="flex justify-center items-center gap-2 text-primary mb-8">
          <Radio className="w-6 h-6" />
          <span className="font-display text-sm tracking-widest">{t('retroVibes')}</span>
          <Radio className="w-6 h-6" />
        </div>
        
        {/* CTA Button */}
        <button 
          className="glass-card px-8 py-4 font-display text-lg tracking-wider neon-border-cyan hover:scale-105 transition-transform duration-300"
          onClick={() => {
            const scheduleSection = document.getElementById('schedule');
            if (scheduleSection) {
              scheduleSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {t('viewSchedule')}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
