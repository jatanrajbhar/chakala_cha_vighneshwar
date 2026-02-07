import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// Load all karayakarta images from `src/assets/karayakarta`
const karayaModules = import.meta.glob('../assets/karayakarta/*.{jpg,jpeg,png,webp}', { eager: true }) as Record<string, any>;

const findImageForName = (name: string) => {
  const first = name.split(/\s+/)[0].toLowerCase();
  const compact = name.replace(/\s+/g, "").toLowerCase();
  // Prefer compact (full name) match over first name match to avoid conflicts
  const key = Object.keys(karayaModules).find((p) => {
    return p.toLowerCase().includes(compact);
  }) || Object.keys(karayaModules).find((p) => {
    return p.toLowerCase().includes(first);
  });
  return key ? karayaModules[key].default || karayaModules[key] : null;
};

const teamMembers = [
  "Aryan Gupta",
  "Anirudh",
  "Prashant Mirekar",
  "Yagn Panchal",
  "Yaksh Panchal",
  "Kushal Gupta",
  "Rahul Gupta",
  "Sandeep Goud",
  "Aman Gupta",
  "Sahil Rajbhar",
  "Jay Mistry",
  "Ganesh Gupta",
  "Larry Dsilva",
  "Pratik Gawale",
  "Pritam Gupta",
  "Pankaj Gupta",
  "Raju Kandu",
  "Vicky Gupta",
  "Ganesh M",
  "Vikas Jaiswar",
  "Sagar Halwai",
  "Jitendra Gupta",
  "Ramesh Dasari",
  "Vishal Gupta",
  "Jatan Rajbhar",
  "Prasad pawar",
].map((name, i) => ({
  id: i + 1,
  name,
  image: findImageForName(name),
}));

const Karyakarta = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="karyakarta" className="relative py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={containerRef} className="section-container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-gold">{t.sabhasadTitle}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.sabhasadSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-card to-muted border border-border hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-crimson">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-card">
                    <User className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-medium text-foreground text-center truncate">
                    {member.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        {/* Removed upload reminder per request */}
      </div>
    </section>
  );
};

export default Karyakarta;
