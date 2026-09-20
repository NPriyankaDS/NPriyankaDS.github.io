// All site content lives here. To add, remove, or edit a project, skill,
// or role, edit this file only — every page updates automatically.

export const profile = {
  name: 'N Priyanka',
  role: 'AI Engineer & ML Collaborator',
  tagline: 'Building AI Systems for Real-World Impact',
  email: 'nprinka235@gmail.com',
  linkedin: 'https://www.linkedin.com/in/priyanka-n-1b407655',
  github: 'https://github.com/NPriyankaDS',
  resumeFile: '/resume.pdf',
}

export const hero = {
  headline: 'Transforming Complex AI Challenges Into Production Systems',
  body: "I design and deploy machine learning solutions that solve real-world problems at scale. Experienced in LLMs, RAG systems, agentic workflows (CrewAI, LangGraph), knowledge graphs, speech recognition, computer vision, and collaborative AI development across 8+ global Omdena projects plus open source contributions.",
}

export const about = [
  "I'm an AI Engineer passionate about building production-grade machine learning systems that make a tangible impact. With 8+ collaborative projects through Omdena, active open source contributions, and a hackathon win for MamaMind, I've gained deep experience in end-to-end AI development — from problem definition to deployment.",
  "My expertise spans Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI & LangGraph, Knowledge Graphs (Neo4j), Speech Recognition for Low-Resource Languages, Computer Vision, and Predictive Modeling. I'm particularly passionate about applications that improve mental health, support accessibility, enable environmental conservation, and serve healthcare systems in resource-limited settings.",
  "I thrive in cross-functional, distributed teams and am committed to writing clean, maintainable code and creating AI systems that are both effective and responsible. I'm actively involved in open source development and believe in the power of knowledge-sharing to accelerate progress on global challenges.",
]

export const skillCategories = [
  {
    icon: '\u{1F916}',
    title: 'AI & Machine Learning',
    items: [
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI & CrewAI & LangGraph Workflows',
      'Knowledge Graphs (Neo4j)',
      'Natural Language Processing (NLP)',
      'Automatic Speech Recognition (ASR)',
      'Computer Vision & Satellite Imagery',
      'Predictive Modeling & Forecasting',
      'Embeddings & Semantic Search',
      'Time-Series Analysis',
    ],
  },
  {
    icon: '\u{1F6E0}\uFE0F',
    title: 'Frameworks & Technologies',
    items: [
      'Python (Core Expertise)',
      'PostgreSQL',
      'PyTorch & TensorFlow',
      'CrewAI, LangGraph & Agentic Workflows',
      'Transformers (Hugging Face)',
      'LangChain & RAG Systems',
      'Streamlit (Full-Stack Apps)',
      'FastAPI (API Development)',
      'Neo4j (Graph Databases)',
      'Groq, OpenAI, Gemini APIs',
      'Whisper & Wav2Vec2 (ASR)',
      'Vector Databases',
      'MLflow (Experiment Tracking)',
      'Langsmith (Tracing & Observability)',
    ],
  },
  {
    icon: '\u{1F4A1}',
    title: 'Domain Expertise',
    items: [
      'Mental Health AI & Chatbots',
      'Voice-First & Accessibility Tech',
      'Low-Resource Language NLP',
      'Environmental Conservation Tech',
      'Healthcare Prediction Systems',
      'Legal Knowledge Systems',
      'Satellite Imagery Analysis',
      'Audio Signal Processing (DSP)',
      'Culturally Sensitive AI Design',
      'Government Services AI (G2C)',
    ],
  },
  {
    icon: '\u{1F3AF}',
    title: 'Core Competencies',
    items: [
      'Full-Stack ML Application Dev',
      'Production System Design',
      'Multi-Agent System Architecture',
      'Distributed Team Collaboration',
      'Problem Decomposition',
      'Research & Documentation',
      'Performance Optimization',
      'Git & Version Control',
      'Docker & Deployment',
    ],
  },
]

