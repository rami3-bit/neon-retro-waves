import { Clock, Calendar, Disc3 } from "lucide-react";

/**
 * ProgramSchedule - Displays upcoming DJ sets in a grid
 * Edit the scheduleData array to update show times and details
 */

interface ShowData {
  id: number;
  title: string;
  dj: string;
  day: string;
  time: string;
  genre: string;
  isLive?: boolean;
}

// Schedule data - easily editable
const scheduleData: ShowData[] = [
  {
    id: 1,
    title: "Neon Nights",
    dj: "DJ Adolfo",
    day: "Friday",
    time: "8:00 PM - 12:00 AM",
    genre: "80s Synthpop & New Wave",
    isLive: true,
  },
  {
    id: 2,
    title: "Retro Rewind",
    dj: "DJ Adolfo",
    day: "Saturday",
    time: "6:00 PM - 10:00 PM",
    genre: "90s Dance & Eurodance",
  },
  {
    id: 3,
    title: "Sunday Grooves",
    dj: "DJ Adolfo",
    day: "Sunday",
    time: "4:00 PM - 8:00 PM",
    genre: "80s Rock & Power Ballads",
  },
  {
    id: 4,
    title: "Throwback Thursday",
    dj: "DJ Adolfo",
    day: "Thursday",
    time: "9:00 PM - 1:00 AM",
    genre: "90s Hip-Hop & R&B",
  },
  {
    id: 5,
    title: "Midnight Mix",
    dj: "DJ Adolfo",
    day: "Wednesday",
    time: "10:00 PM - 2:00 AM",
    genre: "80s & 90s Mix",
  },
  {
    id: 6,
    title: "Vinyl Sessions",
    dj: "DJ Adolfo",
    day: "Monday",
    time: "7:00 PM - 10:00 PM",
    genre: "Classic Vinyl Spins",
  },
];

const ScheduleCard = ({ show }: { show: ShowData }) => {
  return (
    <div className={`glass-card p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${show.isLive ? 'neon-border-pink' : ''}`}>
      {/* Live badge */}
      {show.isLive && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            LIVE
          </span>
        </div>
      )}
      
      {/* Disc icon */}
      <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center mb-4 group-hover:animate-spin" style={{ animationDuration: '3s' }}>
        <Disc3 className="w-6 h-6 text-background" />
      </div>
      
      {/* Show title */}
      <h3 className="font-display text-xl font-bold mb-2 text-foreground">
        {show.title}
      </h3>
      
      {/* Genre tag */}
      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full mb-4">
        {show.genre}
      </span>
      
      {/* Time and day */}
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{show.day}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>{show.time}</span>
        </div>
      </div>
      
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const ProgramSchedule = () => {
  return (
    <section id="schedule" className="relative py-20 px-4">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="gradient-text">UPCOMING SETS</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tune in to DJ Adolfo's weekly shows featuring the best hits from the 80s and 90s. 
          Don't miss a beat!
        </p>
      </div>
      
      {/* Schedule grid */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData.map((show) => (
            <ScheduleCard key={show.id} show={show} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
