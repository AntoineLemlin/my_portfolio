import { motion } from "framer-motion";
import DeckOfCards from "../components/DeckOfCards";
import HomeSection from "../components/HomeSection";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DeckOfCards />
      <HomeSection />
    </motion.div>
  );
};

export default HomePage;
