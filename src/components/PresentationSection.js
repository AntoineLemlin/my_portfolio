import { motion } from "framer-motion";

const PresentationSection = () => {
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
    show: (i) => ({ opacity: 1, transition: { delay: 1 * i } }),
  };
  return (
    <main className="presentation">
      <motion.section
        className="second"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <div className="text">
          <motion.h1 custom={1} variants={item}>
            Qui suis-je?
          </motion.h1>
          <motion.p custom={2} variants={item}>
            Je m'appelle Antoine Lemlin, j'ai 23 ans et je suis développeur web
            frontend Junior
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
};

export default PresentationSection;