export const featuredProjects = [
  {
    icon: '\u{1F3C6}',
    title: 'MamaMind',
    impact: 'Hackathon Winner: Perinatal Mental Health AI Assistant',
    contributions: [
      'Architected end-to-end RAG pipeline with semantic search',
      'Fine-tuned Sentence-Transformers for mental health domain',
      'Integrated Groq API for 50-150ms ultra-low-latency inference',
      'Built accessible Streamlit UI for vulnerable populations',
      'Implemented safety guardrails with crisis detection',
    ],
    tech: ['Python', 'LLM', 'RAG', 'FAISS', 'Streamlit', 'Groq API'],
    links: [{ label: 'View on GitHub', url: 'https://github.com/NPriyankaDS/devpost_hackathon_MamaMind/tree/rag_w_decomposition', primary: true }],
  },
  {
    icon: '\u{1F3A4}',
    title: 'Dzongkha ASR Dataset Collector',
    impact: 'First production-grade ASR tool for Dzongkha (low-resource language)',
    contributions: [
      'Engineered Tsheg-driven syllable segmentation for Tibetan scripts',
      'Built real-time DSP diagnostics (SNR, clipping, silence detection)',
      'Implemented boundary-aware text chunking for semantic alignment',
      'Designed production Streamlit workflow with UTF-8 preservation',
      'Deployed on Streamlit Cloud for public access',
    ],
    tech: ['Python', 'Streamlit', 'DSP', 'Audio Processing', 'NumPy'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/NPriyankaDS/dzongkha_ASR_dataset_collector', primary: true },
      { label: 'Live App', url: 'https://dzongkhaasrdatasetcollector.streamlit.app/', primary: false },
    ],
  },
  {
    icon: '\u{1F3AC}',
    title: 'TubeTalk',
    impact: 'AI-powered YouTube knowledge extraction (10,000+ users)',
    contributions: [
      'Built end-to-end video processing pipeline with transcript extraction',
      'Implemented multi-level hierarchical summarization with LLM',
      'Created semantic search + LLM Q&A with timestamp navigation',
      'Designed multi-format export (markdown, JSON, transcript)',
      'Optimized for mobile and accessibility',
    ],
    tech: ['Python', 'Streamlit', 'LangChain', 'LLM', 'YouTube API'],
    links: [{ label: 'View on GitHub', url: 'https://github.com/NPriyankaDS/TubeTalk', primary: true }],
  },
  {
    icon: '\u{1F33F}',
    title: 'Seagrass Meadows Mapping',
    impact: 'Satellite CV for environmental conservation (Omdena Trieste)',
    contributions: [
      'Engineered end-to-end computer vision pipeline (85%+ accuracy)',
      'Implemented tile-based geospatial processing for 500+ sq km',
      'Built interactive Streamlit dashboard with temporal analysis',
      'Validated predictions with environmental scientists',
      'Containerized with Docker for deployment',
    ],
    tech: ['Computer Vision', 'Satellite Imagery', 'Geospatial Analysis', 'Streamlit', 'Docker'],
    links: [{ label: 'View on GitHub', url: 'https://github.com/NPriyankaDS/seagrass-mapping-app', primary: true }],
  },
  {
    icon: '\u{1F4DD}',
    title: 'ContentCrafter',
    impact: 'LLM-powered automated blog post generation',
    contributions: [
      'Designed Langflow multi-stage content generation pipeline',
      'Implemented chain-of-thought prompting for structured output',
      'Built quality validation layers (tone, length, SEO)',
      'Created user-friendly Streamlit interface with live preview',
      '70%+ faster than manual blog writing',
    ],
    tech: ['Python', 'LangFlow', 'LLM', 'Streamlit', 'Prompt Engineering'],
    links: [{ label: 'View on GitHub', url: 'https://github.com/NPriyankaDS/Langflow-hackathon-challenge-4_ContentCrafter', primary: true }],
  },
]

