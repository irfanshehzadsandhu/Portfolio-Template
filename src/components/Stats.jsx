import { motion } from 'framer-motion';
import { styles } from '../styles';
import { stats } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const StatCard = ({ value, label, detail, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.12, 0.65)}
    className="flex-1 min-w-[140px] sm:min-w-[160px]"
  >
    <p className="font-mova font-extrabold text-eerieBlack text-[40px] sm:text-[48px] md:text-[56px] leading-none tracking-tight">
      {value}
    </p>
    <p className="mt-3 text-jetLight font-beckman font-bold text-[14px] sm:text-[16px] uppercase tracking-[1px]">
      {label}
    </p>
    <p className="mt-2 text-taupe text-[13px] sm:text-[14px] font-poppins leading-[20px] max-w-[200px]">
      {detail}
    </p>
  </motion.div>
);

const Stats = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Impact by the numbers</p>
        <h2 className={styles.sectionHeadText}>Results.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10
          border-t border-b border-timberWolf/40 py-10 sm:py-12"
      >
        {stats.map((stat, index) => (
          <StatCard key={stat.label} index={index} {...stat} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Stats, 'stats');
