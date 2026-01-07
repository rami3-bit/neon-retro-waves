import { Radio } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

/**
 * Header - Fixed navigation bar with logo and language selector
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Radio className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-display text-lg font-bold gradient-text">
              DJ LOBO RADIO
            </span>
          </a>

          {/* Right side - Language selector */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
