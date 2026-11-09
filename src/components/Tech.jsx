import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { techGroups } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-accentMuted" />
          <p className="font-sans text-[0.8rem] sm:text-[0.85rem] uppercase tracking-[0.18em] text-accentMuted font-semibold">
            Toolkit
          </p>
        </div>
        <h2 className={styles.sectionHeadInverse}>Tools I use</h2>
        <p className="mt-4 max-w-2xl font-sans text-cream/65 text-[1rem] sm:text-[1.1rem] leading-[1.7]">
          Not an exhaustive list. Just the stuff that shows up most in my day to
          day.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {techGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn('up', 'tween', index * 0.08, 0.45)}
          >
            <h3 className="font-display text-cream text-[1.25rem] font-semibold">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5 border-t border-cream/15 pt-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-sans text-cream/75 text-[0.95rem] leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'stack');
