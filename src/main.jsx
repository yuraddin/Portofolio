import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './index.css'

// 1. Membuat daftar rute/halaman
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App.jsx akan menjadi layout utama
    children: [
      {
        path: "/",
        element: <Hero />, // Halaman utama akan menampilkan komponen Hero
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// 2. Memberikan daftar rute ke aplikasi
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)