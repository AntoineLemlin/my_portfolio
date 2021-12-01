import ProjetSection from "../components/ProjetSection";

import { motion } from "framer-motion";

const Projets = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjetSection />
      </motion.div>
    </>
  );
};

export default Projets;
