import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const FeaturedProject = ({ project }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
    className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-line bg-night shadow-lift"
  >
    <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
      <img
        src={project.image}
        alt={`${project.name} product screenshot`}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>

    <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-night text-cream">
      <div>
        <p className="font-sans text-accentMuted text-[0.75rem] uppercase tracking-[0.16em]">
          {project.role}
        </p>
        <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-[2.15rem] leading-tight">
          {project.name}
        </h2>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-soft">
              Problem
            </p>
            <p className="mt-2 text-cream/80 text-[0.95rem] leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-soft">
              Outcome
            </p>
            <p className="mt-2 text-cream/80 text-[0.95rem] leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="text-[0.75rem] uppercase tracking-wide text-accentMuted
                border border-cream/15 px-3 py-1 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-2 font-sans font-semibold
          text-cream border-b border-accentMuted pb-1 hover:text-accentMuted transition-colors"
      >
        Explore live product
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </motion.div>
);

const ProjectThumbnail = ({ project, isActive, onSelect, index }) => (
  <motion.button
    type="button"
    variants={fadeIn('up', 'tween', index * 0.05, 0.4)}
    onClick={() => onSelect(project.id)}
    aria-label={`View ${project.name}`}
    aria-pressed={isActive}
    className={`relative flex-shrink-0 snap-center overflow-hidden rounded-xl
      transition-all duration-300 ease-out
      w-[92px] h-[104px] xs:w-[104px] xs:h-[116px] sm:w-[124px] sm:h-[136px]
      ${
        isActive
          ? 'ring-2 ring-accent opacity-100 scale-[1.02]'
          : 'opacity-55 hover:opacity-85'
      }`}
  >
    <img
      src={project.image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
    <span
      className="absolute bottom-0 left-0 right-0 z-10 px-2 py-2
        bg-gradient-to-t from-[rgba(20,24,22,0.92)] to-transparent
        text-cream font-sans text-[10px] sm:text-[11px] uppercase tracking-wide
        text-center leading-tight line-clamp-2"
    >
      {project.name}
    </span>
  </motion.button>
);

const Projects = () => {
  const [active, setActive] = useState(projects[0]?.id ?? 'project-1');
  const activeProject = projects.find((p) => p.id === active) ?? projects[0];

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionEyebrow}>Case studies</p>
        <h2 className={`${styles.sectionHead} mt-3`}>Selected work</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.12, 0.5)}
        className="mt-10 sm:mt-12"
      >
        <AnimatePresence mode="wait">
          <FeaturedProject key={activeProject.id} project={activeProject} />
        </AnimatePresence>

        <div className="mt-6 sm:mt-8">
          <p className="text-muted text-[0.75rem] uppercase tracking-[0.14em] mb-3">
            Select a project
          </p>
          <div className="projects-thumbnails flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth">
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
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
