import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoIcon from "@/assets/logo-icon.png";

const Donation = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="donation" className="relative py-12 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="section-container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-gold">{t.donationTitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 md:p-12 bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-gold text-center overflow-hidden">
            {/* Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <img src={logoIcon} alt="" className="w-64 h-64 object-contain" />
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-saffron flex items-center justify-center animate-glow"
            >
              <Heart className="w-10 h-10 text-secondary-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-10"
            >
              <div className="flex items-center justify-center gap-2 text-secondary mb-4">
                <Clock className="w-5 h-5" />
                <span className="text-sm uppercase tracking-widest font-medium">
                  {t.donationComingSoon}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {t.donationHeading}
              </h3>

              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                {t.donationDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled
                  className="px-8 py-3 bg-gradient-saffron rounded-lg font-semibold text-secondary-foreground opacity-50 cursor-not-allowed"
                >
                  {t.donationBtn}
                </motion.button>
                <a
                  href="#contact"
                  className="text-secondary hover:text-accent transition-colors underline underline-offset-4"
                >
                  {t.donationLink}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;
