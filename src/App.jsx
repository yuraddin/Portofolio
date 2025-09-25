import { Outlet } from 'react-router-dom'; // Impor Outlet
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Outlet adalah tempat konten halaman (Hero, About, dll.) akan dirender */}
      </main>
      <Footer />
    </div>
  );
}

export default App;