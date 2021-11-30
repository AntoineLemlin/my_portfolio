import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
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
    show: (i) => ({ opacity: 1, transition: { delay: 1 * (i / 2) } }),
  };
  return (
    <header>
      <motion.ul variants={variants} initial="hidden" animate="show">
        <motion.li variants={item} initial="hidden" animate="show" custom={1}>
          <Link className="btn-nav" to="/">
            Accueil
          </Link>
        </motion.li>
        <motion.li variants={item} initial="hidden" animate="show" custom={2}>
          <Link className="btn-nav" to="/presentation">
            Qui suis-je?
          </Link>
        </motion.li>
        <motion.li variants={item} initial="hidden" animate="show" custom={3}>
          Projets
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          animate="show"
          custom={4}
          id="contact"
        >
          Contact
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default NavBar;
