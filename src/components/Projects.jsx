import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const BrowserFrame = ({ project, index }) => (
  <div className="overflow-hidden rounded-xl border border-line bg-[#1a1c1b] shadow-soft">
    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/10 bg-[#222524]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <p className="ml-2 flex-1 truncate rounded-md bg-black/25 px-3 py-1 font-sans text-[0.7rem] text-cream/45">
        {project.demo.replace(/^https?:\/\//, '')}
      </p>
      <span className="font-display text-cream/35 text-[0.85rem]">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="bg-[#0f1110] max-h-[420px] sm:max-h-[460px] overflow-hidden">
      <motion.img
        key={`${project.id}-image`}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        src={project.image}
        alt={`${project.name} product screenshot`}
        className="w-full h-auto object-contain object-top"
      />
    </div>
  </div>
);

const FeaturedProject = ({ project, index }) => (
  <motion.article
    key={project.id}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="grid lg:grid-cols-12 gap-7 lg:gap-10 items-start"
  >
    <div className="lg:col-span-7">
      <BrowserFrame project={project} index={index} />
    </div>

    <div className="lg:col-span-5 lg:pt-1">
      <p className="font-sans text-accent text-[0.72rem] uppercase tracking-[0.18em] font-semibold">
        {project.role}
      </p>
      <h3 className="mt-2.5 font-display font-semibold text-ink text-[1.85rem] sm:text-[2.15rem] leading-[1.12] tracking-tight">
        {project.name}
      </h3>

      <div className="mt-6 space-y-4 border-t border-line pt-5">
        <div>
          <p className="font-sans text-[0.68rem] uppercase tracking-[0.16em] text-soft">
            Problem
          </p>
          <p className="mt-1.5 font-sans text-muted text-[0.92rem] leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="font-sans text-[0.68rem] uppercase tracking-[0.16em] text-soft">
            Outcome
          </p>
          <p className="mt-1.5 font-sans text-muted text-[0.92rem] leading-relaxed">
            {project.outcome}
          </p>
        </div>
      </div>

      <p className="mt-5 font-sans text-[0.8rem] text-soft tracking-wide">
        {project.stack.join(' · ')}
      </p>

      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 font-sans font-semibold text-[0.92rem]
          text-accent hover:text-accentSoft transition-colors"
      >
        Explore live product
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </motion.article>
);

const Projects = () => {
  const [active, setActive] = useState(projects[0]?.id ?? 'project-1');
  const activeIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === active),
  );
  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <div>
      <motion.div variants={textVariant()} className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-accent" />
          <p className={styles.sectionEyebrow}>Case studies</p>
        </div>
        <h2 className={styles.sectionHead}>Selected work</h2>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          Products I helped design, build, and deliver — from fintech platforms
          to AI tooling.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.1, 0.5)}
        className="mt-8 sm:mt-10"
      >
        <div
          className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 mb-8
            border-b border-line projects-thumbnails"
          role="tablist"
          aria-label="Projects"
        >
          {projects.map((project, index) => {
            const isActive = active === project.id;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(project.id)}
                className={`relative flex-shrink-0 px-3 sm:px-4 pb-3.5 pt-1 text-left
                  transition-colors duration-300
                  ${isActive ? 'text-ink' : 'text-soft hover:text-muted'}`}
              >
                <span className="block font-sans text-[0.65rem] uppercase tracking-[0.14em] mb-1 opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`block font-display text-[0.95rem] sm:text-[1.1rem] leading-tight whitespace-nowrap
                    ${isActive ? 'font-semibold' : 'font-medium'}`}
                >
                  {project.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="project-tab-underline"
                    className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-0 h-[2px] bg-accent"
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <FeaturedProject
            key={activeProject.id}
            project={activeProject}
            index={activeIndex}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
