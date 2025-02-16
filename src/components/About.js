import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-dark';

  return (
    <section className={`py-5 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} id="about">
      <div className="container">
        <h2 className={`text-center mb-4 ${textColorClass}`}>About Me</h2>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center mb-4">
            <img 
              src="/profile.jpg" 
              className="img-fluid rounded-circle profile-img" 
              alt="Profile"
              style={{ maxWidth: '200px' }}
            />
          </div>
          <div className="col-12 col-md-8">
            <p className={`lead ${textColorClass}`}>
              Hi, I'm Dawit Worku – a passionate and driven full-stack developer with a strong foundation in building both the front-end and back-end of web applications. With experience in technologies like Java, Python, Kotlin, JavaScript, and Servlets, I specialize in creating efficient, scalable, and user-friendly applications.
            </p>
            <p className={textColorClass}>
              Over the years, I have honed my skills by working on various projects that challenged my problem-solving abilities and allowed me to implement modern software engineering practices. My expertise includes developing dynamic, responsive websites and powerful web applications while focusing on performance, security, and user experience.
            </p>
            <p className={textColorClass}>
              I'm always eager to learn new technologies and embrace emerging trends in software development. I believe in clean code and best practices that ensure long-term maintainability and scalability of projects. Whether it's optimizing existing code or architecting a new solution from scratch, I approach every challenge with enthusiasm and dedication.
            </p>
            <p className={textColorClass}>
              When I'm not coding, you can find me exploring new innovations in tech, contributing to open-source projects, or working on improving my personal skills. I'm always looking for ways to expand my knowledge and connect with like-minded developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
