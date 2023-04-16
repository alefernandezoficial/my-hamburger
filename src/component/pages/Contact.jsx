import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/pages/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si los campos están en blanco
    if (!name || !email || !message) {
      setErrorMessage('Por favor, complete todos los campos');
      return;
    }

    emailjs.sendForm('service_ox7aili', 'template_sbu6hcw', event.target, 'rjcSU1aj5GcjvyJkL', { name, email, message })
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Se ha producido un error al enviar el mensaje');
      });
  };

  return (
    <section id="Contact">
      <div className="text-center">
        <div style={{ fontFamily: 'Oswald, sans-serif' }}>
          <img src="images/nobk2.png" className="rounded m-5" alt="logo" height="200" width="200" />
          <h4>Contacto</h4>
          ¡Gracias por contactarnos!<hr></hr>
        </div>
        {messageSent ? (
          <div className="alert alert-success" role="alert">
            ¡Mensaje enviado correctamente!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;