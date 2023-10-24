import { Variants } from "framer-motion";

export const AnimateFromRight: Variants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};
export const AnimateFromLeft: Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

export const AnimateFromBottom: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
      delay: 0.3,
    },
  },
};
export const AnimateFromTop: Variants = {
  offscreen: {
    y: -300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
      delay: 0.3,
    },
  },
};

export const AnimateFromLeft1: Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
      delay: 0.3,
    },
  },
};
