export const anumData = {
  personal: {
    name: "Anum Tahir",
    title: "Data Scientist & AI Engineer",
    location: "Lahore, Pakistan",
    description: "Dynamic and detail-oriented Data Scientist and AI Engineer with dual Microsoft certifications - DP-100 (Data Scientist Associate) and AI-102 (AI Engineer Associate). Proficient in designing, developing, and deploying machine learning and AI solutions on Azure Cloud.",
    certifications: [
      "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
      "Microsoft Certified: Azure AI Engineer Associate (AI-102)"
    ],
    languages: [
      { language: "English", proficiency: "Full Professional Proficiency" },
      { language: "German", proficiency: "A2 (Highly motivated to reach professional fluency)" }
    ],
    interests: ["Book Reading", "Baking", "Drawing & Sketching", "Gardening"]
  },

  summary: [
    "Proficient in data analysis, cleaning, and wrangling using Python (Pandas, NumPy) and SQL",
    "Skilled in extracting insights from large datasets and translating them into actionable business decisions",
    "Experienced in developing and maintaining ETL pipelines using Python and SQL",
    "Strong knowledge of statistical methods, hypothesis testing, and predictive analytics",
    "Hands-on experience with machine learning models and end-to-end data science workflows",
    "Adept at building interactive dashboards using Power BI and reporting via Microsoft Excel",
    "Clear and confident communicator, capable of presenting complex data to technical and non-technical audiences",
    "Passionate about using data to solve real-world problems and support strategic decision-making"
  ],

  experience: [
    {
      period: "05/2024 - 05/2025",
      title: "Data Analyst",
      company: "Allied Bank Limited - Head Office",
      location: "Lahore, Pakistan",
      description: "At Allied Bank, I have worked on chatbot data analysis to enhance performance across business operations. I have analyzed system data using SQL and Python, collaborated with stakeholders to define improvement goals, and supported end-to-end data solutions for intelligent automation.",
      points: [
        "Conducted exploratory data analysis (EDA) and statistical analysis on chatbot logs to identify usage patterns and optimization areas",
        "Automated data extraction, cleansing, and transformation workflows using SQL and Python (Pandas)",
        "Built performance dashboards using Power BI and Excel to visualize KPIs and user behavior"
      ]
    },
    {
      period: "01/2022 - 05/2022",
      title: "Teaching Assistant - Data Science",
      company: "Lahore University of Management Sciences (LUMS)",
      location: "Lahore, Pakistan",
      description: "At LUMS, I have served as a TA for Data Science courses focused on data analysis and machine learning. My role has included mentoring students, reviewing projects, and enhancing their practical exposure to real-world analytics.",
      points: [
        "Delivered lab sessions on Python programming, machine learning, and data visualization",
        "Evaluated academic projects involving regression, classification, and clustering techniques",
        "Provided guidance on using libraries such as Scikit-learn, Matplotlib, and Seaborn for coursework"
      ],
      tools: ["Python", "Data Visualization", "Communication", "ML Education"]
    },
    {
      period: "11/2020 - 06/2021",
      title: "Research Assistant",
      company: "Energy Informatics Group - LUMS",
      location: "Lahore, Pakistan",
      description: "At EIG, I have led a research project on Li-ion EV battery degradation modeling using machine learning. I have processed scientific sensor data, developed predictive models, and presented insights for academic publications.",
      points: [
        "Preprocessed high-frequency battery sensor data and conducted outlier handling",
        "Built regression models using MAE and RMSE metrics to forecast cyclic degradation",
        "Produced technical reports and plots using LaTeX and Matplotlib for journal submission"
      ],
      tools: ["Python", "ML Modeling", "Data Cleaning", "LaTeX", "Battery Analytics"]
    }
  ],

  education: [
    {
      period: "2020-2023",
      degree: "Masters in Computer Science",
      institution: "Lahore University of Management Sciences (LUMS)",
      location: "Lahore, Pakistan",
      highlights: ["Data Science Specialization", "Machine Learning Research", "Thesis on Predictive Analytics"]
    },
    {
      period: "2016-2020",
      degree: "Bachelors in Computer Science",
      institution: "University of Engineering & Technology Lahore (UET)",
      location: "Lahore, Pakistan",
      highlights: ["Computer Vision Project", "Data Structures & Algorithms", "Software Engineering"]
    }
  ],

  projects: [
    {
      title: "Smart Feature Selection for Improved Cyclic Loss Prediction of Li-ion EV Battery Degradation",
      subtitle: "Research Project - Energy Informatics Group (LUMS)",
      description: "Engineered domain-specific features from multi-cycle battery datasets. Trained and evaluated ML models using Grid Search and cross-validation. Improved model accuracy by reducing noise through normalization and PCA.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Latex", "ML"],
      category: "Research",
      features: ["Feature Engineering", "Model Optimization", "Cross-validation", "PCA Analysis"]
    },
    {
      title: "Machine Learning-Based Water Content Estimation in Trees using Sap Flow",
      subtitle: "Master's Capstone Project - LUMS",
      description: "Analyzed real-time sensor data to estimate moisture levels in plant tissues. Applied regression algorithms like Random Forest and SVR, and tuned them using Genetic Algorithms. Visualized environmental dependencies using correlation heatmaps and scatter plots.",
      technologies: ["Python", "Excel", "Machine Learning", "Sensor Analytics", "Data Visualization"],
      category: "Capstone",
      features: ["Sensor Data Analysis", "Genetic Algorithms", "Regression Models", "Environmental Correlation"]
    },
    {
      title: "Machine Vision-Based Student Productivity Optimizer for Classroom",
      subtitle: "Bachelor's Final Year Project",
      description: "Designed a vision-based system using IP cameras and OpenCV to monitor student presence. Implemented pattern recognition models for attention and engagement metrics. Validated the system using confusion matrix, recall, and precision scores.",
      technologies: ["Python", "OpenCV", "Statistics", "Machine Vision", "Report Writing"],
      category: "Computer Vision",
      features: ["Real-time Monitoring", "Pattern Recognition", "Performance Validation", "Engagement Analysis"]
    }
  ],

  techStack: {
    categories: [
      {
        title: "Programming & Scripting",
        items: ["Python (Pandas, NumPy, Matplotlib, Seaborn)", "SQL (MySQL)", "JavaScript", "R"]
      },
      {
        title: "Data Visualization",
        items: ["Power BI", "Matplotlib", "Seaborn", "Excel Charts", "Plotly", "Tableau"]
      },
      {
        title: "Data Handling & ETL",
        items: ["ETL Process Automation", "Data Cleaning and Transformation", "Jupyter Notebook", "Apache Spark", "Azure Data Factory"]
      },
      {
        title: "Statistical & Analytical Tools",
        items: ["Statistical Analysis", "Hypothesis Testing", "Predictive Analytics", "A/B Testing", "Time Series Analysis"]
      },
      {
        title: "Machine Learning",
        items: ["Supervised & Unsupervised Models", "Model Evaluation Techniques", "Deep Learning", "Natural Language Processing", "Computer Vision"]
      },
      {
        title: "Cloud & Development Tools",
        items: ["Azure Cloud", "Azure Databricks", "Azure ML", "Visual Studio", "Git", "Docker", "Kubernetes"]
      },
      {
        title: "Productivity & Documentation",
        items: ["Microsoft Office Suite", "LaTeX", "Jira", "Confluence", "Notion"]
      }
    ]
  },

  services: [
    {
      icon: "🤖",
      title: "AI & ML Solutions",
      description: "Design and deploy machine learning models for predictive analytics, computer vision, and natural language processing.",
      features: ["Predictive Modeling", "Computer Vision", "NLP", "Model Deployment"],
      gradient: "linear-gradient(135deg, #6C63FF 0%, #4A90E2 100%)"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights through comprehensive analysis, visualization, and reporting.",
      features: ["Data Visualization", "Dashboard Creation", "Statistical Analysis", "ETL Pipelines"],
      gradient: "linear-gradient(135deg, #4A90E2 0%, #36D399 100%)"
    },
    {
      icon: "☁️",
      title: "Azure Cloud",
      description: "End-to-end cloud solutions on Microsoft Azure including data pipelines, ML deployment, and automation.",
      features: ["Azure ML", "Databricks", "Data Factory", "Cloud Architecture"],
      gradient: "linear-gradient(135deg, #36D399 0%, #FFB347 100%)"
    },
    {
      icon: "🔄",
      title: "Automation",
      description: "Automate repetitive tasks and processes using Python scripts, ETL workflows, and intelligent systems.",
      features: ["Process Automation", "Workflow Design", "Script Development", "System Integration"],
      gradient: "linear-gradient(135deg, #FFB347 0%, #FF6584 100%)"
    }
  ],

  contact: {
    email: "available upon request",
    location: "Lahore, Pakistan",
    status: "Open to Opportunities",
    availability: "Available for freelance and full-time positions"
  }
};