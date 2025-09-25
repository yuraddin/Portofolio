import React from 'react';
import './Projects.css';

// 1. Impor gambar-gambar lokal Anda dari folder assets
import projectImage1 from '../assets/Project.png';
import projectImage2 from '../assets/Project.png';
import projectImage3 from '../assets/Project.png';

const Projects = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Proyek Saya</h1>
      <div className="projects-grid">
        
        
        {/* --- Kartu Proyek 1 --- */}
        <div className="project-card">
          {/* 2. Gunakan variabel gambar yang sudah diimpor */}
          <img src={projectImage1} alt="None" />
          <div className="card-content">
            <h3>None</h3>
            <p>None</p>
            <a href="#" className="btn btn-primary">Lihat Proyek</a>
          </div>
        </div>

        {/* --- Kartu Proyek 2 --- */}
        <div className="project-card">
          <img src={projectImage2} alt="Aplikasi To-Do List" />
          <div className="card-content">
            <h3>None</h3>
            <p>None</p>
            <a href="#" className="btn btn-primary">Lihat Proyek</a>
          </div>
        </div>

        {/* --- Kartu Proyek 3 --- */}
        <div className="project-card">
          <img src={projectImage3} alt="Desain Ulang Website" />
          <div className="card-content">
            <h3>None</h3>
            <p>None</p>
            <a href="#" className="btn btn-primary">Lihat Proyek</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;