import { useDispatch, useSelector } from "react-redux";
import { FiEdit2, FiTrash, FiCheck } from "react-icons/fi";

import "./TodoList.scss";
import { removeItem, completeItem } from "../../../../Store/action/kif-action";

// const imgProfile = [
//   { id: 1, src: github, name: "Github" },
//   { id: 2, src: linkedin, name: "Linkedin" },
//   { id: 3, src: instagram, name: "Instagram" },
//   { id: 4, src: facebook, name: "Facebook" },
// ];

const TodoList = () => {
  const { todos } = useSelector((state) => state.kif);
  const dispatch = useDispatch();

  return (
    <section className="lists">
      {todos.map((todo) => (
        <div className="lists-content" key={todo.id}>
          <div className="lists-content__details ">
            <div className="lists-content__details-img">
              <img src={todo.task.logo} alt={todo.task.logo} />
            </div>
            <div className="lists-content__details-address">
              {todo.task.path}
            </div>
          </div>
          <div className="lists-content__action">
            <span
              className="lists-content__action-icon trash"
              onClick={() => dispatch(removeItem(todo))}
            >
              <FiTrash size={28} />
            </span>
            <span className="lists-content__action-icon edit">
              <FiEdit2 size={28} />
            </span>
            <span
              className="lists-content__action-icon"
              onClick={() => dispatch(completeItem(todo))}
            >
              <FiCheck size={28} />
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
