import styles from './ContactStyles.module.css';
import React from 'react';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form action="">
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input 
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input 
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea 
            name="message"
            id="message"
            placeholder="Message"
            required 
          ></textarea>
        </div>
        <input className={`${styles.hover} ${styles.btn}`} type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
