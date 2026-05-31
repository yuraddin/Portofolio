import { useState } from 'react';

const Navigasi = () => {
  // State untuk melacak bahasa yang sedang aktif (default: ID)
  const [lang, setLang] = useState('ID');

// Fungsi untuk mengubah bahasa (Versi Final Anti-Nyangkut)
  const toggleLanguage = () => {
    const targetLang = lang === 'ID' ? 'EN' : 'ID';
    
    // Cari elemen dropdown Google Translate rahasia
    const googleSelect = document.querySelector('.goog-te-combo');
    
    if (googleSelect) {
      if (targetLang === 'EN') {
        // 1. Jika mau ke Inggris, suruh Google bekerja
        googleSelect.value = 'en';
        googleSelect.dispatchEvent(new Event('change'));
        
        // Ubah tampilan tombol menjadi EN
        setLang(targetLang);
      } else {
        // 2. Jika kembali ke ID, HANCURKAN ingatan Google
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
        
        // 3. Muat ulang (refresh) halaman secara instan untuk membersihkan sisa terjemahan robot.
        // Karena ini React, state akan otomatis kembali ke 'ID' dan teks aslimu 100% kembali normal!
        window.location.reload();
      }
    } else {
      console.log("Mesin Google belum siap dimuat, coba klik lagi sebentar.");
    }
  };

  return (
    <nav className="navbar">
      {/* Tambahkan translate="no" agar nama logomu tidak ikut diterjemahkan */}
      <a href="#home" className="nav-logo" translate="no">Yur</a>

      {/* Menu ditaruh di tengah/agak kiri */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Fitur Bahasa di ujung kanan */}
      {/* KUNCI PENTING: Tambahkan notranslate agar tulisan ID | EN tidak rusak diterjemahkan Google */}
      <div className="lang-switcher notranslate" onClick={toggleLanguage} translate="no">
        <span className={lang === 'ID' ? 'active-lang' : ''}>ID</span>
        <span className="lang-divider">|</span>
        <span className={lang === 'EN' ? 'active-lang' : ''}>EN</span>
      </div>
    </nav>
  );
};

export default Navigasi;