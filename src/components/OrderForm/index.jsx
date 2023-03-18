import React from "react";
import { useState } from "react";

import Container from "../../Layout/Container";
import classes from "./OrderForm.module.scss";
import formImg from "../../images/order.webp";

const initialData = {
  name: "",
  phone: "",
  descr: "",
};

const OrderForm = () => {
  const [fields, setFields] = useState(initialData);
  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFields(initialData);
  };

  return (
    <Container className={classes["order-form"]}>
      <h2 className={classes["order-form__title"]}>Order A Unique Backet!</h2>
      <form action="/" className={classes["order-form__form"]}>
        <div className={classes["order-form__fields"]}>
          <input
            className={classes["order-form__input"]}
            type="text"
            placeholder="Name*"
            onChange={handleChange}
            value={fields.name}
            name="name"
          />
          <input
            className={classes["order-form__input"]}
            type="tel"
            placeholder="Phone Number*"
            onChange={handleChange}
            value={fields.phone}
            name="phone"
          />
          <textarea
            className={classes["order-form__textarea"]}
            placeholder="Your Ideas*"
            onChange={handleChange}
            value={fields.descr}
            name="descr"
          />
          <button
            onClick={handleSubmit}
            className={classes["order-form__button"]}
            type="submit"
          >
            Send
          </button>
        </div>
        <img
          className={classes["order-form__image"]}
          src={formImg}
          alt="FormImg"
        />
      </form>
    </Container>
  );
};

export default OrderForm;
