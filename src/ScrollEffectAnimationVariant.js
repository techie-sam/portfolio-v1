const cardVariants = {
    offscreen: {
      y: 100,
      opacity:0
    },
    onscreen: {
      opacity:1,
      y: 0,
      // rotate: -10,
      transition: {
        // type: "spring",
        bounce: 0.9,
        duration: 0.8
      }
    }
  };
  export { cardVariants }