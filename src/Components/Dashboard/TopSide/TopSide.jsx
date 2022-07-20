import "./TopSide.scss";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem } from "./../../../Store/action/kif-action";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const options = [
  "Github",
  "Linkedin",
  "Instagram",
  "Facebook",
  "Gmail",
  "Portfolio",
  "Telegram",
  "Twitter",
  "Pinterest",
  "Youtube",
];

const TopSide = () => {
  const { todos } = useSelector((state) => state.kif);
  const { forms } = useSelector((state) => state.form);
  const userName = forms[0].data.username;
  const [todo, setTodo] = useState({ path: "", logo: "" });
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
          placeholder="Username..."
          value={todo.path}
          onChange={changeHandler}
        />
        <button onClick={handleSubmit}>
          <FiPlus />
        </button>
      </form>
      <div className="form-details" dir="rtl">
        <div className="form-details__right">
          <div className="form-details__right-completed">
            موارد تکمیل شده : {filterTodos.length}
          </div>
          <div className="form-details__right-links">
            لینک های ایجاد شده : {todos.length}
          </div>
        </div>
        <Link className="form-details__left" to={`/${userName}`}>
          {filterTodos.length > 0 && (
            <>
              کیف لینک
              <span>
                <FiArrowLeft />
              </span>
            </>
          )}
        </Link>
      </div>
    </section>
  );
};

export default TopSide;
