import { motion } from "framer-motion";
import Phone from '../components/Phone'
import ContactSection from '../components/ContactSection'


const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Phone />
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;
