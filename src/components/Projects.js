import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Ecommerce Platform',
      description: 'Full-stack e-commerce platform built with Django. Includes advanced UI/UX design for a seamless shopping experience.',
      repoLink: 'https://github.com/Dawaman43/Ecommerce-platform',
    },
    {
      id: 2,
      name: 'Blog Website',
      description: 'Front-end blog website built with React and Bootstrap, featuring a modern and responsive design.',
      repoLink: 'https://github.com/Dawaman43/Blog-Website',
    },
    {
      id: 3,
      name: 'MOOC Platform',
      description: 'Full-stack MOOC platform developed with Django and Bootstrap, offering an interactive learning experience.',
      repoLink: 'https://github.com/Dawaman43/MOOC-platform',
    },
    {
      id: 4,
      name: 'News App',
      description: 'A modern, responsive news app with smooth animations, day/night mode, and comments. Built using HTML, CSS, JavaScript, and an API.',
      repoLink: 'https://github.com/Dawaman43/News-App',
    },
    {
      id: 5,
      name: 'Stock Market Tracker',
      description: 'Real-time stock prices, technical indicators, financial reports, day/night mode, email subscription, and stock comparison using the Alpha Vantage API.',
      repoLink: 'https://github.com/Dawaman43/stoke-market-tracker',
    },
    {
      id: 6,
      name: '3D Weather App',
      description: 'Front-end weather app built with React, featuring a weather API and a 3D visual display.',
      repoLink: 'https://github.com/Dawaman43/3d-weather-app',
    },
    {
      id: 7,
      name: 'Social Media App',
      description: 'A Django-MySQL app where users can post, like, comment, follow others, and manage profiles. It supports secure authentication, post sharing on Instagram/Facebook, and an admin dashboard for user management. Built with Bootstrap and jQuery.',
      repoLink: 'https://github.com/Dawaman43/social-media',
    },
  ];

  return (
    <section className="py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.id}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
