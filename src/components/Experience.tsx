import React from "react";
import { TIMELINE_DATA } from "../data/portfolioData";
import { Reveal } from "./Reveal";

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="journey-section experience-section">
      <div className="journey-container experience-container container">
        <Reveal>
          <div className="journey-header experience-header">
            <h2 className="journey-title experience-title">My Journey</h2>
          </div>
        </Reveal>

        <div className="timeline-wrapper">
          <div className="timeline-track-line"></div>

          {TIMELINE_DATA.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
              <div className="timeline-item">
                <div className="timeline-left">
                  <h3 className="timeline-stage company-name">{item.stage}</h3>
                  <span className="timeline-date">{item.date}</span>
                </div>

                <div className="timeline-center">
                  <div className={`timeline-node ${item.nodeClass}`}>
                    <span className="node-dot"></span>
                  </div>
                </div>

                <div className="timeline-right">
                  <h4 className="timeline-title role-title">{item.title}</h4>
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

export const Experience = Journey;
