import './TopSide.scss';
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem } from "./../../../Store/action/kif-action";

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

const TopSide = () => {
  const [todo, setTodo] = useState({ title: "", logo: "" });
  const { todos } = useSelector((state) => state.kif);
  const filterTodos = todos.filter((t) => t.completed === true);
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
        <div className="form-details__completed">
          موارد تکمیل شده : {filterTodos.length}
        </div>
        <div className="form-details__links">
          لینک های ایجاد شده : {todos.length}
        </div>
      </div>
    </section>
  );
};

export default TopSide;
