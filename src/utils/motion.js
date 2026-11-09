export const textVariant = (delay = 0) => ({
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.55, delay },
  },
});

export const fadeIn = (direction = '', _type, delay = 0, duration = 0.5) => ({
  hidden: {
    x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
    y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', delay, duration },
  },
});

export const slideIn = (direction, _type, delay = 0, duration = 0.55) => ({
  hidden: {
    x: direction === 'left' ? '-40%' : direction === 'right' ? '40%' : 0,
    y: direction === 'up' ? '30%' : direction === 'down' ? '30%' : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', delay, duration },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
