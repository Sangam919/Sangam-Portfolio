import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { pipelineStages } from '../data/portfolio';

const DataPipeline = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section id="pipeline" className="pipeline-section" ref={sectionRef}>
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How I <span className="gradient-text">Engineer</span> Data
        </motion.h2>
        <div className="section-line" />
      </div>

      <div className="pipeline-container">
        {/* Progress line */}
        <div className="pipeline-track">
          <motion.div className="pipeline-progress" style={{ width: progressWidth }} />
        </div>

        <div className="pipeline-stages">
          {pipelineStages.map((stage, i) => (
            <motion.div
              key={i}
              className="pipeline-stage"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pipeline-node">
                <span className="pipeline-icon">{stage.icon}</span>
                <div className="pipeline-pulse" />
              </div>
              <h3 className="pipeline-label">{stage.label}</h3>
              <div className="pipeline-subs">
                {stage.sub.map((s, j) => (
                  <span key={j} className="pipeline-sub">{s}</span>
                ))}
              </div>
              {i < pipelineStages.length - 1 && (
                <div className="pipeline-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Data particles animation */}
        <div className="pipeline-particles" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="data-particle"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataPipeline;
