import PresentationSection from "../components/PresentationSection";

import { motion } from "framer-motion";
import Presentation3D from "../components/Presentation3D";
import { useLocation } from "react-router";

const Presentation = () => {
  const location = useLocation().pathname
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
       {location === "/presentation" ? <Presentation3D /> : ""} 
        <PresentationSection />
      </motion.div>
    </>
  );
};

export default Presentation;
