import { useState } from "react";
import { FiEdit2, FiTrash, FiSave } from "react-icons/fi";


const TodoList = ({ todos, todo, onRemove, onCompleted, onUpdated }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.task.path);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onUpdated(todo.id, editTodo);
    setIsEdit(false);
  };

  return (
    <div className="lists-content" key={todo.id}>
      {isEdit ? (
        <>
          <form className="lists-content__form" onSubmit={handleSubmitForm}>
            <input
              type="text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
            <button>ویرایش</button>
          </form>
        </>
      ) : (
        <>
          <div className="lists-content__details">
            <div
              className="lists-content__details-number"
              style={{
                background: todo.completed ? "#25ce9e" : "#d9376e",
              }}
            >
              {todo.completed ? "T" : "F"}
            </div>
            <div className="lists-content__details-address">
              {todo.task.logo === "Telegram"
                ? `t.me/${editTodo}`
                : editTodo && todo.task.logo === "Github"
                ? `github.com/${editTodo}`
                : editTodo && todo.task.logo === "Facebook"
                ? `facebook.com/${editTodo}`
                : editTodo && todo.task.logo === "Linkedin"
                ? `linkedin.com/in/${editTodo}`
                : editTodo && todo.task.logo === "Instagram"
                ? `instagram.com/${editTodo}`
                : editTodo && todo.task.logo === "Twitter"
                ? `twitter.com/${editTodo}`
                : editTodo && todo.task.logo === "Pinterest"
                ? `pinterest.com/${editTodo}`
                : editTodo && todo.task.logo === "Youtube"
                ? `youtube.com/${editTodo}`
                : editTodo}
            </div>
          </div>
          <div className="lists-content__action">
            <span
              className="lists-content__action-icon trash"
              onClick={onRemove}
            >
              <FiTrash size={28} />
            </span>
            <span
              className="lists-content__action-icon edit"
              onClick={() => setIsEdit(!isEdit)}
            >
              <FiEdit2 size={28} />
            </span>
            <span
              className="lists-content__action-icon check"
              onClick={onCompleted}
            >
              <FiSave size={28} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
