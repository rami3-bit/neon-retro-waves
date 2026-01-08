import LanguageSelector from './LanguageSelector';
import djLoboLogo from '@/assets/dj-lobo-logo.jpg';

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
            <img 
              src={djLoboLogo} 
              alt="DJ Lobo Radio" 
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
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
