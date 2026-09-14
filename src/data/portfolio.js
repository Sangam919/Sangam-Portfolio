// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const personal = {
  name: "Sangam Srivastav",
  role: "Data Engineer",
  tagline: "AI & Automation • Cloud Data Platforms",
  headline: "Final-year Computer Science student building intelligent, scalable data and AI systems.",
  bio: "I build data-driven and AI-powered systems that turn complex information into useful, scalable solutions. With hands-on experience across data engineering, AI/ML, and cloud platforms, I focus on production-grade architectures that solve real problems.",
  email: "sangamsri555@gmail.com",
  phone: "+91 9198880100",
  location: "India",
  linkedin: "https://www.linkedin.com/in/sangamsri/",
  github: "https://github.com/Sangam919",
  leetcode: "https://leetcode.com/u/Sangam919/",
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpg",
  avatarRunner: "/avatar-runner.jpg",
  techAvatar: "/tech-avatar.jpg",
  web3formsKey: "7410460d-dd8c-447c-aa92-359b60713baa",
};

export const navLinks = [
  "Home", "About", "Experience", "Projects", "Skills",
  "Certifications", "Education", "Contact"
];

export const aboutCards = [
  {
    icon: "🔧",
    title: "Data Engineering",
    desc: "ETL pipelines, data modeling, PySpark, Databricks — building systems that process data at scale.",
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    desc: "ML models, LLM integrations, AI automation — turning data into intelligent outcomes.",
  },
  {
    icon: "☁️",
    title: "Cloud Architecture",
    desc: "Azure Data Factory, ADLS, cloud-native platforms — designing distributed data infrastructure.",
  },
  {
    icon: "💻",
    title: "Software Engineering",
    desc: "Full-stack development, REST APIs, React — delivering clean, production-ready applications.",
  },
];

