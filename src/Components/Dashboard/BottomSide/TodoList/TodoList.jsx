import { useState } from "react";
import { FiEdit2, FiTrash, FiSave } from "react-icons/fi";
import github from "../../../../Assets/github.svg";
import linkedin from "../../../../Assets/linkedin.svg";
import instagram from "../../../../Assets/instagram.svg";
import facebook from "../../../../Assets/facebook.svg";
import gmail from "../../../../Assets/gmail.svg";
import portfolio from "../../../../Assets/computer.svg";
import telegram from "../../../../Assets/telegram.svg";
import twitter from "../../../../Assets/twitter.svg";
import pinterest from "../../../../Assets/pinterest.svg";
import youtube from "../../../../Assets/youtube.svg";

const imgProfile = [
  { id: 1, src: github, name: "Github" },
  { id: 2, src: linkedin, name: "Linkedin" },
  { id: 3, src: instagram, name: "Instagram" },
  { id: 4, src: facebook, name: "Facebook" },
  { id: 5, src: gmail, name: "Gmail" },
  { id: 6, src: portfolio, name: "Portfolio" },
  { id: 7, src: telegram, name: "Telegram" },
  { id: 8, src: twitter, name: "Twitter" },
  { id: 9, src: pinterest, name: "Pinterest" },
  { id: 10, src: youtube, name: "Youtube" },
];

const TodoList = ({ todo, onRemove, onCompleted, onUpdated }) => {
  const imgFilter = imgProfile.findIndex((i) => i.name === todo.task.logo);
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
            <div className="lists-content__details-img">
              <img
                src={imgProfile[imgFilter].src}
                alt={imgProfile[imgFilter].name}
              />
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
