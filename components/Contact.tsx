import React from 'react';

type Props = {};

export default function Contact({}: Props) {
  return (
    <section className="contact" id="contact">
      <div className="contactContent">
        <h2>Contact Me</h2>
        <form
          action="https://formspree.io/f/xlevrvag"
          method="POST"
          className="contactForm"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <button type="submit" className="contactButton">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
