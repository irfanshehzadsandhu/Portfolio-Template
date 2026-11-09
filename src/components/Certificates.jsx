import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Certificates = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Credentials</p>
        <h2 className={`${styles.sectionHead} mt-3`}>HackerRank</h2>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          Certificate images from HackerRank — click any one to view it full size.
        </p>
      </motion.div>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
        {certificates.map((cert, index) => (
          <motion.button
            key={cert.id}
            type="button"
            variants={fadeIn('up', 'tween', index * 0.07, 0.4)}
            onClick={() => setLightbox(cert)}
            className="group text-left rounded-2xl border border-line bg-cream/60
              hover:border-accent/40 hover:shadow-soft transition-all p-3 sm:p-4
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="overflow-hidden rounded-xl bg-surface">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full h-auto object-contain max-h-[280px] mx-auto
                  group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="mt-4 px-1">
              <p className="font-sans font-semibold text-ink text-[1.05rem]">
                {cert.title}
              </p>
              <p className="mt-1 text-muted text-[0.85rem]">
                {cert.issuer}
                {cert.issued ? ` · ${cert.issued}` : ''}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center
              bg-ink/70 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.title} certificate`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto
                rounded-2xl bg-cream border border-line shadow-lift p-3 sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-sans font-semibold text-ink">
                    {lightbox.title}
                  </p>
                  <p className="text-muted text-[0.85rem]">{lightbox.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="text-muted hover:text-ink text-2xl leading-none px-1"
                  aria-label="Close certificate"
                >
                  ×
                </button>
              </div>
              <img
                src={lightbox.image}
                alt={`${lightbox.title} certificate full view`}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Certificates, 'credentials');
