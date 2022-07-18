import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../../../Store/action/kif-action";
import "./InputForm.scss";
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
    <form className="form">
      <div className="form-box">
        <input
          type="text"
          name="logo"
          id="logo"
          placeholder="Social Media ..."
          value={todo.logo}
          onChange={changeHandler}
        />
      </div>
      <div className="form-box">
        <input
          type="text"
          name="path"
          id="path"
          placeholder="link ..."
          value={todo.path}
          onChange={changeHandler}
        />
      </div>
      <button onClick={handleSubmit}>+</button>
    </form>
  );
};

export default InputForm;
