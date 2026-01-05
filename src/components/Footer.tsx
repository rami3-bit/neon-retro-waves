import { Instagram, Facebook, Headphones, Radio, Mail } from "lucide-react";

/**
 * Footer - Social links and copyright
 * Update the social URLs below with actual links
 */

// Social media links - replace "#" with actual URLs
const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "#", // Replace with: https://instagram.com/djadolfo
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "#", // Replace with: https://facebook.com/djadolfo
  },
  {
    name: "Mixcloud",
    icon: Headphones, // Using Headphones as Mixcloud icon
    url: "#", // Replace with: https://mixcloud.com/djadolfo
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@djadolfo.com", // Replace with actual email
  },
];

const Footer = () => {
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
              DJ ADOLFO
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md">
            Bringing the best of 80s and 90s music to your ears. 
            Tune in and let the nostalgia flow.
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
            © {currentYear} DJ Adolfo. All rights reserved.
          </p>
          
          {/* Additional links */}
          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
