import { Outlet } from 'react-router-dom';
// DIUBAH: 'navbar' menjadi 'Navbar' agar konsisten
import Navbar from './components/navbar'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;