import React from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container container">
        <Reveal>
          <div className="experience-header">
            <h2 className="experience-title">My Path as a Developer</h2>
          </div>
        </Reveal>

        <div className="timeline-wrapper">
          <div className="timeline-track-line"></div>

          {TIMELINE_DATA.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
              <div className="timeline-item">
                <div className="timeline-left">
                  <h3 className="company-name">{item.company}</h3>
                  <span className="timeline-date">{item.date}</span>
                </div>

                <div className="timeline-center">
                  <div className={`timeline-node ${item.nodeClass}`}>
                    <span className="node-dot"></span>
                  </div>
                </div>

                <div className="timeline-right">
                  <h4 className="role-title">{item.role}</h4>
                  <p className="role-desc">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

