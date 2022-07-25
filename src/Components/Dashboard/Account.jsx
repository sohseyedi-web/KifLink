import Container from "../../Container/Container";
import TopSide from "./TopSide/TopSide";
import BottomSide from "./BottomSide/BottomSide";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Account = () => {
  const { todos } = useSelector((state) => state.kif);
  const { forms } = useSelector((state) => state.form);
  const hasForm = forms.length === 0;

  return (
    <Container>
      {hasForm ? (
        <Navigate replace to={"/edit"} />
      ) : (
        <div className="container">
          <TopSide todos={todos} forms={forms} />
          <BottomSide />
        </div>
      )}
    </Container>
  );
};

export default Account;
