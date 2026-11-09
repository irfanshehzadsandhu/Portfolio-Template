import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Certificates = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Credentials</p>
        <h2 className={`${styles.sectionHead} mt-3`}>HackerRank</h2>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          Verified certificates — open any credential to confirm it on
          HackerRank.
        </p>
      </motion.div>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, index) => (
          <motion.a
            key={cert.id}
            variants={fadeIn('up', 'tween', index * 0.07, 0.4)}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-line bg-cream/60
              hover:border-accent/40 hover:shadow-soft transition-all p-4 sm:p-5"
          >
            <img
              src={cert.image}
              alt={`${cert.title} HackerRank certificate badge`}
              className="w-full h-auto rounded-xl"
            />
            <div className="mt-4">
              <p className="font-sans font-semibold text-ink text-[1.05rem]">
                {cert.title}
              </p>
              <p className="mt-1 text-muted text-[0.85rem]">
                {cert.issuer}
                {cert.issued ? ` · ${cert.issued}` : ''}
              </p>
              <p className="mt-3 text-accent text-[0.85rem] font-semibold group-hover:text-accentSoft">
                Verify on HackerRank →
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, 'credentials');