export const omdenaProjects = [
  {
    icon: '\u{1F5E3}\uFE0F',
    title: 'Voice-First: Bhutan Government Services AI',
    impact: 'Omdena Bhutan - Multi-team agentic AI platform (30+ commits)',
    contributionsHeading: 'My Contributions (Team B - LangGraph Agent Development)',
    contributions: [
      { strong: 'LangGraph Agent Architecture:', text: 'Designed and implemented core ReAct (Reasoning + Acting) agent workflow for government service routing' },
      { strong: 'Multi-Agent Orchestration:', text: 'Built state machines for permit agents, business registration agents, and eligibility assessment agents' },
      { strong: 'Intent Router Development:', text: 'Engineered deterministic intent classification and routing logic with support for edge cases' },
      { strong: 'Cross-Team Integration:', text: 'Coordinated with Team A (NLP/RAG), Team C (Voice/ASR), Team D (Integration/Logging) to create unified pipeline' },
    ],
    tech: ['LangGraph', 'Python', 'Agentic AI', 'ReAct', 'Multi-Agent Systems'],
    links: [{ label: 'View Contributions', url: 'https://github.com/OmdenaAI/Voice-First', primary: true }],
  },
  {
    icon: '\u{1F30D}',
    title: 'Malaria Prevention Forecasting (Liberia)',
    impact: 'Omdena - Predictive modeling for public health',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Built predictive models forecasting malaria prevalence trends' },
      { text: 'Engineered features from climate and epidemiological data' },
      { text: 'Supported model validation with health domain experts' },
    ],
    tech: ['Predictive Modeling', 'Time-Series', 'Python', 'Public Health'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
  {
    icon: '\u{1F30D}',
    title: 'Personalized AI Travel Advisor (Paris 2024)',
    impact: 'Omdena - Multi-agent itinerary and accessibility assistant',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Contributed to multi-agent itinerary generation logic' },
      { text: 'Worked on traffic-aware and accessibility-aware routing' },
    ],
    tech: ['LLM Agents', 'Recommendation Systems', 'Python'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
  {
    icon: '\u{1F9EA}',
    title: 'COVID-19 Dynamics Forecasting (Zambia)',
    impact: 'Omdena - Epidemiological forecasting for public health decisions',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Built forecasting models for cases, recoveries, and testing trends' },
      { text: 'Delivered actionable insights for stakeholder decision-making' },
    ],
    tech: ['Forecasting', 'Time-Series', 'Python', 'Data Analysis'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
  {
    icon: '\u{1F525}',
    title: 'Forest Fire Prediction & Early Warning (Uttarakhand)',
    impact: 'Omdena - Real-time environmental risk modeling',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Contributed to next-day forest fire spread prediction model' },
      { text: 'Worked with real-time geospatial and environmental data' },
    ],
    tech: ['Predictive Modeling', 'Geospatial', 'Real-Time Systems', 'Environmental Data'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
  {
    icon: '\u{1F9E0}',
    title: 'Mental Health LLM Chatbot',
    impact: 'Omdena - AI addressing social media FOMO & mental health',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Designed conversational flows for mental health support' },
      { text: 'Implemented personalized intervention recommendations' },
      { text: 'Created mechanisms for healthy online behavior promotion' },
      { text: 'Added ethical safeguards for sensitive topics' },
    ],
    tech: ['LLM', 'LangChain', 'Conversational AI', 'NLP'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
  {
    icon: '\u{1F5FA}\uFE0F',
    title: 'Intelligent Route Optimization',
    impact: 'Omdena - AI for field sales efficiency and scalability',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Designed optimization algorithms for complex routing' },
      { text: 'Reduced travel time and improved agent productivity' },
      { text: 'Integrated real-world constraints (traffic, time windows)' },
      { text: 'Built scalable backend for multi-region fleet management' },
    ],
    tech: ['Optimization', 'Algorithms', 'Geographic APIs', 'Python'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
  {
    icon: '\u{1F3D4}\uFE0F',
    title: 'AI Mental Health Assistant (Bhutan)',
    impact: 'Omdena Bhutan - Culturally sensitive mental health AI',
    contributionsHeading: 'My Contributions',
    contributions: [
      { text: 'Adapted AI for cultural context and local values' },
      { text: 'Designed compassionate interaction patterns' },
      { text: 'Integrated local mental health resources' },
      { text: 'Ensured accessibility for diverse users' },
    ],
    tech: ['LLM', 'NLP', 'Localization', 'Cultural Adaptation'],
    links: [{ label: 'View Contributions', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
]

export const openSourceProjects = [
  {
    icon: '\u{1F5E3}\uFE0F',
    title: 'OmdenaAI/Voice-First (30+ commits)',
    impact: 'Collaborative multi-team Bhutan government services AI platform',
    contributions: [
      'LangGraph agent architecture and multi-agent orchestration',
      'State machine design for complex government workflows',
      'Cross-team integration and API contracts',
      'Comprehensive testing infrastructure (43+ tests)',
      'Documentation and architectural guidance',
    ],
    tech: ['LangGraph', 'Python', 'Agentic AI', 'Open Source'],
    links: [{ label: 'View Repository', url: 'https://github.com/OmdenaAI/Voice-First', primary: true }],
  },
  {
    icon: '\u2696\uFE0F',
    title: 'Legal Knowledge Graph RAG API (16+ commits)',
    impact: 'Maathis - FastAPI endpoint for Neo4j legal document querying',
    contributions: [
      'Hybrid Query Classification System: dual-mode classification (rule-based + LLM-based) for query types (Case, Law, Article)',
      'Vector Search Integration: semantic search against Neo4j vector indexes for legal document retrieval',
      'Knowledge Graph Context Retrieval: graph traversal to fetch related entities (laws, cases, articles, parties, courts)',
      'RAG Pipeline Architecture: end-to-end retrieval-augmented generation pipeline with context enrichment',
      'MLflow Integration: observability and experiment tracking for RAG performance monitoring',
      'FastAPI Application Development: production-grade API with health checks and documentation',
      'Docker Containerization: containerized application for scalable deployment',
    ],
    tech: ['FastAPI', 'Neo4j', 'RAG', 'LLM (Groq)', 'Vector Search', 'Knowledge Graph', 'MLflow', 'Docker', 'Python'],
    links: [{ label: 'View Repository', url: 'https://github.com/Maathis-com/ai_knowledge_graph_query', primary: true }],
  },
  {
    icon: '\u{1F4AC}',
    title: 'Community & Knowledge Sharing',
    impact: 'Contributing to AI accessibility and developer experience',
    contributions: [
      'Peer code review and architectural guidance',
      'Documentation improvements and tutorials',
      'Bug fixes and performance optimizations',
      'Community collaboration and knowledge sharing',
      'Open source advocacy for low-resource language support',
    ],
    tech: ['Open Source', 'Community', 'Documentation', 'Code Quality', 'Accessibility'],
    links: [{ label: 'My GitHub', url: 'https://github.com/NPriyankaDS', primary: true }],
  },
]

export const experience = [
  {
    title: 'Omdena AI Collaborator',
    date: '8+ Projects | 2024-2025 | Global Remote Teams',
    description: 'Collaborated on diverse AI projects addressing real-world challenges in healthcare, environmental conservation, mental health, accessibility, and government services. Worked in distributed, cross-functional teams with researchers, engineers, domain experts, and community partners across multiple continents.',
    highlights: [
      'Delivered 8+ production-grade AI solutions addressing global challenges',
      'Led LangGraph agentic AI architecture for Voice-First platform (30+ commits)',
      'Collaborated with international teams across diverse technical specializations',
      'Developed expertise in rapid prototyping, MVP deployment, and iterative improvement',
      'Contributed to open-source knowledge graph initiatives with Maathis organization',
    ],
  },
  {
    title: '\u{1F3C6} Hackathon Winner - MamaMind',
    date: '2024 | Perinatal Mental Health AI',
    description: 'Built an end-to-end AI solution for perinatal mental health support that won competitive recognition. Demonstrated full-stack capability from problem definition through production deployment, integrating advanced LLM techniques with accessibility best practices.',
    highlights: [
      'Architected RAG-based system for empathetic mental health guidance',
      'Optimized for ultra-low latency inference using Groq API',
      'Created accessible Streamlit interface prioritizing vulnerable users',
      'Achieved 95%+ validation rating from mental health professionals',
      'Deployed with production-grade scalability and safety guardrails',
    ],
  },
  {
    title: 'Full-Stack AI/ML Developer',
    date: 'Core Expertise | Production-Ready Projects',
    description: 'Developed complete machine learning systems from concept to deployment. Expertise spans data pipeline engineering, model development, performance optimization, agentic workflows, knowledge graphs, and building user-facing applications with Streamlit and FastAPI.',
    highlights: [
      'Full-stack capability: problem framing \u2192 data engineering \u2192 model development \u2192 deployment',
      'Production systems handling real-time inference, offline scenarios, and scalability',
      'Cross-domain expertise: LLMs, agentic AI, knowledge graphs, computer vision, speech recognition, predictive modeling',
      'Strong focus on accessibility, ethical AI, responsible development, and real-world impact measurement',
    ],
  },
]
