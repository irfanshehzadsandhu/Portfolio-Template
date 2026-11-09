import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { socials } from '../constants';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showThankYou, setShowThankYou] = useState(false);
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);
      setForm({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  return (
    <>
      {showThankYou && (
        <div className="z-50 fixed inset-0 bg-ink/40 flex justify-center items-center backdrop-blur-sm px-4">
          <div className="relative w-full max-w-md bg-cream rounded-2xl border border-line shadow-lift p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-ink text-[1.5rem] font-semibold">
                  Thank you
                </h3>
                <p className="mt-2 text-muted text-[0.95rem] leading-relaxed">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <button
                type="button"
                className="text-muted hover:text-ink text-xl leading-none"
                onClick={() => setShowThankYou(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="xl:flex-row flex-col flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn('left', 'tween', 0.15, 0.55)}
          className="flex-[0.75] bg-night rounded-2xl p-7 sm:p-9"
        >
          <p className="font-sans text-accentMuted text-[0.8rem] uppercase tracking-[0.18em] font-semibold">
            Get in touch
          </p>
          <h3 className={`${styles.sectionHeadInverse} mt-3`}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-5 font-sans"
          >
            <label className="flex flex-col gap-2">
              <span className="text-cream/80 text-[0.9rem] font-medium">
                Your name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-ink/40 border border-cream/10 py-3.5 px-4
                  placeholder:text-soft text-cream rounded-lg outline-none
                  focus:border-accentMuted transition-colors"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-300 text-sm"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-cream/80 text-[0.9rem] font-medium">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-ink/40 border border-cream/10 py-3.5 px-4
                  placeholder:text-soft text-cream rounded-lg outline-none
                  focus:border-accentMuted transition-colors"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-300 text-sm"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-cream/80 text-[0.9rem] font-medium">
                Message
              </span>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help?"
                className="bg-ink/40 border border-cream/10 py-3.5 px-4
                  placeholder:text-soft text-cream rounded-lg outline-none
                  focus:border-accentMuted transition-colors resize-none"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-300 text-sm"
              />
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-2 inline-flex w-fit items-center justify-center px-7 py-3.5
                rounded-md bg-accent text-cream font-semibold text-[0.95rem]
                hover:bg-accentSoft transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 0.55)}
          className="flex-1 flex flex-col justify-end gap-6 pb-2"
        >
          <p className={`${styles.body} max-w-md`}>
            Open to engineering leadership roles, advisory conversations, and
            product collaborations in SaaS, fintech, and AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-accent hover:text-accentSoft"
            >
              LinkedIn
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-accent hover:text-accentSoft"
            >
              GitHub
            </a>
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-accent hover:text-accentSoft"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
