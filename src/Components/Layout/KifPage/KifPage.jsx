import "./KifPage.scss";
import { FiLink } from "react-icons/fi";
import User from "../../../Assets/Avatar.svg";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const KifPage = () => {
  const { todos } = useSelector((state) => state.kif);
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
            <div className="list-content__details-name">
              <div>سهیل سیدی</div>
              <div>فرانت اند دولوپر</div>
            </div>
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
                  show.task.logo === "Gmail"
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
