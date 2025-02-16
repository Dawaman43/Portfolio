
import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SkillProgressBar = ({ skill, percentage }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      const offset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;
      circleRef.current.style.strokeDashoffset = offset;
    }
  }, [percentage]); 

  return (
    <div className="progress-container">
      <div className="progress-circle">
        <svg className="progress-ring" width="120" height="120">
          {/* Gradient for a modern effect */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007bff" />
              <stop offset="100%" stopColor="#0056b3" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            className="progress-ring__background"
            stroke="#e0e0e0"
            strokeWidth="10"
            fill="transparent"
            r={RADIUS}
            cx="60"
            cy="60"
          />

          {/* Progress Circle */}
          <circle
            ref={circleRef}
            className="progress-ring__circle"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="transparent"
            r={RADIUS}
            cx="60"
            cy="60"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE} 
          />
        </svg>

        {/* Percentage Text */}
        <div className="progress-percentage">{percentage}%</div>
      </div>
      <div className="skill-title">{skill}</div>
    </div>
  );
};

const Skills = () => {
  const { theme } = useContext(ThemeContext); // Get theme from context
  const skills = [
    { name: 'HTML/CSS', percentage: 96 },
    { name: 'JavaScript', percentage: 89 },
    { name: 'React', percentage: 80 },
    { name: 'Bootstrap', percentage: 95 },
    { name: 'Django', percentage: 85 },
    { name: 'Python', percentage: 75 },
    { name: 'Java', percentage: 70 },
    { name: 'Kotlin', percentage: 60 }
  ];

  return (
    <section className={`py-5 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`} id="skills">
      <div className="container">
        <h2 className="text-center mb-4 animate__animated animate__fadeIn">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
              <SkillProgressBar skill={skill.name} percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
