import { motion } from 'framer-motion';
import { styles } from '../styles';
import { capabilities } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Introduction</p>
        <h2 className={`${styles.sectionHead} mt-3`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 0.55)}
        className={`${styles.body} mt-6 max-w-3xl`}
      >
        Engineering Manager and full-stack developer with 10+ years leading
        teams and shipping scalable SaaS, fintech, and enterprise products. I
        combine hands-on strength in Next.js, React, TypeScript, Node.js,
        microservices, AWS, and CI/CD with practical AI delivery — RAG
        pipelines, vector retrieval, and Hugging Face LLM workflows. I hire,
        mentor, and operationalize engineering so delivery stays fast and
        quality stays high.
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
