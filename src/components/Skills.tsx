import React from 'react';
import { TECH_SKILLS_DATA, SOFT_SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container container">
        <div className="skills-header">
          <h2 className="skills-title">Technical Proficiency & Core Strengths</h2>
          <p className="skills-subtitle">
            A balanced synthesis of frontend engineering mastery and
            disciplined soft skills for building high-stakes digital products.
          </p>
        </div>

        <div className="skills-main-grid">
          {/* Column 1: Technical Stack Matrix */}
          <div className="skills-block tech-skills-block">
            <h3 className="skills-block-title">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Frontend Tech Stack
            </h3>

            <div className="tech-grid">
              {TECH_SKILLS_DATA.map((tech) => (
                <div key={tech.id} className="tech-card">
                  <div className={`tech-icon-wrapper ${tech.iconBgClass}`}>
                    {tech.iconSvg}
                  </div>
                  <div className="tech-details">
                    <h4 className="tech-name">{tech.name}</h4>
                    <span className="tech-desc">{tech.description}</span>
                  </div>
                  <span className="tech-badge">{tech.badgeText}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Soft Skills & Core Philosophy */}
          <div className="skills-block soft-skills-block">
            <h3 className="skills-block-title">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Professional Soft Skills
            </h3>

            <div className="soft-skills-grid">
              {SOFT_SKILLS_DATA.map((soft) => (
                <div key={soft.id} className="soft-card">
                  <div className="soft-header">
                    <div className={`soft-icon ${soft.iconClass}`}>
                      {soft.iconSvg}
                    </div>
                    <h4 className="soft-title">{soft.title}</h4>
                  </div>
                  <p className="soft-desc">{soft.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
