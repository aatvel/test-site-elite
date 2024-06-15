import React, { useState } from "react";

import styles from "./style.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]+$/;

    if (!name) {
      errors.name = "Введите имя";
    } else if (!nameRegex.test(name)) {
      errors.name = "Имя должно содержать только буквы и пробелы";
    }

    if (!phone) {
      errors.phone = "Введите телефон";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Введите корректный номер телефона";
    }

    if (!accepted) errors.accepted = "Необходимо принять условия";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setMessage("Форма содержит ошибки. Пожалуйста, исправьте их.");
    } else {
      setMessage("Форма успешно отправлена!");
      setErrors({});
      setName("");
      setPhone("");
    }
  };

  return (
    <div className={styles.contact_form}>
      <div>
        <span>Оставить заявку</span>
        <p>
          Заполните форму и мы свяжемся с вами, чтобы узнать детали вашего
          проекта.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.form_group}>
            <label>Имя*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? styles.error : ""}
            />
            {errors.name && (
              <span className={styles.error_message}>{errors.name}</span>
            )}
          </div>
          <div className={styles.form_group}>
            <label>Телефон*</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? styles.error : ""}
            />
            {errors.phone && (
              <span className={styles.error_message}>{errors.phone}</span>
            )}
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.form_group}>
            <label className={styles.checkbox_container}>
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span className={styles.checkmark}></span>
              <span>
                Я принимаю <u>условия передачи информации</u>
              </span>
            </label>
            {errors.accepted && (
              <span className={styles.error_message}>{errors.accepted}</span>
            )}
          </div>
          <button type="submit">Связаться с нами</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;
