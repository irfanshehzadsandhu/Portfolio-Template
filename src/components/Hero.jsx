import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socials } from '../constants';
import { irfan, snapdebt } from '../assets';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-paper">
      {/* Split stage */}
      <div
        className="absolute inset-0 z-0 sm:bg-hero bg-hero-mobile"
        aria-hidden="true"
      />

      {/* Left atmosphere — quiet paper, no clutter */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hero-elegant-mask"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-paper to-[#E7E4DC]" />
        <div
          className="absolute -top-[25%] left-[-15%] w-[75%] h-[75%] rounded-full
            bg-[radial-gradient(circle,rgba(15,92,92,0.11)_0%,transparent_68%)]"
        />
        <div className="absolute inset-0 opacity-[0.28] mix-blend-multiply hero-grain" />
      </div>

      {/* Product depth behind the portrait — real work as the visual idea */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute z-[5] pointer-events-none hidden sm:block
          right-[-8%] md:right-[-4%] lg:right-[2%] xl:right-[6%]
          top-[14%] md:top-[12%] w-[58vw] md:w-[50vw] lg:w-[46vw] max-w-[760px]"
        aria-hidden="true"
      >
        <div className="relative">
          <img
            src={snapdebt}
            alt=""
            className="w-full h-auto rounded-lg opacity-[0.38]
              shadow-[0_40px_80px_rgba(0,0,0,0.45)]
              [mask-image:linear-gradient(160deg,#000_35%,transparent_92%)]"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-night via-transparent to-transparent opacity-50" />
        </div>
      </motion.div>

      {/* Oversized ghost brand mark */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-[-4%] left-[-2%] z-[2] pointer-events-none select-none
          font-display font-semibold text-ink/[0.035] leading-none tracking-tight
          text-[28vw] hidden lg:block"
        aria-hidden="true"
      >
        IS
      </motion.p>

      {/* Copy */}
      <div
        className={`absolute inset-0 z-20 ${styles.paddingX}
          max-w-7xl mx-auto flex items-center`}
      >
        <div className="max-w-xl lg:max-w-[36rem] pt-10 sm:pt-6">
          <motion.div
            custom={0.05}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3 mb-6"
          >
            <span className="block h-px w-8 bg-accent" />
            <p className="font-sans text-accent text-[0.78rem] sm:text-[0.85rem] uppercase tracking-[0.22em] font-semibold">
              Engineering Manager
            </p>
          </motion.div>

          <motion.h1
            custom={0.14}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display font-semibold text-ink tracking-[-0.03em] leading-[0.92]"
          >
            <span className="block text-[3.1rem] xs:text-[3.8rem] sm:text-[5rem] lg:text-[5.75rem]">
              Irfan
            </span>
            <span className="block text-[3.1rem] xs:text-[3.8rem] sm:text-[5rem] lg:text-[5.75rem]">
              Shahzad
            </span>
          </motion.h1>

          <motion.p
            custom={0.28}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 font-sans text-muted text-[1.05rem] sm:text-[1.2rem] leading-relaxed max-w-[28rem]"
          >
            I lead teams that ship SaaS, fintech, and AI products — with clean
            architecture, calm delivery, and quality that holds in production.
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md
                bg-accent text-cream font-sans font-semibold text-[0.95rem]
                hover:bg-accentSoft transition-colors"
            >
              View selected work
            </a>
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md
                border border-ink/15 text-ink font-sans font-semibold text-[0.95rem]
                hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3.5
                text-muted font-sans font-medium text-[0.95rem]
                hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Portrait — placement preserved */}
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        className="absolute bottom-0 z-10 ml-[50vw]
          lg:ml-[72vw] md:ml-[58vw] xmd:ml-[60vw] 2xl:ml-[78vw]
          h-[55vh] sm:h-[90vh] md:h-[75vh] xl:h-[82vh]
          w-auto object-contain object-bottom"
        src={irfan}
        alt="Irfan Shahzad"
      />

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30
          flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-soft">
          Scroll
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </motion.a>
    </section>
  );
};

export default Hero;