export const experience = [
  {
    title: "Chief Operating Officer (Student Organization)",
    company: "Zenvest LPU",
    type: "Part-time",
    location: "Jalandhar, Punjab, India · On-site",
    date: "Jan 2024 – Present",
    domain: "leadership",
    summary: "Led day-to-day operations, managed cross-functional teams, and coordinated technical events and student initiatives.",
    points: [
      "Led day-to-day operations, managed cross-functional teams, and coordinated the planning and execution of technical events, workshops, and student engagement initiatives.",
      "Collaborated with executive leadership to streamline organizational processes, oversee project delivery, and build industry and campus partnerships.",
      "Ensured high-impact execution of multi-disciplinary campus initiatives, elevating student participation and technical outreach.",
      "Strengthened competencies in leadership, strategic planning, project management, stakeholder coordination, and high-performance team collaboration."
    ],
    tech: ["Leadership", "Operations Management", "Strategic Planning", "Project Management", "Stakeholder Management"],
  },
  {
    title: "AI Engineer Intern",
    company: "Infosys Springboard",
    type: "Internship",
    date: "Feb 2026 – Apr 2026",
    domain: "ai",
    summary: "Contributed to developing an Azure-Based Demand Forecasting & Capacity Optimization System.",
    points: [
      "Worked as an AI/ML Engineer Intern through the Infosys Springboard program, contributing to an Azure-Based Demand Forecasting & Capacity Optimization System.",
      "Leveraged machine learning techniques for predictive demand forecasting, including data preprocessing, feature engineering, model training, and performance evaluation.",
      "Conducted hyperparameter tuning and validation to generate accurate infrastructure capacity recommendations.",
      "Gained hands-on experience with Microsoft Azure, predictive analytics, cloud technologies, and end-to-end AI/ML development for scalable data-driven systems."
    ],
    tech: ["Python", "Microsoft Azure", "Machine Learning", "Predictive Analytics", "Feature Engineering", "Data Analysis"],
  },
  {
    title: "Data Engineer Intern",
    company: "Celebal Technologies",
    type: "Internship",
    date: "Jun 2025 – Aug 2025",
    domain: "data",
    summary: "Contributed to industry-scale data pipelines, distributed processing, and cloud analytics.",
    points: [
      "Developed robust data processing and transformation workflows using Python and SQL for high-throughput enterprise data flows.",
      "Utilized Apache Spark for distributed data processing, dataset partitioning, and large-scale joins across disparate transactional and product datasets.",
      "Configured Apache Airflow DAGs for automated workflow orchestration, scheduling, and error-resilient pipeline execution.",
      "Integrated Azure Data Services for cloud-based data ingestion, lakehouse storage, and distributed processing.",
      "Built interactive data visualizations and business dashboards using Power BI to track real-time operational metrics.",
      "Strengthened production skills in ETL/ELT pipelines, distributed processing, cloud data engineering, and analytical workflows."
    ],
    tech: ["Python", "SQL", "Apache Spark", "Apache Airflow", "Azure Data Services", "Power BI", "ETL/ELT Pipelines"],
  },
  {
    title: "Full Stack Intern (ML)",
    company: "SSH SOFTTECH SOLUTION",
    type: "Internship",
    date: "May 2024 – Jul 2024",
    domain: "software",
    summary: "Built full-stack web applications and integrated Python-based ML predictive modules.",
    points: [
      "Contributed to developing full-stack web applications using HTML, CSS, JavaScript, React.js, Node.js, and Express.js.",
      "Architected REST APIs and integrated backend services with MySQL and MongoDB databases to deliver scalable web solutions.",
      "Developed Python-based machine learning modules for data analysis and predictive modeling using Pandas, NumPy, and Scikit-learn.",
      "Automated data processing workflows and integrated AI-driven intelligence features into client-facing web applications.",
      "Collaborated with cross-functional teams throughout the Agile software development lifecycle, including UI design, testing, debugging, and deployment."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Python", "Scikit-Learn", "MySQL", "MongoDB", "REST APIs", "Agile"],
  },
];

export const projects = [
  {
    id: "azure-transaction",
    title: "Azure Transaction Analytics Platform",
    featured: true,
    category: "Data Engineering",
    badge: "Lakehouse Architecture",
    image: "/projects/azure-transaction.jpg",
    description: "Production-grade Delta Lakehouse processing multi-stream financial transactions. Implements Medallion architecture (Bronze -> Silver -> Gold) with Azure Data Factory, Databricks, and ADLS Gen2.",
    problem: "Financial institutions struggle with siloed transactional logs, high pipeline latency, and the absence of a unified analytical lakehouse.",
    approach: "Engineered scalable PySpark ETL jobs in Azure Databricks with schema enforcement, Delta caching, and Z-Order indexing, reducing pipeline latency by 30%.",
    tech: ["Azure", "PySpark", "Data Factory", "Databricks", "Delta Lake", "ADLS Gen2"],
    github: "https://github.com/Sangam919/Azure-Transaction-Analytics-Platform",
    demo: "https://tinyurl.com/ycyv7xd8",
    color: "#22d3ee",
    architectureFlow: ["Raw Sources", "Bronze Stage", "Silver Cleansing", "Gold Aggregation", "Power BI / ML Serving"],
  },
  {
    id: "cloudcapacity",
    title: "CloudCapacity AI",
    featured: true,
    category: "Cloud & AI Analytics",
    badge: "ML Forecasting",
    image: "/projects/cloudcapacity.jpg",
    description: "AI-driven cloud capacity forecasting platform. Analyzes multi-cluster VM resource consumption patterns and predicts upcoming capacity bottlenecks using machine learning models.",
    problem: "Static cloud provisioning causes severe infrastructure overspending and unexpected capacity throttling under sudden peak loads.",
    approach: "Trained time-series regression and anomaly detection models on historical CPU/RAM telemetry, generating automated rightsizing recommendations and cost optimizations.",
    tech: ["Python", "Streamlit", "Machine Learning", "Scikit-Learn", "Cloud Analytics"],
    github: "https://github.com/Sangam919",
    demo: "https://cloudcapacity-ai.streamlit.app/",
    color: "#8b5cf6",
    architectureFlow: ["Metrics Telemetry", "Feature Engineering", "ML Regressor", "Capacity Gauge", "Interactive Dashboard"],
  },
  {
    id: "glioma",
    title: "Glioma Grading & Brain Tumor Classification",
    featured: true,
    category: "AI / Healthcare",
    badge: "Ensemble ML",
    image: "/projects/glioma.jpg",
    description: "Clinical genomics and neuroimaging diagnostic pipeline. Accurately classifies Low-Grade Glioma (LGG) and Glioblastoma Multiforme (GBM) using genetic mutation features.",
    problem: "Distinguishing aggressive brain tumor grades requires manual, time-consuming histopathology and genomic profiling with high error risk.",
    approach: "Designed an ensemble learning pipeline utilizing Random Forest and Gradient Boosting with feature importance ranking on IDH1 and TP53 mutation markers, achieving high ROC-AUC.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Ensemble Learning", "Streamlit", "Biomedical ML"],
    github: "https://github.com/Sangam919/Gliomo-Grading-Brain-Tumor-LGG-GBM-Analysis",
    demo: null,
    color: "#06b6d4",
    architectureFlow: ["Clinical Data", "Genomic Features", "Model Training", "Ensemble Voting", "Confidence Scoring"],
  },
  {
    id: "voice-assistant",
    title: "AI Voice Assistant & LLM Agent",
    featured: true,
    category: "Generative AI",
    badge: "Neural Speech & Agents",
    image: "/projects/voice-assistant.jpg",
    description: "Autonomous multimodal voice assistant powered by GPT-4 and neural TTS pipelines. Performs real-time natural language query execution, agent task planning, and voice synthesis.",
    problem: "Standard voice assistants lack context retention, dynamic planning capabilities, and expressive real-time audio interaction.",
    approach: "Integrated continuous speech recognition with streaming LLM token generation, prompt chaining, and neural text-to-speech for low-latency voice responses.",
    tech: ["Python", "OpenAI APIs", "Neural TTS", "SpeechRecognition", "FastAPI", "Prompt Engineering"],
    github: "https://github.com/Sangam919/AI-Voice-Assistant",
    demo: null,
    color: "#ec4899",
    architectureFlow: ["Voice Capture", "Whisper STT", "LLM Agent Planner", "Context Memory", "Neural TTS Audio"],
  },
  {
    id: "sales-command",
    title: "AI Sales Command Center",
    featured: true,
    category: "AI & Revenue Intelligence",
    badge: "Predictive Sales Engine",
    image: "/projects/sales-command.jpg",
    description: "Enterprise real-time sales intelligence and forecasting platform. Synthesizes revenue event streams, calculates predictive lead scoring matrices, and triggers automated risk alerts.",
    problem: "Sales leadership struggles with fragmented pipeline data, lagging revenue indicators, and late detection of stalled enterprise deals.",
    approach: "Built real-time event streaming pipelines with predictive scoring algorithms, deal health gauges, and automated conversion forecasting.",
    tech: ["Python", "FastAPI", "Machine Learning", "Data Analytics", "Streamlit", "PostgreSQL"],
    github: "https://github.com/Sangam919/AI-Sales-Command-Center",
    demo: null,
    color: "#10b981",
    architectureFlow: ["Event Stream", "Lead Scoring ML", "Anomaly Engine", "Executive Dashboard", "Action Automation"],
  },
];

