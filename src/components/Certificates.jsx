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
      <motion.div variants={textVariant()} className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-accent" />
          <p className={styles.sectionEyebrow}>Credentials</p>
        </div>
        <h2 className={styles.sectionHead}>Certificates</h2>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          Verified assessments in frontend and software engineering — click any
          certificate to view it full size.
        </p>
      </motion.div>

      <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-10">
        {certificates.map((cert, index) => (
          <motion.article
            key={cert.id}
            variants={fadeIn('up', 'tween', index * 0.08, 0.45)}
            className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start border-t border-line pt-8 sm:pt-10"
          >
            <div className="lg:col-span-4 lg:pt-1">
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.16em] text-soft">
                {String(index + 1).padStart(2, '0')}
                <span className="mx-2 text-line">·</span>
                {cert.issuer}
              </p>
              <h3 className="mt-2.5 font-display font-semibold text-ink text-[1.65rem] sm:text-[1.9rem] leading-tight tracking-tight">
                {cert.title}
              </h3>
              {cert.issued && (
                <p className="mt-3 font-sans text-muted text-[0.92rem] leading-relaxed">
                  {cert.issued}
                </p>
              )}
              <button
                type="button"
                onClick={() => setLightbox(cert)}
                className="mt-5 inline-flex items-center gap-2 font-sans font-semibold text-[0.92rem]
                  text-accent hover:text-accentSoft transition-colors"
              >
                View certificate
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="lg:col-span-8">
              <button
                type="button"
                onClick={() => setLightbox(cert)}
                className="group w-full text-left rounded-xl overflow-hidden border border-line
                  bg-cream shadow-soft hover:shadow-lift transition-shadow duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
                  focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <div className="bg-[#f7f5f0] px-3 py-3 sm:px-5 sm:py-5 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain
                      transition-transform duration-300 ease-out group-hover:scale-[1.01]"
                  />
                </div>
              </button>
            </div>
          </motion.article>
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
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
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
