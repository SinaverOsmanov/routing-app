import React, { useState } from "react";
import { routeString } from "../utils/routeString";
import {
  firstLetterToUppercase,
  isStringWithCyrilic,
  trimString,
} from "../utils/functionForString";
import { reduceFunctions } from "../utils/reduceFunctions";

export default function NodeForm({ onSubmitForm }) {
  const [form, setForm] = useState({ title: "", route: "", nodes: [] });

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isMatched = isStringWithCyrilic(form.title);
    if (!isMatched) {
      const data = {
        ...form,
        title: reduceFunctions(form.title, [
          firstLetterToUppercase,
          trimString,
        ]),
        route: routeString(form.route),
      };

      onSubmitForm(data);
      setForm({ ...form, title: "", route: "" });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Заголовок</label>
        <input
          id="title"
          type="text"
          name="title"
          value={form.title}
          required
          onChange={handleChange}
        />
        <label htmlFor="route">Путь</label>
        <input
          id="route"
          type="text"
          name="route"
          value={form.route}
          required
          onChange={handleChange}
        />
        <button>Добавить узел</button>
      </form>
    </>
  );
}
