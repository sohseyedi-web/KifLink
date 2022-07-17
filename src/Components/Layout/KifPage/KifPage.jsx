import "./KifPage.scss";
import { FiLink } from "react-icons/fi";
import User from "../../../Assets/Avatar.svg";
import { Helmet } from "react-helmet";

const KifPage = () => {

  const showTodo = []

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
                {show.name === "Gmail" ? show.path : show.name}
              </div>
              <a
                href={show.name === "Gmail" ? false : `https://${show.path}`}
                target={"_blank"}
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
