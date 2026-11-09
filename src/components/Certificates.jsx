import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Certificates = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Credentials</p>
        <h2 className={`${styles.sectionHead} mt-3`}>Certificates</h2>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          Verified assessments in frontend and software engineering — click to
          view full size.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {certificates.map((cert, index) => (
          <motion.figure
            key={cert.id}
            variants={fadeIn('up', 'tween', index * 0.1, 0.45)}
            className="m-0"
          >
            <button
              type="button"
              onClick={() => setLightbox(cert)}
              className="group relative w-full text-left focus:outline-none
                focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                focus-visible:ring-offset-paper rounded-2xl"
            >
              <div
                className="relative flex items-center justify-center overflow-hidden
                  rounded-2xl bg-night px-5 py-8 sm:px-8 sm:py-10
                  min-h-[260px] sm:min-h-[300px] shadow-soft
                  transition-shadow duration-300 group-hover:shadow-lift"
              >
                <span
                  className="absolute top-4 left-4 z-10 font-sans text-[0.7rem]
                    uppercase tracking-[0.16em] font-semibold text-cream/90
                    bg-accent/90 px-3 py-1.5 rounded-full"
                >
                  {cert.issuer}
                </span>

                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="relative z-[1] w-full max-h-[220px] sm:max-h-[240px]
                    object-contain drop-shadow-lg
                    transition-transform duration-300 ease-out
                    group-hover:scale-[1.02]"
                />

                <span
                  className="absolute bottom-4 right-4 z-10 font-sans text-[0.75rem]
                    font-semibold text-cream/0 group-hover:text-cream/80
                    transition-colors duration-300"
                >
                  View →
                </span>
              </div>
            </button>

            <figcaption className="mt-5 px-1">
              <p className="font-display text-ink text-[1.35rem] sm:text-[1.5rem] font-semibold tracking-tight">
                {cert.title}
              </p>
              <p className="mt-1.5 text-muted text-[0.9rem]">
                {cert.issuer}
                {cert.issued ? ` · ${cert.issued}` : ''}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center
              bg-ink/60 backdrop-blur-md p-5 sm:p-8"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.title} certificate`}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20
                w-10 h-10 rounded-full bg-cream/95 text-ink
                flex items-center justify-center text-xl leading-none
                shadow-soft hover:bg-white transition-colors"
              aria-label="Close certificate"
            >
              ×
            </button>

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-3xl flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={`${lightbox.title} certificate full view`}
                className="w-full h-auto max-h-[78vh] object-contain
                  rounded-xl bg-cream shadow-lift"
              />
              <div className="text-center">
                <p className="font-display text-cream text-[1.15rem] sm:text-[1.25rem] font-semibold">
                  {lightbox.title}
                </p>
                <p className="text-cream/65 text-[0.85rem] mt-1">
                  {lightbox.issuer}
                  {lightbox.issued ? ` · ${lightbox.issued}` : ''}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Certificates, 'credentials');
