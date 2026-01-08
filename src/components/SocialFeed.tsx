import { Instagram, Facebook, Headphones, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import instagramQR from "@/assets/instagram-qr.jpg";

/**
 * SocialFeed - Social media links section with prominent icons
 */
const SocialFeed = () => {
  const { t, language } = useLanguage();

  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@djloboradio",
      icon: Instagram,
      url: "https://www.instagram.com/djloboradio",
      color: "from-pink-500 to-purple-500",
      description: t('instagramDesc'),
    },
    {
      name: "Facebook",
      handle: "DJ Lobo Radio DJs",
      icon: Facebook,
      url: "https://www.facebook.com/djloboradiodjs/",
      color: "from-blue-600 to-blue-400",
      description: t('facebookDesc'),
    },
    {
      name: "Mixcloud",
      handle: "DjLobo75",
      icon: Headphones,
      url: "https://www.mixcloud.com/DjLobo75/",
      color: "from-cyan-500 to-teal-400",
      description: t('mixcloudDesc'),
    },
  ];

  return (
    <section id="social" className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-10 right-20 w-32 h-32 bg-neon-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('socialTitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('socialSubtitle')}
          </p>
        </div>

        {/* Social platform cards with QR code */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-6 hover:neon-border-cyan transition-all duration-300 hover:scale-105"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Platform info */}
                <h3 className="font-display text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <p className="text-primary text-sm mb-2">{platform.handle}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {platform.description}
                </p>
                
                {/* Link indicator */}
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="text-sm">{t('visit')}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
          
          {/* Instagram QR Code card */}
          <a
            href="https://www.instagram.com/djloboradio"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card p-6 hover:neon-border-pink transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center"
          >
            <img 
              src={instagramQR} 
              alt="Scan to follow on Instagram" 
              className="w-32 h-32 rounded-lg mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-muted-foreground text-sm text-center">
              {t('scanToFollow')}
            </p>
          </a>
        </div>

        {/* Google Calendar embed */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="font-display text-xl font-bold gradient-text">{t('calendarTitle')}</h3>
          </div>
          <p className="text-muted-foreground text-center mb-6">
            {t('calendarSubtitle')}
          </p>
          
          {/* Responsive calendar container */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '75%' }}>
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=djloboradio2016%40gmail.com&ctz=Europe%2FStockholm&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&mode=AGENDA&hl=${language}`}
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
              title="DJ Lobo Radio Schedule"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
