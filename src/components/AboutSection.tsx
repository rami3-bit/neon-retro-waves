import { Headphones, Music, Mic2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import djLoboProfile from "@/assets/dj-lobo-profile.jpg";

/**
 * AboutSection - DJ Lobo's bio and background
 */
const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Music,
      title: t('feature1Title'),
      description: t('feature1Desc'),
    },
    {
      icon: Headphones,
      title: t('feature2Title'),
      description: t('feature2Desc'),
    },
    {
      icon: Mic2,
      title: t('feature3Title'),
      description: t('feature3Desc'),
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Bio content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">{t('aboutTitle')}</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('aboutText1')}</p>
              <p>{t('aboutText2')}</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary">5K+</div>
                <div className="text-sm text-muted-foreground">Vinyl</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">100K+</div>
                <div className="text-sm text-muted-foreground">Listeners</div>
              </div>
            </div>
          </div>
          
          {/* Right: DJ Lobo image and feature cards */}
          <div className="space-y-6">
            {/* DJ Lobo Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={djLoboProfile} 
                  alt="DJ Lobo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-neon rounded-full opacity-50 blur-2xl" />
            </div>
            
            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-neon flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-background" />
                    </div>
                    <h3 className="font-display text-sm font-bold mb-1 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
