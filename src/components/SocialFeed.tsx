import { Instagram, Facebook, Headphones, ExternalLink } from "lucide-react";

/**
 * SocialFeed - Social media links section with prominent icons
 * Features Instagram embed placeholder and direct links to all platforms
 */

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@djloboradio",
    icon: Instagram,
    url: "https://www.instagram.com/djloboradio",
    color: "from-pink-500 to-purple-500",
    description: "Följ oss för senaste nytt och bilder",
  },
  {
    name: "Facebook",
    handle: "DJ Lobo Radio DJs",
    icon: Facebook,
    url: "https://www.facebook.com/djloboradiodjs/",
    color: "from-blue-600 to-blue-400",
    description: "Gilla vår sida för uppdateringar",
  },
  {
    name: "Mixcloud",
    handle: "DjLobo75",
    icon: Headphones,
    url: "https://www.mixcloud.com/DjLobo75/",
    color: "from-cyan-500 to-teal-400",
    description: "Lyssna på tidigare mixar och sets",
  },
];

const SocialFeed = () => {
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
            <span className="gradient-text">FÖLJ OSS</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Häng med på sociala medier för de senaste uppdateringarna och mixes
          </p>
        </div>

        {/* Social platform cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                  <span className="text-sm">Besök</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Instagram embed placeholder */}
        <div className="glass-card p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-accent" />
            <h3 className="font-display text-xl font-bold">Instagram Feed</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Se våra senaste inlägg direkt från Instagram
          </p>
          
          {/* Placeholder grid for Instagram posts */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-card to-muted rounded-lg flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer"
              >
                <Instagram className="w-6 h-6 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
              </div>
            ))}
          </div>
          
          <a
            href="https://www.instagram.com/djloboradio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 neon-border-pink hover:scale-105 transition-transform font-display tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            Följ @djloboradio
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
