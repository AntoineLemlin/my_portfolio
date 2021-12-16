import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  console.log(location);
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
          <Link
            className={location === "/" ? "disabled-link btn-nav" : "btn-nav"}
            to="/"
          >
            Home
          </Link>
        </motion.li>
        <motion.li variants={item} initial="hidden" animate="show" custom={2}>
          <Link
            className={
              location === "/presentation" ? "disabled-link btn-nav" : "btn-nav"
            }
            to="/presentation"
          >
            Who am I?
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          animate="show"
          custom={4}
          id="contact"
        >
          <Link
            className={
              location === "/projets"
                ? "disabled-link btn-nav"
                : "btn-nav-contact"
            }
            to="/projets"
          >
            Projects
          </Link>
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default NavBar;
