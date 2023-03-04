import React, { useState } from 'react';
import '../../styles/pages/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <section id="Contact">
      <div className="text-center">
        <div style={{ fontFamily: 'Oswald, sans-serif' }}>
          <img src="images/nobk2.png" className="rounded m-5" alt="logo" height="200" width="200" />
          <h4>Contacto</h4>
          ¡Gracias por contactarnos!<hr></hr>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