export const skillCategories = [
  {
    id: "data-engineering",
    name: "Data Engineering & Lakehouse",
    icon: "⚡",
    color: "#22d3ee",
    description: "Distributed data pipelines, ETL/ELT architectures & Lakehouse optimization",
    skills: [
      { name: "PySpark", level: 95, tag: "Production", experience: "Databricks & Spark Jobs" },
      { name: "Apache Spark", level: 92, tag: "Production", experience: "Data Ingestion & Transformations" },
      { name: "Azure Databricks", level: 92, tag: "Production", experience: "Compute Clusters & Workflows" },
      { name: "Delta Lake", level: 90, tag: "Production", experience: "Medallion (Bronze/Silver/Gold)" },
      { name: "Azure Data Factory", level: 88, tag: "Production", experience: "Pipeline Orchestration & Triggers" },
      { name: "ADLS Gen2", level: 90, tag: "Production", experience: "Data Lake Storage & Hierarchical Namespace" },
      { name: "ETL / ELT Pipelines", level: 94, tag: "Production", experience: "Batch & Streaming Data Processing" },
      { name: "Data Modeling & Partitioning", level: 88, tag: "Advanced", experience: "Star Schema, Z-Ordering, Caching" },
      { name: "Advanced SQL", level: 95, tag: "Core", experience: "Complex Joins, CTEs, Window Functions" },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud Platforms & DevOps",
    icon: "☁️",
    color: "#3b82f6",
    description: "Cloud-native infrastructure, monitoring, and automated deployment systems",
    skills: [
      { name: "Microsoft Azure", level: 90, tag: "Production", experience: "ADF, Databricks, Storage, VMs" },
      { name: "Azure Synapse Analytics", level: 82, tag: "Advanced", experience: "Serverless SQL & Data Warehousing" },
      { name: "Docker", level: 80, tag: "Proficient", experience: "Containerization & Microservices" },
      { name: "Git & GitHub", level: 94, tag: "Core", experience: "Version Control, Branching & Actions" },
      { name: "Linux / Bash", level: 85, tag: "Proficient", experience: "Shell Scripting & Server Automation" },
      { name: "CI / CD Pipelines", level: 80, tag: "Proficient", experience: "Automated Build & Deployment" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "🧠",
    color: "#8b5cf6",
    description: "Statistical modeling, deep learning pipelines, and LLM agent orchestration",
    skills: [
      { name: "Machine Learning", level: 90, tag: "Advanced", experience: "Ensemble Learning, Classification, Regression" },
      { name: "Scikit-Learn", level: 92, tag: "Advanced", experience: "Model Training, Pipelines & Evaluation" },
      { name: "Pandas & NumPy", level: 95, tag: "Core", experience: "Data Cleansing, Aggregation & Vectorization" },
      { name: "Generative AI & LLMs", level: 88, tag: "Advanced", experience: "Prompt Engineering & Multi-Modal Agents" },
      { name: "Neural TTS & Speech", level: 85, tag: "Advanced", experience: "SpeechRecognition & Voice Synthesis" },
      { name: "Feature Engineering", level: 90, tag: "Advanced", experience: "Genomic & Clinical Mutation Profiling" },
    ],
  },
  {
    id: "programming-core",
    name: "Languages & Core Computer Science",
    icon: "💻",
    color: "#f59e0b",
    description: "Fundamental engineering foundations, data structures, and algorithms",
    skills: [
      { name: "Python", level: 96, tag: "Expert", experience: "Data Pipelines, Backend, Automation & ML" },
      { name: "SQL", level: 95, tag: "Expert", experience: "Data Extraction, Schema Design & Tuning" },
      { name: "C++", level: 88, tag: "Advanced", experience: "Data Structures & Competitive Programming" },
      { name: "Java", level: 84, tag: "Proficient", experience: "Object-Oriented Programming & Enterprise Core" },
      { name: "Data Structures & Algorithms", level: 92, tag: "250+ LeetCode", experience: "Trees, Graphs, DP, Heaps, HashMaps" },
      { name: "System Design & OOP", level: 86, tag: "Advanced", experience: "Scalability, Modularity & Design Patterns" },
    ],
  },
  {
    id: "databases-storage",
    name: "Databases & Storage Engines",
    icon: "🗄️",
    color: "#10b981",
    description: "Relational, analytical Lakehouse, and NoSQL storage systems",
    skills: [
      { name: "PostgreSQL", level: 90, tag: "Production", experience: "ACID Transactions, Indexing & Relations" },
      { name: "Delta Tables (Lakehouse)", level: 92, tag: "Production", experience: "Time Travel, ACID on ADLS Gen2" },
      { name: "MySQL", level: 88, tag: "Proficient", experience: "Query Optimization & CRUD Services" },
      { name: "MongoDB", level: 85, tag: "Certified", experience: "Associate Data Modeler Certification" },
      { name: "Vector Databases", level: 82, tag: "Advanced", experience: "ChromaDB & Semantic Similarity Search" },
    ],
  },
];

export const certifications = [
  { title: "MongoDB Associate Data Modeler", issuer: "MongoDB", color: "#10b981", link: null },
  { title: "Data Engineer Intern Certificate", issuer: "Celebal Technologies", color: "#3b82f6", link: "/certificates/Celebal Certificate.pdf" },
  { title: "NPTEL Cloud Computing", issuer: "IIT Kharagpur", color: "#06b6d4", link: "/certificates/Nptel Cloud Computing.pdf" },
  { title: "Build Generative AI Apps", issuer: "Udemy", color: "#f59e0b", link: "/certificates/Build Generative Al Apps Udemy.pdf" },
  { title: "AI for Beginners", issuer: "HP Foundation", color: "#8b5cf6", link: "/certificates/AI for Beginners hp life.pdf" },
  { title: "Ciperthon 2.0", issuer: "Cipherschools", color: "#22d3ee", link: "/certificates/Ciperthon 2.0.jpg" },
  { title: "Responsive Web Design", issuer: "FreeCodeCamp", color: "#94a3b8", link: "/certificates/Responsive design free code camp.pdf" },
];

export const educationData = {
  school: "Lovely Professional University",
  degree: "B.Tech Computer Science and Engineering",
  institution: "Lovely Professional University (LPU)",
  date: "2023 – 2027",
  expected: "Expected Graduation: 2027",
  year: "Graduating in 2027",
  cgpa: "CGPA: 7.69",
};

export const achievements = [
  { title: "250+ LeetCode Problems Solved", desc: "Top 10% globally with focus on advanced algorithms and data structures.", date: "Ongoing" },
  { title: "Gear-Up Hackathon — Top 50", desc: "Secured position among Top 50 teams at SIH Intra-University Level (200+ teams).", date: "2024" },
  { title: "3rd Runner-up, Concoction 2024", desc: "Tech Fusion by Upgrad Campus. Won cash prize for building a data-driven AI solution.", date: "2024" },
];

export const pipelineStages = [
  { label: "INGEST", sub: ["APIs", "Streams", "Files"], icon: "📥" },
  { label: "TRANSFORM", sub: ["PySpark", "ETL/ELT", "Cleaning"], icon: "⚙️" },
  { label: "PROCESS", sub: ["ML/AI", "Models", "LLMs"], icon: "🧠" },
  { label: "STORE", sub: ["Data Lake", "Delta", "Cloud"], icon: "🗄️" },
  { label: "ANALYZE", sub: ["Reports", "Insights", "Dashboards"], icon: "📊" },
  { label: "SERVE", sub: ["Users", "Apps", "APIs"], icon: "🚀" },
];

export const terminalCommands = {
  help: `Available commands:
  about       - Who am I
  skills      - Technical skills
  projects    - Featured projects
  experience  - Work experience
  contact     - Get in touch
  resume      - Download resume
  hire        - Open to opportunities
  whoami      - Identity
  neofetch    - System info
  ls          - List sections
  clear       - Clear terminal
  exit        - Close terminal`,
  whoami: "Sangam Srivastav — Data Engineer | AI & Automation | Cloud Data Platforms",
  neofetch: `  ┌─────────────────────────────┐
  │  ███████╗███████╗          │
  │  ██╔════╝██╔════╝          │
  │  ███████╗███████╗          │
  │  ╚════██║╚════██║          │
  │  ███████║███████║          │
  │  ╚══════╝╚══════╝          │
  └─────────────────────────────┘
  sangam@portfolio
  ─────────────────
  OS:      Web/React 18
  Engine:  Vite 5 + Three.js
  Shell:   Interactive Terminal v1.0
  Theme:   Dark Mode (always)
  Role:    Data Engineer
  Focus:   AI & Cloud Platforms
  Status:  Open to Work ✅
  LPU:     B.Tech CSE (2023-2027)`,
  hire: `  ╔═══════════════════════════════════╗
  ║   🚀 OPEN TO OPPORTUNITIES 🚀    ║
  ╠═══════════════════════════════════╣
  ║  Targeting:                       ║
  ║  • Data Engineer                  ║
  ║  • AI/ML Engineer                 ║
  ║  • Software Engineer              ║
  ║  • Cloud/Data Roles               ║
  ║                                   ║
  ║  📧 sangamsri555@gmail.com        ║
  ║  🔗 linkedin.com/in/sangamsri     ║
  ║  💻 github.com/Sangam919          ║
  ╚═══════════════════════════════════╝`,
  "sudo hire me": "Permission granted ✅ Sending offer letter to your inbox...",
  "rm -rf /": "Nice try 😏 System is protected.",
  coffee: `      ( (
       ) )
    ._______.
    |       |]
    \\       /
     \`-----'
   ☕ Here's your coffee!`,
  matrix: "__MATRIX_EFFECT__",
};
