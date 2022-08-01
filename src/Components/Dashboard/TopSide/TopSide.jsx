// import "./TopSide.scss";
// import { useState } from "react";
// import { FiPlus } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { addNewItem } from "./../../../Store/action/kif-action";
// import { Link } from "react-router-dom";
// import { FiArrowLeft } from "react-icons/fi";

// const options = [
//   "Github",
//   "Linkedin",
//   "Instagram",
//   "Facebook",
//   "Gmail",
//   "Portfolio",
//   "Telegram",
//   "Twitter",
//   "Pinterest",
//   "Youtube",
// ];

// const TopSide = ({ forms, todos }) => {
//   const userName = forms[0].data.username;
//   const [todo, setTodo] = useState({ path: "", logo: "" });
//   const filterTodos = todos.filter((t) => t.completed === true);
//   const dispatch = useDispatch();

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setTodo({ ...todo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addNewItem(todo));
//     setTodo({ path: "", logo: "" });
//   };

//   return (
//     <>
//       <section className="form">
//         <form className="form-wrap">
//           <select
//             name="logo"
//             id="logo"
//             value={todo.logo}
//             onChange={changeHandler}
//           >
//             <option>Choose Social</option>
//             {options.map((item) => (
//               <option value={item}>{item}</option>
//             ))}
//           </select>
//           <input
//             type="text"
//             name="path"
//             id="path"
//             placeholder="Username..."
//             value={todo.path}
//             onChange={changeHandler}
//           />
//           <button onClick={handleSubmit}>
//             <FiPlus />
//           </button>
//         </form>
//         <div className="form-details" dir="rtl">
//           <div className="form-details__right">
//             <div className="form-details__right-completed">
//               موارد تکمیل شده : {filterTodos.length}
//             </div>
//             <div className="form-details__right-links">
//               لینک های ایجاد شده : {todos.length}
//             </div>
//           </div>
//           <Link
//             className="form-details__left"
//             to={userName ? `/${userName}` : "/"}
//           >
//             {filterTodos.length > 0 && (
//               <>
//                 کیف لینک
//                 <span>
//                   <FiArrowLeft />
//                 </span>
//               </>
//             )}
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TopSide;

import "./TopSide.scss";
import { FiPlus, FiArrowLeft } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addNewItem } from "./../../../Store/action/kif-action";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

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

const initialValues = {
  logo: "",
  path: "",
};

const validationSchema = Yup.object({
  logo: Yup.string().required("مقداری وارد نشده است"),
  path: Yup.string().required("مقداری وارد نشده است"),
});

const TopSide = ({ forms, todos }) => {
  const userName = forms[0].data.username;
  const filterTodos = todos.filter((t) => t.completed === true);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addNewItem(values));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <>
      <section className="form">
        <form className="form-wrap" onSubmit={formik.handleSubmit}>
          <select name="logo" id="logo" {...formik.getFieldProps("logo")}>
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
            {...formik.getFieldProps("path")}
          />
          <button
            disabled={!formik.isValid}
            className={
              !formik.isValid ? "form-wrap__btn btn-false" : "form-wrap__btn"
            }
          >
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
          <Link
            className="form-details__left"
            to={userName ? `/${userName}` : "/"}
          >
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
    </>
  );
};

export default TopSide;
