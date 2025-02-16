import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section d-flex align-items-center justify-content-center text-center vh-100 px-3">
      <div className="container">
        <h1 className="display-4 animate__animated animate__fadeInDown">Hello, I'm Dawit </h1>
        <p className="lead animate__animated animate__fadeInUp">
        Full Stack Developer
        </p>
        <div className="mt-4">
          <Link to="/about" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
