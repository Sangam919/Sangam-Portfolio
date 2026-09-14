import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
