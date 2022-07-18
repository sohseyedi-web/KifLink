import React, { useState } from "react";
import InputForm from "./InputForm/InputForm";
import TodoList from "./TodoList/TodoList";

const BottomSide = () => {
  return (
    <div>
      <InputForm />
      <TodoList />
    </div>
  );
};

export default BottomSide;
