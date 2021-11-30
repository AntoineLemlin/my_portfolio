import { motion } from "framer-motion";

const SideBar = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        default: { duration: 2 },
        delay: 3,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: (i) => ({ opacity: 1, transition: { delay: 1 * (i / 2) + 2 } }),
  };
  return (
    <motion.nav
      className="sidebar"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <motion.a
        className="active"
        href="#home"
        variants={item}
        initial="hidden"
        animate="show"
        custom={1}
      >
        <i className="fab fa-github"></i>
      </motion.a>
      <motion.a
        href="#news"
        variants={item}
        initial="hidden"
        animate="show"
        custom={2}
      >
        <i className="fab fa-linkedin-in"></i>
      </motion.a>
      <motion.a
        href="#contact"
        variants={item}
        initial="hidden"
        animate="show"
        custom={3}
      >
        <i className="far fa-envelope"></i>
      </motion.a>
    </motion.nav>
  );
};

export default SideBar;
