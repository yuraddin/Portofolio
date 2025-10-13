import React from 'react';
import './Utama.css'; // Menggunakan file CSS yang baru
import fotoProfil from '../assets/Profil.png'; // Pastikan nama file foto/logo Anda benar
import { FiInstagram, FiLinkedin, FiDownload } from 'react-icons/fi';

// Nama komponen diubah dari Hero menjadi Utama
const Utama = () => { 
  return (
    // className diubah agar konsisten
    <section className="utama-container">
      <div className="utama-content">
        <p className="utama-subtitle">YURADDIN</p>
        <h1 className="utama-title">
          HAYY<br />
          I'M YURADDIN
        </h1>
        <p className="utama-description">
          Mahasiswa Program Studi Teknik Komputer yang Memiliki Minat Besar Pada AI dan Machine Learning Serta Berpengalaman dalam Pengembangan Web dan Aplikasi Mobile.
        </p>

        {/* Bagian tombol ini bisa tetap menggunakan className lama agar tidak perlu mengubah CSS-nya */}
        <div className="hero-buttons">
          <a href="/CV.pdf" className="btn btn-primary" download="Yuraddin_CV.pdf">
            <FiDownload style={{ marginRight: '8px' }} />
            Download CV
          </a>
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

      <div className="utama-image">
        <img src={fotoProfil} alt="Foto Profil" />
        <div className="decorative-sphere sphere1"></div>
        <div className="decorative-sphere sphere2"></div>
      </div>
    </section>
  );
};

// Pastikan export juga diubah
export default Utama;