import { motion } from "framer-motion";

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
    <main className="contact">
      <motion.section
        id="one"
        className="fourth"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 custom={1} variants={item}>
          Contact
        </motion.h2>
        <motion.p custom={2} variants={item}>
          Web Developper Frontend Junior
        </motion.p>
      </motion.section>
    </main>
  );
};

export default HomeSection;
