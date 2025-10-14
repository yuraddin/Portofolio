import { Outlet } from 'react-router-dom';
// 1. Anda sudah benar mengimpor Navigasi
import Navigasi from './components/Navigasi'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      {/* 2. Gunakan nama yang sama di sini */}
      <Navigasi /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;