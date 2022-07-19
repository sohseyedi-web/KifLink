import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../../../Store/action/kif-action";
import "./InputForm.scss";
import { FiPlus } from "react-icons/fi";

const options = [
  "github",
  "linkedin",
  "instagram",
  "facebook",
  "gmail",
  "website",
  "telegram",
  "twitter",
];

const InputForm = () => {
  const [todo, setTodo] = useState({ title: "", logo: "" });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(todo));
    setTodo({ path: "", logo: "" });
  };

  return (
    <section className="form">
      <form className="form-wrap">
        <select
          name="logo"
          id="logo"
          value={todo.logo}
          onChange={changeHandler}
        >
          <option>Choose Social</option>
          {options.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <input
          type="text"
          name="path"
          id="path"
          placeholder="link ..."
          value={todo.path}
          onChange={changeHandler}
        />
        <button onClick={handleSubmit}>
          <FiPlus />
        </button>
      </form>
      <div className="form-details" dir="rtl">
        <div className="form-details__completed">موارد تکمیل شده : 0</div>
        <div className="form-details__links">لینک های ایجاد شده : 0</div>
      </div>
    </section>
  );
};

export default InputForm;
