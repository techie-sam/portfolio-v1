const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.2,
      duration: 1,
    },
  },
};
const textVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      bounce: 0.2,
      duration: 1,
      delay: 1,
    },
  },
};
export { cardVariants, textVariants };
