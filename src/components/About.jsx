import { motion } from 'framer-motion';
import { styles } from '../styles';
import { capabilities } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-accent" />
          <p className={styles.sectionEyebrow}>About</p>
        </div>
        <h2 className={styles.sectionHead}>A bit about me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 0.55)}
        className={`${styles.body} mt-6 max-w-3xl`}
      >
        I have spent a little over ten years building software, and the last
        several of those leading teams. These days I am an Engineering Manager
        at Carbonteq. I care a lot about getting the right people in the room,
        keeping delivery sane, and not losing touch with the code. Most of the
        products I have worked on are in SaaS and fintech. Lately I have also
        been building with LLMs where they actually help.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-line pt-10">
        {capabilities.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn('up', 'tween', index * 0.1, 0.45)}
          >
            <p className="font-display text-[1.35rem] text-ink font-semibold leading-snug">
              {item.title}
            </p>
            <p className="mt-3 text-muted text-[0.95rem] leading-relaxed">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
