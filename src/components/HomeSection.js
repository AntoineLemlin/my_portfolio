import { motion } from "framer-motion";

import SideBar from "./SideBar";

const HomeSection = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        default: { duration: 2 },
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: (i) => ({ opacity: 1, transition: { delay: 1 * i + 1 } }),
  };
  return (
    <main>
      <SideBar />
      <motion.section
        id="one"
        className="first"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 custom={1} variants={item}>
          Antoine Lemlin
        </motion.h1>
        <motion.p custom={2} variants={item}>
          Web Developper Frontend Junior
        </motion.p>
      </motion.section>
    </main>
  );
};

export default HomeSection;
