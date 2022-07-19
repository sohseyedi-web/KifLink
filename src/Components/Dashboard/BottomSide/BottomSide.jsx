import { useDispatch, useSelector } from "react-redux";
import {
  completeItem,
  removeItem,
  editItem,
} from "../../../Store/action/kif-action";
import TodoList from "./TodoList/TodoList";
import styled from "styled-components";
import "./BottomSide.scss";

const BottomSide = () => {
  const { todos } = useSelector((state) => state.kif);
  const dispatch = useDispatch();

  const Text = styled.div`
    font-size: 1.5rem;
    color: #252525;
    font-weight: 600;
    text-align: center;
    width: 100%;
  `;

  const editItemHandler = (id, updateTodo) => {
    dispatch(editItem({ id, updateTodo }));
  };

  return (
    <section className="lists">
      {todos.length === 0 ? (
        <Text>... موردی وجود ندارد ...</Text>
      ) : (
        todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            onRemove={() => dispatch(removeItem(todo))}
            onCompleted={() => dispatch(completeItem(todo))}
            onUpdated={editItemHandler}
          />
        ))
      )}
    </section>
  );
};

export default BottomSide;
