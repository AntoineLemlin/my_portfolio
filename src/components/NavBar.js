import { motion } from "framer-motion";

const NavBar = () => {
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
    show: (i) => ({ opacity: 1, transition: { delay: 1 * (i / 2) + 3 } }),
  };
  return (
    <header>
      <motion.ul variants={variants} initial="hidden" animate="show">
        <motion.li variants={item} initial="hidden" animate="show" custom={1}>
          Qui suis-je?
        </motion.li>
        <motion.li variants={item} initial="hidden" animate="show" custom={2}>
          Projets
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          animate="show"
          custom={3}
          id="contact"
        >
          Contact
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default NavBar;
