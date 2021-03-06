import "./KifPage.scss";
import { FiLink } from "react-icons/fi";
import User from "../../../Assets/Avatar.svg";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const KifPage = () => {
  const { todos } = useSelector((state) => state.kif);
  const { forms } = useSelector((state) => state.form);
  const showTodo = todos.filter((t) => t.completed === true);

  return (
    <>
      <Helmet>
        <title>کیف لینک</title>
      </Helmet>
      <div className="list container">
        <div className="list-content">
          <div className="list-content__details">
            <img src={User} alt="" />
            {forms.map((item) => (
              <>
                <div className="list-content__details-name" key={item.id}>
                  <div>{item.data.fullname}</div>
                  <div>{item.data.jobs}</div>
                </div>
              </>
            ))}
          </div>
          {showTodo.map((show) => (
            <div key={show.id} className="list-content__box">
              <img
                className="list-content__box-logo"
                src={show.logo}
                alt={show.name}
              />
              <div className="list-content__box-name">
                {show.task.logo === "Gmail" ? show.task.path : show.task.logo}
              </div>
              <a
                href={
                  show.task.logo === "Telegram"
                    ? `https://t.me/${show.task.path}`
                    : show.task.path && show.task.logo === "Github"
                    ? `https://github.com/${show.task.path}`
                    : show.task.path && show.task.logo === "Facebook"
                    ? `https://facebook.com/${show.task.path}`
                    : show.task.path && show.task.logo === "Linkedin"
                    ? `https://linkedin.com/in/${show.task.path}`
                    : show.task.path && show.task.logo === "Instagram"
                    ? `https://instagram.com/${show.task.path}`
                    : show.task.path && show.task.logo === "Twitter"
                    ? `https://twitter.com/${show.task.path}`
                    : show.task.path && show.task.logo === "Pinterest"
                    ? `https://pinterest.com/${show.task.path}`
                    : show.task.path && show.task.logo === "Youtube"
                    ? `https://youtube.com/${show.task.path}`
                    : show.task.path && show.task.logo === "Gmail"
                    ? false
                    : `https://${show.task.path}`
                }
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FiLink size={28} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KifPage;
