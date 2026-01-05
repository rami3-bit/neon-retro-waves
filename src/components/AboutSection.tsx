import { Headphones, Music, Mic2, Heart } from "lucide-react";

/**
 * AboutSection - DJ Adolfo's bio and background
 * Edit the bio text below to customize the content
 */

const features = [
  {
    icon: Music,
    title: "80s Specialist",
    description: "Synthpop, New Wave, and all the classics that defined a generation",
  },
  {
    icon: Headphones,
    title: "90s Expert",
    description: "From Eurodance to Hip-Hop, relive the golden era of club music",
  },
  {
    icon: Mic2,
    title: "Live DJ Sets",
    description: "Interactive shows with live mixing and audience requests",
  },
  {
    icon: Heart,
    title: "Passion for Music",
    description: "20+ years of experience spinning the best retro hits",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Bio content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">ABOUT</span>
              <br />
              <span className="text-foreground">DJ ADOLFO</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                DJ Adolfo has been keeping the spirit of the <span className="text-primary">80s</span> and{" "}
                <span className="text-accent">90s</span> alive for over two decades. What started as a 
                passion for collecting vinyl records has evolved into a mission to share the greatest 
                hits of these legendary eras with audiences worldwide.
              </p>
              
              <p>
                From the neon-lit synth sounds of the 80s to the energetic beats of 90s dance music, 
                DJ Adolfo curates the perfect soundtrack for every listener. Whether you're looking 
                for nostalgic classics or discovering these timeless tracks for the first time, 
                you're in for a musical journey like no other.
              </p>
              
              <p>
                <span className="text-secondary font-semibold">Join the retro revolution</span> — 
                tune in to experience the best music from the decades that shaped modern pop culture.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary">5K+</div>
                <div className="text-sm text-muted-foreground">Vinyl Records</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">100K+</div>
                <div className="text-sm text-muted-foreground">Listeners</div>
              </div>
            </div>
          </div>
          
          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
