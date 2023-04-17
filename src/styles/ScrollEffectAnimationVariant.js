const cardVariants = {
    offscreen: {
      y: 100,
      opacity:0
    },
    onscreen: {
      y: 0,
      opacity:1,
      // rotate: -10,
      transition: {
        // type: "spring",
        bounce: 0.2,
        duration: 1
      }
    }
  };
  const textVariants = {
    offscreen: {
      // y: 100,
      opacity:0
    },
    onscreen: {
      // y: 0,
      opacity:1,
      // rotate: -10,
      transition: {
        // type: "spring",
        bounce: 0.2,
        duration: 1,
        delay:1
      }
    }
  };
  export { cardVariants, textVariants }

