import { motion } from 'framer-motion';
import { styles } from '../styles';
import { stats } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Stats = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Impact by the numbers</p>
        <h2 className={`${styles.sectionHead} mt-3`}>Results</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 0.5)}
        className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10
          border-y border-line py-10 sm:py-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeIn('up', 'tween', index * 0.08, 0.45)}
          >
            <p className="font-display font-semibold text-ink text-[2.5rem] sm:text-[3rem] leading-none tracking-tight">
              {stat.value}
            </p>
            <p className="mt-3 font-sans font-semibold text-ink text-[0.85rem] uppercase tracking-[0.12em]">
              {stat.label}
            </p>
            <p className="mt-2 text-muted text-[0.9rem] leading-relaxed max-w-[200px]">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Stats, 'stats');
