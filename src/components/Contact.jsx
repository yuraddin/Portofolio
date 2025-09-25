import React from 'react';
import './Contact.css'; // <- PASTIKAN BARIS INI ADA!
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="contact-content">
        <h1 className="page-title">Hubungi Saya</h1>
        <p className="contact-subheading">
          Punya pertanyaan atau ingin bekerja sama? Saya akan senang mendengarnya dari Anda! Cara terbaik untuk menghubungi saya adalah melalui email.
        </p>
        <a href="mailto:emailanda@contoh.com" className="contact-email-link">
          yuraddinaja@gmail.com
        </a>
        <div className="contact-socials">
          <a href="https://www.instagram.com/__yrdn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yuraddin-b0302b2aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://github.com/username_github_anda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;