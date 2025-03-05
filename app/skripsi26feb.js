'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  // Effect to track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <a href="#bab1" className={activeSection === 'bab1' ? 'active' : ''}>Bab 1</a>
        <a href="#bab2" className={activeSection === 'bab2' ? 'active' : ''}>Bab 2</a>
        <a href="#bab3" className={activeSection === 'bab3' ? 'active' : ''}>Bab 3</a>
        <a href="#bab4" className={activeSection === 'bab4' ? 'active' : ''}>Bab 4</a>
        <a href="#bab5" className={activeSection === 'bab5' ? 'active' : ''}>Bab 5</a>
      </div>

      <div className="content">
        <section id="bab1">
          <div className={`sticky-heading ${activeSection === 'bab1' ? 'highlight' : ''}`}>
            <h2>Bab 1: Pendahuluan</h2>
          </div>
          <p>
            Ini adalah teks Bab 1, tempat di mana Anda akan menulis pendahuluan untuk skripsi Anda. Bab 1 umumnya mengandung latar belakang penelitian, rumusan masalah, tujuan penelitian, dan manfaat penelitian. 
            Pada bagian ini, Anda akan memberikan pembaca pemahaman tentang topik penelitian yang akan Anda bahas secara mendalam.
            <br /><br />
            Latar belakang penelitian menjelaskan mengapa topik ini penting untuk diteliti, serta bagaimana penelitian ini dapat memberikan kontribusi untuk pengembangan ilmu pengetahuan. 
            Rumusan masalah membantu untuk menyempitkan fokus penelitian dan menetapkan batasan penelitian. 
            Tujuan penelitian menjelaskan apa yang ingin dicapai melalui penelitian, sedangkan manfaat penelitian menyajikan potensi dampak atau aplikasi dari penelitian tersebut.
          </p>
          <p>
            Bab 1 ini juga memberikan gambaran umum tentang struktur penelitian yang akan dilanjutkan di bab-bab berikutnya. Penelitian ini akan menelaah beberapa pertanyaan kunci dan akan mengkaji teori-teori yang ada dalam bidang ini.
          </p>
        </section>

        <section id="bab2">
          <div className={`sticky-heading ${activeSection === 'bab2' ? 'highlight' : ''}`}>
            <h2>Bab 2: Tinjauan Pustaka</h2>
          </div>
          <p>
            Bab 2, Tinjauan Pustaka, memberikan dasar teori dan hasil penelitian sebelumnya yang relevan dengan topik skripsi Anda. 
            Di bagian ini, Anda akan mengulas literatur yang telah ada mengenai topik penelitian Anda dan menyusun teori yang akan digunakan untuk mendalami masalah penelitian.
            <br /><br />
            Tinjauan pustaka ini akan mengidentifikasi kesenjangan dalam penelitian sebelumnya, yang kemudian akan menjadi dasar untuk penelitian Anda. 
            Anda perlu mengorganisir tinjauan pustaka berdasarkan tema atau subtopik yang relevan dengan penelitian Anda, serta mencatat kesimpulan penting dari penelitian yang ada.
          </p>
          <p>
            Bab ini juga memberikan gambaran tentang konteks teori yang relevan dengan penelitian Anda dan bagaimana teori tersebut dapat membantu dalam menjawab pertanyaan penelitian.
          </p>
        </section>

        <section id="bab3">
          <div className={`sticky-heading ${activeSection === 'bab3' ? 'highlight' : ''}`}>
            <h2>Bab 3: Metodologi</h2>
          </div>
          <p>
            Bab 3 menguraikan metodologi yang digunakan dalam penelitian ini. Di bagian ini, Anda akan menjelaskan secara rinci pendekatan penelitian yang diambil, jenis penelitian yang digunakan, dan teknik pengumpulan data yang diterapkan.
            <br /><br />
            Penelitian ini menggunakan pendekatan kualitatif atau kuantitatif, tergantung pada tujuan penelitian dan sifat data yang akan dikumpulkan. Anda juga harus menjelaskan siapa yang menjadi sampel dalam penelitian ini, bagaimana instrumen penelitian dirancang, dan prosedur yang diikuti dalam pengumpulan dan analisis data.
            <br /><br />
            Misalnya, dalam penelitian kualitatif, Anda bisa menggunakan wawancara mendalam atau diskusi kelompok terfokus, sementara dalam penelitian kuantitatif, Anda bisa menggunakan survei dengan kuesioner. Bab ini memberikan pembaca pemahaman tentang bagaimana data akan dikumpulkan dan dianalisis untuk menjawab pertanyaan penelitian.
          </p>
        </section>

        <section id="bab4">
          <div className={`sticky-heading ${activeSection === 'bab4' ? 'highlight' : ''}`}>
            <h2>Bab 4: Hasil dan Pembahasan</h2>
          </div>
          <p>
            Bab 4 menyajikan hasil penelitian yang telah dikumpulkan, serta pembahasan mengenai hasil tersebut. Anda akan memaparkan data yang diperoleh, baik dalam bentuk tabel, grafik, ataupun analisis naratif.
            <br /><br />
            Setelah memaparkan data, bab ini juga akan membahas makna atau interpretasi dari hasil yang diperoleh. 
            Anda akan menghubungkan temuan-temuan ini dengan literatur yang telah dibahas di Bab 2 dan membandingkan hasil penelitian Anda dengan penelitian sebelumnya untuk melihat apakah ada kesamaan atau perbedaan.
            <br /><br />
            Pembahasan ini juga dapat mencakup keterbatasan penelitian dan implikasi temuan Anda untuk praktik atau teori dalam bidang tersebut.
          </p>
        </section>

        <section id="bab5">
          <div className={`sticky-heading ${activeSection === 'bab5' ? 'highlight' : ''}`}>
            <h2>Bab 5: Kesimpulan dan Saran</h2>
          </div>
          <p>
            Bab 5 adalah bab penutup yang merangkum hasil-hasil utama dari penelitian dan memberikan saran untuk penelitian di masa depan atau aplikasi praktis dari temuan penelitian Anda.
            <br /><br />
            Di bagian kesimpulan, Anda akan memberikan ringkasan dari temuan utama yang dapat menjawab pertanyaan penelitian yang diajukan di awal. Anda akan menyoroti kontribusi penelitian Anda terhadap ilmu pengetahuan atau praktik di bidang yang diteliti.
            <br /><br />
            Pada bagian saran, Anda akan memberikan rekomendasi berdasarkan hasil penelitian, baik untuk penelitian selanjutnya maupun untuk praktik yang relevan. Ini adalah kesempatan untuk menawarkan ide atau arah yang dapat dikembangkan oleh peneliti lain di masa depan.
          </p>
          <p>
            Sebagai tambahan, Bab 5 juga dapat menyarankan langkah-langkah yang perlu diambil untuk mengatasi masalah yang ditemukan selama penelitian atau saran yang dapat diterapkan oleh para profesional di lapangan.
          </p>
        </section>
      </div>
    </>
  );
}
