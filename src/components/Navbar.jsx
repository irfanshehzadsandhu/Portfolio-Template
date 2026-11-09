import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, socials } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-30
        bg-paper/90 backdrop-blur-md border-b border-line/70`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-4">
        <Link
          to="/"
          className="font-display text-ink text-[1.35rem] sm:text-[1.5rem] font-semibold tracking-tight"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          Irfan Shahzad
        </Link>

        <ul className="list-none hidden lg:flex flex-row items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`nav-link font-sans text-[0.9rem] tracking-wide ${
                  active === nav.title ? 'text-accent' : 'text-ink/80'
                } hover:text-accent transition-colors`}
                aria-current={active === nav.title ? 'true' : undefined}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] font-semibold text-cream bg-accent hover:bg-accentSoft
              px-4 py-2 rounded-md transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            onClick={() => setToggle(!toggle)}
            className="p-1"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-7 h-7 object-contain"
            />
          </button>

          {toggle && (
            <div
              className="absolute top-full left-0 right-0 bg-paper border-b border-line
                shadow-soft px-5 py-8 flex flex-col gap-6"
            >
              <ul className="list-none flex flex-col gap-5">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      className="font-display text-[1.75rem] text-ink hover:text-accent"
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-2 border-t border-line">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
