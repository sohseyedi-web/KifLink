import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Container/Container";

const NotFound = () => {
  return (
    <Container>
      <div className="not">
        <div className="not-title">404 Error page</div>
        <p className="not-subtitle">با عرض پوزش، این صفحه وجود ندارد</p>
        <Link to={"/"}>صفحه اصلی</Link>
      </div>
    </Container>
  );
};

export default NotFound;
