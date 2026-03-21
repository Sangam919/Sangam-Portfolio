import { motion } from 'framer-motion';

const About = () => {
  const jsonProfile = {
    "name": "Sangam Srivastav",
    "role": "Data Engineer & AI Dev",
    "university": "LPU (2023-2027)",
    "focus": [
      "Data Engineering",
      "Machine Learning",
      "Distributed Systems",
      "AI Applications"
    ],
    "experience": "Ex-Data Intern @ Celebal Tech",
    "currently": "Focusing on Full-time Placements & AI Research",
    "leetcode": "250+ Solved (Top 10%)",
    "skills": {
      "data": ["Spark", "Databricks", "Azure", "SQL"],
      "ai": ["LLMs", "OpenAI API", "PyTorch"]
    },
    "openToWork": true
  };

  const techPills = ["Data Engineering", "Machine Learning", "Apache Spark", "Azure Cloud", "Python", "Problem Solving", "SQL", "Databricks"];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About <span className="highlight-me">Me</span></h2>
        <p className="section-subtitle-custom">A passionate technologist at the intersection of Data Engineering and AI</p>
      </div>

      <div className="about-v2-container">
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bio-summary">
            <p>
              I'm <span className="highlight-text-v2">Sangam Srivastav</span>, a B.Tech Computer Science student at <span className="highlight-text-blue">Lovely Professional University</span>, Jalandhar (Class of 2027).
            </p>
            <p>
              My journey spans <span className="highlight-text-v2">Data Engineering</span> — building scalable ETL pipelines with Apache Spark & Databricks — to <span className="highlight-text-v2">Artificial Intelligence</span> — developing ML models for brain tumor classification and AI voice assistants powered by OpenAI.
            </p>
            <p>
              Transitioning from a high-impact internship at <span className="highlight-text-blue">Celebal Technologies</span>, where I architected production-grade ETL pipelines on Azure, I'm now focused on leveraging my expertise for <span className="highlight-text-v2">core placements</span>. My journey centers on mastering advanced data paradigms and building AI-driven solutions that solve complex, real-world problems.
            </p>
            <p>
              When I'm not coding, I'm solving DSA problems on LeetCode (250+!), exploring ML systems, or working on AI-powered data platforms.
            </p>
          </div>

          <div className="about-pills-v2">
            {techPills.map((pill, i) => (
              <span key={i} className="about-pill-v2">{pill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="terminal-window-v2">
            <div className="terminal-header-v2">
              <div className="terminal-dots-v2">
                <span className="dot-v2 red"></span>
                <span className="dot-v2 yellow"></span>
                <span className="dot-v2 green"></span>
              </div>
              <div className="terminal-title-v2">sangam.json</div>
            </div>
            <div className="terminal-body-v2">
              <pre>
                <code>
                  <span className="json-key">{"{"}</span>
                  <br />
                  {Object.entries(jsonProfile).map(([key, value], index, array) => (
                    <div key={key} style={{ paddingLeft: '20px' }}>
                      <span className="json-key">"{key}"</span>: {
                        Array.isArray(value) ? (
                          <span>
                            <span className="json-symbol">[</span>
                            {value.map((v, i) => (
                              <div key={i} style={{ paddingLeft: '20px' }}>
                                <span className="json-string">"{v}"</span>{i < value.length - 1 ? ',' : ''}
                              </div>
                            ))}
                            <span className="json-symbol">]</span>
                          </span>
                        ) : (value && typeof value === 'object') ? (
                          <span>
                            <span className="json-symbol">{"{"}</span>
                            {Object.entries(value).map(([subK, subV], subI, subArr) => (
                              <div key={subK} style={{ paddingLeft: '20px' }}>
                                <span className="json-key">"{subK}"</span>: [
                                  {subV.map((sv, si) => (
                                    <span key={si}>
                                      <span className="json-string">"{sv}"</span>{si < subV.length - 1 ? ', ' : ''}
                                    </span>
                                  ))}
                                ]{subI < subArr.length - 1 ? ',' : ''}
                              </div>
                            ))}
                            <span className="json-symbol">{"}"}</span>
                          </span>
                        ) : typeof value === 'string' ? (
                          <span className="json-string">"{value}"</span>
                        ) : (
                          <span className="json-value">{String(value)}</span>
                        )
                      }{index < array.length - 1 ? ',' : ''}
                    </div>
                  ))}
                  <span className="json-key">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
