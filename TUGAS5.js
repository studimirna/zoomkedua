import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="container">
      <motion.div
        className="form-container"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Kontak Kami</h1>
        <form>
          <div>
            <label htmlFor="name">Nama:</label>
            <input type="text" id="name" name="Mirna Anjani" placeholder="Mirna Anjani" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="manjni2005@gmail.com" name="email" placeholder="manjni2005@gmail.com" />
          </div>
          <div>
            <label htmlFor="message">Pesan:</label>
            <textarea id="message" name="message" placeholder="Tulis pesan Anda..." />
          </div>
          <button type="submit">Kirim</button>
        </form>
      </motion.div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f7f7f7;
        }

        .form-container {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }

        h1 {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        label {
          font-weight: bold;
        }

        input, textarea {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        button {
          padding: 0.8rem;
          border: none;
          background-color: #007bff;
          color: white;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
