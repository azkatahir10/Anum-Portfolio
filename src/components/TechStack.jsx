import React from 'react';
import { theme } from '../theme';
import { anumData } from '../data/anumData';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">Tech Stack & Skills</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Comprehensive toolkit for data science, AI, and cloud computing
          </p>
        </div>

        <div className="tech-stack-content">
          <div className="tech-categories animate-in slide-left">
            <div className="categories-header">
              <h3>Expertise Areas</h3>
              <div className="categories-count">
                {anumData.techStack.categories.length} Categories
              </div>
            </div>
            
            <div className="categories-list">
              {anumData.techStack.categories.map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => setActiveCategory(index)}
                >
                  <div className="category-content">
                    <span className="category-name">{category.title}</span>
                    <span className="category-count">{category.items.length} skills</span>
                  </div>
                  <span className="category-indicator"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="tech-skills-container animate-in slide-right">
            <div className="tech-skills">
              <div className="skills-header">
                <h3>{anumData.techStack.categories[activeCategory].title}</h3>
                <div className="skills-count">
                  {anumData.techStack.categories[activeCategory].items.length} Skills
                </div>
              </div>
              
              <div className="skills-grid">
                {anumData.techStack.categories[activeCategory].items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">
                      {getSkillIcon(skill)}
                    </div>
                    <div className="skill-info">
                      <div className="skill-name">{formatSkillName(skill)}</div>
                      <div className="skill-level">
                        <div className="level-bar">
                          <div 
                            className="level-progress"
                            style={{ width: `${getSkillLevel(skill)}%` }}
                          ></div>
                        </div>
                        <div className="level-details">
                          <span className="level-text">{getSkillLevelText(skill)}</span>
                          <span className="level-percentage">{getSkillLevel(skill)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tech-highlights animate-in">
          <h3 className="highlights-title">Core Competencies</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <h4>Rapid Prototyping</h4>
              <p>Quickly transform ideas into working AI/ML prototypes</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📈</div>
              <h4>Scalable Solutions</h4>
              <p>Build systems that grow with your business needs</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔧</div>
              <h4>End-to-End Development</h4>
              <p>From data collection to model deployment and monitoring</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">☁️</div>
              <h4>Cloud Native</h4>
              <p>Expert in Azure Cloud services and serverless architecture</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-stack-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
          margin-bottom: 80px;
          width: 100%;
          max-width: 100%;
        }

        .tech-categories {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          height: fit-content;
          position: sticky;
          top: 100px;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f1f5f9;
          width: 100%;
          max-width: 100%;
        }

        .categories-header h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: ${theme.colors.dark};
          max-width: 100%;
          overflow-wrap: break-word;
        }

        .categories-count {
          background: ${theme.colors.gradient};
          color: white;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          max-width: 100%;
        }

        .category-btn {
          background: none;
          border: none;
          padding: 0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: left;
          width: 100%;
          max-width: 100%;
        }

        .category-btn:hover {
          background: ${theme.colors.light};
        }

        .category-btn.active {
          background: ${theme.colors.gradient};
          color: white;
          box-shadow: 0 5px 20px rgba(108, 99, 255, 0.3);
        }

        .category-content {
          display: flex;
          flex-direction: column;
          padding: 16px 20px;
          gap: 4px;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .category-name {
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.4;
          max-width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }

        .category-count {
          font-size: 0.85rem;
          opacity: 0.7;
          font-weight: 400;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        .category-btn.active .category-count {
          opacity: 0.9;
        }

        .category-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 60%;
          background: ${theme.colors.gradient};
          border-radius: 0 2px 2px 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .category-btn.active .category-indicator {
          opacity: 1;
        }

        .tech-skills-container {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .tech-skills {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          min-height: 500px;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .skills-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f1f5f9;
          width: 100%;
          max-width: 100%;
          flex-wrap: wrap;
          gap: 15px;
        }

        .skills-header h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: ${theme.colors.dark};
          margin: 0;
          max-width: 100%;
          overflow-wrap: break-word;
          line-height: 1.3;
        }

        .skills-count {
          background: ${theme.colors.light};
          color: ${theme.colors.primary};
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 2px solid ${theme.colors.primary}20;
          flex-shrink: 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
          width: 100%;
          max-width: 100%;
        }

        .skill-card {
          background: ${theme.colors.light};
          border-radius: 16px;
          padding: 25px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          height: 100%;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .skill-card:hover {
          border-color: ${theme.colors.primary};
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(108, 99, 255, 0.1);
        }

        .skill-icon {
          font-size: 1.8rem;
          opacity: 0.8;
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          min-width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(108, 99, 255, 0.1);
          border-radius: 12px;
        }

        .skill-info {
          flex: 1;
          min-width: 0;
          width: 100%;
          max-width: 100%;
        }

        .skill-name {
          font-weight: 600;
          margin-bottom: 15px;
          color: ${theme.colors.dark};
          font-size: 1.05rem;
          line-height: 1.4;
          max-width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
          white-space: normal;
          word-break: break-word;
          display: block;
        }

        .skill-level {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          max-width: 100%;
        }

        .level-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
        }

        .level-progress {
          height: 100%;
          background: ${theme.colors.gradient};
          border-radius: 4px;
          transition: width 1s ease-out;
          max-width: 100%;
        }

        .level-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 100%;
        }

        .level-text {
          font-size: 0.85rem;
          color: ${theme.colors.gray};
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        .level-percentage {
          font-size: 0.85rem;
          color: ${theme.colors.primary};
          font-weight: 600;
          flex-shrink: 0;
        }

        .tech-highlights {
          background: ${theme.colors.gradientDark};
          border-radius: 20px;
          padding: 60px;
          color: white;
          margin-top: 40px;
          width: 100%;
          max-width: 100%;
        }

        .highlights-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 50px;
          text-align: center;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          width: 100%;
          max-width: 100%;
        }

        .highlight-item {
          text-align: center;
          width: 100%;
          max-width: 100%;
        }

        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: inline-block;
          transition: transform 0.3s ease;
          max-width: 100%;
        }

        .highlight-item:hover .highlight-icon {
          transform: scale(1.1);
        }

        .highlight-item h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 1.3;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        .highlight-item p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
          max-width: 280px;
          margin: 0 auto;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        @media (max-width: 1200px) {
          .tech-stack-content {
            grid-template-columns: 250px 1fr;
            gap: 30px;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .tech-stack-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .tech-categories {
            position: static;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .tech-categories,
          .tech-skills {
            padding: 25px 20px;
          }

          .tech-highlights {
            padding: 40px 25px;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .skills-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 30px;
          }

          .skills-header h3 {
            font-size: 1.4rem;
          }

          .skill-card {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .categories-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .skill-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 15px;
          }

          .skill-icon {
            margin-bottom: 15px;
            width: 45px;
            height: 45px;
            min-width: 45px;
            font-size: 1.6rem;
          }

          .skill-info {
            width: 100%;
          }

          .highlights-title {
            font-size: 1.6rem;
            margin-bottom: 30px;
          }

          .highlight-item h4 {
            font-size: 1.2rem;
          }

          .highlight-item p {
            font-size: 0.9rem;
          }
          
          .category-content {
            padding: 14px 16px;
          }
          
          .category-name {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .skill-card {
            padding: 18px 12px;
          }
          
          .skill-name {
            font-size: 0.95rem;
          }
          
          .level-text, .level-percentage {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

// Helper functions for skill levels
const getSkillIcon = (skill) => {
  const icons = {
    'Python': '🐍',
    'Pandas': '📊',
    'NumPy': '🔢',
    'Matplotlib': '📈',
    'Seaborn': '🎨',
    'SQL': '🗃️',
    'MySQL': '🗄️',
    'JavaScript': '⚡',
    'R': '📊',
    'Power BI': '📊',
    'Excel': '📑',
    'Plotly': '📊',
    'Tableau': '📈',
    'ETL': '🔄',
    'Jupyter': '📓',
    'Apache Spark': '⚡',
    'Azure Data Factory': '🏭',
    'Statistical': '📐',
    'Analytical': '🔍',
    'Predictive': '🔮',
    'Time Series': '⏰',
    'Machine Learning': '🧠',
    'Deep Learning': '🤖',
    'Natural Language Processing': '💬',
    'Computer Vision': '👁️',
    'Azure': '☁️',
    'Azure Databricks': '💎',
    'Azure ML': '⚙️',
    'Visual Studio': '💻',
    'Git': '🔧',
    'Docker': '🐳',
    'Kubernetes': '⚓',
    'Microsoft Office': '📎',
    'LaTeX': '📝',
    'Jira': '📋',
    'Confluence': '📚',
    'Notion': '📒'
  };

  for (const [key, icon] of Object.entries(icons)) {
    if (skill.includes(key)) return icon;
  }
  
  return '💻';
};

const getSkillLevel = (skill) => {
  const expert = [
    'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 
    'SQL', 'MySQL', 'Power BI', 'Excel', 'Statistical',
    'Machine Learning', 'Azure', 'Azure ML', 'Git'
  ];
  
  const advanced = [
    'ETL', 'Jupyter', 'Apache Spark', 'Analytical', 'Predictive',
    'Deep Learning', 'Natural Language Processing', 'Computer Vision',
    'Azure Databricks', 'Visual Studio', 'LaTeX'
  ];
  
  const intermediate = [
    'JavaScript', 'R', 'Plotly', 'Tableau', 'Azure Data Factory',
    'Time Series', 'Docker', 'Kubernetes', 'Microsoft Office',
    'Jira', 'Confluence', 'Notion'
  ];
  
  if (expert.some(s => skill.includes(s))) return 95;
  if (advanced.some(s => skill.includes(s))) return 85;
  if (intermediate.some(s => skill.includes(s))) return 75;
  return 70;
};

const getSkillLevelText = (skill) => {
  const level = getSkillLevel(skill);
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Intermediate';
  return 'Proficient';
};

const formatSkillName = (skill) => {
  // Remove extra parentheses for better display
  return skill.replace(/\(([^)]+)\)/g, '($1)').trim();
};

export default TechStack;