import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { recommendations } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Recommendations = () => {
  const [active, setActive] = useState(0);
  const current = recommendations[active];

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Social proof</p>
        <h2 className={`${styles.sectionHead} mt-3`}>Recommendations</h2>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          Selected LinkedIn recommendations.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.12, 0.5)}
        className="mt-10 sm:mt-12"
      >
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative border-l-2 border-accent pl-6 sm:pl-8"
          >
            <p className="font-display text-ink text-[1.35rem] sm:text-[1.65rem] lg:text-[1.85rem] leading-snug">
              &ldquo;{current.quote}&rdquo;
            </p>

            <footer className="mt-8 flex flex-wrap items-center gap-4">
              {current.image ? (
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover object-center
                    border border-line shrink-0"
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-full bg-accent text-cream flex items-center
                    justify-center font-sans font-semibold text-sm shrink-0"
                  aria-hidden="true"
                >
                  {current.initials}
                </div>
              )}
              <div>
                <p className="font-sans font-semibold text-ink">{current.name}</p>
                <p className="text-muted text-[0.9rem]">{current.title}</p>
                <p className="text-soft text-[0.8rem] mt-0.5">
                  {current.relationship}
                </p>
              </div>
              <a
                href={current.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto font-sans text-[0.85rem] font-semibold text-accent
                  hover:text-accentSoft transition-colors"
              >
                View on LinkedIn →
              </a>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-2">
          {recommendations.map((rec, index) => (
            <button
              key={rec.id}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`px-4 py-2 rounded-full text-[0.8rem] font-sans transition-colors
                ${
                  active === index
                    ? 'bg-accent text-cream'
                    : 'bg-surface text-muted hover:text-ink border border-line'
                }`}
            >
              {rec.name.split(' ')[0]}
            </button>
          ))}
        </div>

        <p className="mt-6 text-soft text-[0.8rem]">
          Recommendations from LinkedIn
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Recommendations, 'recommendations');
