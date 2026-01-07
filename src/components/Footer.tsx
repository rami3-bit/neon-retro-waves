import { Instagram, Facebook, Headphones, Radio } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Footer - Social links and copyright
 */

// Social media links
const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/djloboradio",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/djloboradiodjs/",
  },
  {
    name: "Mixcloud",
    icon: Headphones,
    url: "https://www.mixcloud.com/DjLobo75/",
  },
];

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 mb-6">
            <Radio className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-bold gradient-text">
              DJ LOBO RADIO
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md">
            {t('footerTagline')}
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:neon-border-cyan transition-all duration-300 hover:scale-110 group"
                  aria-label={`Follow on ${social.name}`}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} DJ Lobo Radio. All rights reserved.
          </p>
          
          {/* Additional links */}
          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">{t('privacyPolicy')}</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
