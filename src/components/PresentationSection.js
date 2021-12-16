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
          <motion.h2 custom={1} variants={item}>
            Who am I?
          </motion.h2>
          <motion.p custom={2} variants={item}>
            My name is Antoine Lemlin and I'm a Junior Web Developper from
            Belgium. Check below the technologies I know.
          </motion.p>
          <motion.ul className="list-techno" custom={3} variants={item}>
            <li>Javascript</li>
            <li>React.JS</li>
            <li>Three.JS</li>
            <li>PHP</li>
          </motion.ul>
        </div>
      </motion.section>
    </main>
  );
};

export default PresentationSection;
