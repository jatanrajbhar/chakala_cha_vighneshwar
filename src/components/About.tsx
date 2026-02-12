import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import ganeshLights from "@/assets/ganesh-lights.jpg";

const About = () => {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-12 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={ganeshLights}
          alt="Ganesh celebration"
          className="w-full h-[130%] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      <div ref={containerRef} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gradient-saffron">{t.aboutTitle1}</span>{" "}
              <span className="text-foreground">{t.aboutTitle2}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-saffron mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-crimson"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-body">
              {t.aboutPara1Start}
              <span className="text-secondary font-semibold">
                {t.aboutMandalName}
              </span>
              {t.aboutPara1Mid}
              <span className="text-accent font-semibold">{t.aboutYouthLed}</span>
              {t.aboutPara1End}
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-body">
              <span className="text-secondary font-semibold">
                {t.aboutCcvName}
              </span>
              {t.aboutPara2}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
