import "./KifPage.scss";
import Avatar from "../../../Assets/Avatar.svg";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import User from './User/User';

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
            <img src={Avatar} alt="" />
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
            <User key={show.id} show={show} />
          ))}
        </div>
      </div>
    </>
  );
};

export default KifPage;
