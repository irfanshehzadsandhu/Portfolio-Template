import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const FeaturedProject = ({ project }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative w-full h-[380px] xs:h-[420px] md:h-[480px] rounded-[24px] overflow-hidden card-shadow"
    >
      <div className="absolute inset-0 z-10 bg-jetLight/40" />
      <img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8
          bg-gradient-to-t from-[rgba(20,20,20,0.95)] via-[rgba(20,20,20,0.75)] to-transparent"
      >
        <h2
          className="font-bold sm:text-[32px] text-[22px] text-timberWolf
            uppercase font-beckman tracking-[1px]"
        >
          {project.name}
        </h2>
        <p
          className="text-silver sm:text-[15px] text-[13px] mt-2 max-w-2xl
            sm:leading-[24px] leading-[20px] font-poppins tracking-[0.5px]"
        >
          {project.description}
        </p>
        <button
          type="button"
          className="live-demo flex justify-between sm:text-[16px] text-[14px]
            text-timberWolf font-bold font-beckman items-center py-4 pl-2 pr-3
            whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px]
            rounded-[10px] glassmorphism sm:mt-5 mt-4 hover:bg-battleGray
            hover:text-eerieBlack transition duration-200 ease-in-out"
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.demo, '_blank', 'noopener,noreferrer');
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <img
            src={hovering ? pineappleHover : pineapple}
            alt=""
            className="sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
          />
          EXPLORE
        </button>
      </motion.div>
    </motion.div>
  );
};

const ProjectThumbnail = ({ project, isActive, onSelect, index }) => (
  <motion.button
    type="button"
    variants={fadeIn('up', 'spring', index * 0.08, 0.6)}
    onClick={() => onSelect(project.id)}
    aria-label={`View ${project.name}`}
    aria-pressed={isActive}
    className={`relative flex-shrink-0 snap-center rounded-[16px] overflow-hidden
      card-shadow transition-all duration-300 ease-out
      w-[88px] h-[100px] xs:w-[100px] xs:h-[112px] sm:w-[120px] sm:h-[130px]
      ${
        isActive
          ? 'ring-2 ring-timberWolf scale-[1.02] opacity-100'
          : 'opacity-50 hover:opacity-80 scale-100'
      }`}
  >
    <img
      src={project.image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
    <motion.div
      className={`absolute inset-0 ${
        isActive ? 'bg-transparent' : 'bg-night/50'
      }`}
    />
    <span
      className="absolute bottom-0 left-0 right-0 z-10 px-2 py-2
        bg-gradient-to-t from-[rgba(20,20,20,0.9)] to-transparent
        text-timberWolf font-beckman text-[9px] xs:text-[10px] sm:text-[11px]
        uppercase tracking-wide text-center leading-tight line-clamp-2"
    >
      {project.name}
    </span>
  </motion.button>
);

const Projects = () => {
  const [active, setActive] = useState(projects[0]?.id ?? 'project-1');
  const activeProject =
    projects.find((p) => p.id === active) ?? projects[0];

  return (
    <motion.div variants={textVariant()} className="-mt-[6rem]">
      <motion.div variants={fadeIn('up', 'spring', 0.05, 0.6)}>
        <p className={styles.sectionSubText}>Case Studies</p>
        <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.15, 0.75)}
        className={`${styles.innerWidth} mx-auto mt-12 sm:mt-14`}
      >
        <AnimatePresence mode="wait">
          <FeaturedProject key={activeProject.id} project={activeProject} />
        </AnimatePresence>

        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 0.75)}
          className="mt-6 sm:mt-8"
        >
          <p className="text-taupe text-[12px] sm:text-[13px] uppercase tracking-wider font-poppins mb-3">
            Select a project
          </p>
          <div
            className="projects-thumbnails flex gap-3 sm:gap-4 overflow-x-auto pb-2
              snap-x snap-mandatory scroll-smooth"
          >
            {projects.map((project, index) => (
              <ProjectThumbnail
                key={project.id}
                project={project}
                index={index}
                isActive={active === project.id}
                onSelect={setActive}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, 'projects');
