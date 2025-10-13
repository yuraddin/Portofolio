import React from 'react';
import './Hero.css';
import fotoProfil from '../assets/Profil.png';
import { FiInstagram, FiLinkedin, FiDownload } from 'react-icons/fi'; 

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">YURADDIN</p>
        <h1 className="hero-title">
          HAYY<br />
          I'M YURADDIN
        </h1>
        <p className="hero-description">
          Mahasiswa Program Studi Teknik Komputer yang Memiliki Minat Besar Pada AI dan Machine Learning Serta Berpengalaman dalam Pengembangan Web dan Aplikasi Mobile.
        </p>

        <div className="hero-buttons">
          {/* Download CV */}
          <a href="/CV.pdf" className="btn btn-primary" download="Yuraddin_CV.pdf">
            <FiDownload style={{ marginRight: '8px' }} />
            Download CV
          </a>

          {/* Sosial Media */}
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/__yrdn/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/in/yuraddin-b0302b2aa/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={fotoProfil} alt="Foto Profil" />
        <div className="decorative-sphere sphere1"></div>
        <div className="decorative-sphere sphere2"></div>
      </div>
    </section>
  );
};

export default Hero;
