'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mengurangi faktor zoom agar tidak terlalu besar
  const scale = Math.min(1 + scrollPosition / 5000, 1.1);  // Maksimal zoom hanya 1.1x

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <h1>My Projects</h1>

      <div
        className="project-card"
        style={{
          transition: 'transform 0.3s ease-in-out',
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="pantai1.jpg"  // Pastikan gambar ada di folder /public/images
          alt="Pantai Sunset"
          style={{
            width: '80%',    // Menyesuaikan ukuran gambar dengan lebar container
            maxWidth: '600px', // Set batas maksimal ukuran gambar
            height: 'auto',
            borderRadius: '8px',
            transition: 'transform 0.3s ease-in-out',
            transform: `scale(${scale})`, // Efek zoom hanya pada gambar
            display: 'block',  // Agar gambar terpusat
            margin: '0 auto',  // Agar gambar terpusat di dalam container
          }}
        />
        <h2>Pantai Sunset</h2>
        <p>
          Nikmati keindahan matahari terbenam di pantai yang tenang. Pemandangan yang
          memukau ini memberikan pengalaman relaksasi yang luar biasa. Pantai ini adalah
          tempat yang sempurna untuk bersantai dan menikmati suasana alam yang damai.
        </p>
      </div>

      <div
        className="project-card"
        style={{
          transition: 'transform 0.3s ease-in-out',
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="pantai2.jpeg"  // Pastikan gambar ada di folder /public/images
          alt="Pantai Berpasir Putih"
          style={{
            width: '80%',    // Menyesuaikan ukuran gambar dengan lebar container
            maxWidth: '600px', // Set batas maksimal ukuran gambar
            height: 'auto',
            borderRadius: '8px',
            transition: 'transform 0.3s ease-in-out',
            transform: `scale(${scale})`, // Efek zoom hanya pada gambar
            display: 'block',  // Agar gambar terpusat
            margin: '0 auto',  // Agar gambar terpusat di dalam container
          }}
        />
        <h2>Pantai Berpasir Putih</h2>
        <p>
          Pantai ini dikenal dengan pasir putihnya yang lembut dan air laut yang jernih.
          Menyusuri pantai berpasir putih memberikan rasa ketenangan dan kedamaian. Pantai ini
          sangat cocok untuk berenang atau berjalan-jalan santai di tepi laut.
        </p>
      </div>

      <div
        className="project-card"
        style={{
          transition: 'transform 0.3s ease-in-out',
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="pantai3.jpg"  // Pastikan gambar ada di folder /public/images
          alt="Pantai Tropis"
          style={{
            width: '80%',    // Menyesuaikan ukuran gambar dengan lebar container
            maxWidth: '600px', // Set batas maksimal ukuran gambar
            height: 'auto',
            borderRadius: '8px',
            transition: 'transform 0.3s ease-in-out',
            transform: `scale(${scale})`, // Efek zoom hanya pada gambar
            display: 'block',  // Agar gambar terpusat
            margin: '0 auto',  // Agar gambar terpusat di dalam container
          }}
        />
        <h2>Pantai Tropis</h2>
        <p>
          Dengan air laut yang sangat biru dan pepohonan tropis yang rindang, pantai ini 
          adalah surga bagi para penggemar alam. Ideal untuk snorkeling, bermain air, atau hanya
          bersantai menikmati angin laut yang sejuk.
        </p>
      </div>
    </div>
  );
}
