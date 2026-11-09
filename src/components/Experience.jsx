import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences, socials } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#EAE7E0',
      color: '#1A1C1B',
      boxShadow: 'none',
      border: '1px solid #D4D0C8',
      borderRadius: '16px',
    }}
    contentArrowStyle={{ borderRight: '7px solid #D4D0C8' }}
    date={
      <div>
        <h3 className="text-muted text-[1rem] font-semibold font-sans">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[55%] h-[55%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-ink text-[1.35rem] font-semibold font-display tracking-tight">
        {experience.title}
      </h3>
      <p
        className="text-accent text-[1.05rem] font-semibold font-sans"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    {experience.points?.length > 0 && (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-muted text-[0.9rem] pl-1 font-sans leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Career</p>
        <h2 className={`${styles.sectionHead} mt-3`}>Experience</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#EAE7E0',
              color: '#1A1C1B',
              boxShadow: 'none',
              border: '1px solid #D4D0C8',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{ borderRight: '7px solid #D4D0C8' }}
            iconStyle={{ background: '#0F5C5C' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <span className="text-cream text-[0.65rem] font-bold tracking-wide">
                  CV
                </span>
              </div>
            }
          >
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md
                bg-accent text-cream font-sans font-semibold text-[0.95rem]
                hover:bg-accentSoft transition-colors"
            >
              Download resume
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
