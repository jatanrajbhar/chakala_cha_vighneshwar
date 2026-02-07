import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
// Load all images placed in `src/assets/ganesh utsav` (year-wise uploads)
const ganeshModules = import.meta.glob('../assets/ganesh utsav/*.{jpg,jpeg,png,webp}', { eager: true }) as Record<string, any>;

const getImageForYear = (year: string) => {
  const key = Object.keys(ganeshModules).find((p) => p.includes(year));
  return key ? ganeshModules[key].default || ganeshModules[key] : null;
};

const years = [
  { year: "2017", image: getImageForYear("2017") },
  { year: "2018", image: getImageForYear("2018") },
  { year: "2019", image: getImageForYear("2019") },
  // removed 2020 and 2021 as requested
  { year: "2022", image: getImageForYear("2022") },
  { year: "2023", image: getImageForYear("2023") },
  { year: "2024", image: getImageForYear("2024") },
  { year: "2025", image: getImageForYear("2025") },
];

const GaneshUtsav = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="ganesh-utsav" className="relative py-12 bg-gradient-dark">
      <div ref={containerRef} className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-foreground">{t.ganeshTitle1}</span>{" "}
            <span className="text-gradient-saffron">{t.ganeshTitle2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.ganeshSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={`Ganesh Utsav ${item.year}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-sm">
                    {t.ganeshPhotoSoon}
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

              {/* Year Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-lg border border-secondary/30"
                >
                  <span className="text-xl md:text-2xl font-display font-bold text-gradient-gold">
                    {item.year}
                  </span>
                </motion.div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        {/* Removed upload reminder per request */}
      </div>
    </section>
  );
};

export default GaneshUtsav;
