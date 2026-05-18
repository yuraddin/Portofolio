import { useState } from 'react';

const Navigasi = () => {
  // State untuk melacak bahasa yang sedang aktif (default: ID)
  const [lang, setLang] = useState('ID');

  // Fungsi untuk mengubah bahasa bolak-balik saat diklik (Sekarang jadi Remote Google)
  const toggleLanguage = () => {
    // 1. Tentukan bahasa tujuan berikutnya
    const targetLang = lang === 'ID' ? 'EN' : 'ID';
    const googleLangCode = targetLang === 'EN' ? 'en' : 'id';

    // 2. Cari elemen dropdown Google Translate rahasia yang sudah kita sembunyikan
    const googleSelect = document.querySelector('.goog-te-combo');
    
    if (googleSelect) {
      // 3. Ubah nilai dropdown Google tersebut
      googleSelect.value = googleLangCode;
      
      // 4. Paksa Google untuk langsung menerjemahkan halaman saat itu juga
      googleSelect.dispatchEvent(new Event('change'));
      
      // 5. Ubah state React agar tampilan warna tombol 'ID | EN' mu ikut berubah
      setLang(targetLang);
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