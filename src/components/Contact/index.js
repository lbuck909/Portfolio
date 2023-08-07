import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const initialFormState = {
    name: '',
    email: '',
    message: '',
  };

  const [formState, setFormState] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? '' : 'Invalid Email address.');
    } else {
      setErrorMessage(value ? '' : `${name} is required.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Email Form', formState);
    }
  };

  const { name, email, message } = formState;

  return (
    <section>
      <form id="email-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

