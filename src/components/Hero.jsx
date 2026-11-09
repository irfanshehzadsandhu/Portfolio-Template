import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socials } from '../constants';
import { snapdebt } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={snapdebt}
          alt="Snapdebt Recovery product interface"
          className="w-full h-full object-cover object-top scale-105"
        />
        <div className="absolute inset-0 bg-heroWash" />
        <div className="absolute inset-0 atmosphere opacity-60" />
      </div>

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} pb-16 sm:pb-20 pt-36`}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-sans text-accentMuted text-[0.8rem] sm:text-[0.9rem] uppercase tracking-[0.2em] mb-4"
        >
          Engineering Manager
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          className={styles.heroBrand}
        >
          Irfan Shahzad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.16 }}
          className={`${styles.heroSub} mt-5`}
        >
          Building high-performing teams and production-ready SaaS, fintech,
          and AI products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.28 }}
          className="mt-9 flex flex-wrap gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md
              bg-cream text-ink font-sans font-semibold text-[0.95rem]
              hover:bg-white transition-colors"
          >
            View work
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md
              border border-cream/40 text-cream font-sans font-semibold text-[0.95rem]
              hover:border-cream hover:bg-cream/10 transition-colors"
          >
            Resume
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md
              text-cream/85 font-sans font-medium text-[0.95rem]
              hover:text-cream transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>

      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex
          flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-cream/50"
        />
      </motion.a>
    </section>
  );
};

export default Hero;
