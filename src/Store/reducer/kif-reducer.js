import {
  ADD_ITEM,
  COMPLETE_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
} from "../action/kif-action";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const kifReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      const addNewItem = [...state.todos, newItem];
      return { ...state, todos: addNewItem };
    }
    case REMOVE_ITEM: {
      const removeTodo = [...state.todos];
      const removeIndex = removeTodo.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const updateTodo = { ...removeTodo[removeIndex] };
      if (updateTodo.task.path) {
        updateTodo.task.path = "";
        updateTodo.completed = false;
        removeTodo[removeIndex] = updateTodo;
        return { ...state, todos: removeTodo };
      } else {
        const filterItem = removeTodo.filter(
          (todo) => todo.id !== action.payload.id
        );
        return { ...state, todos: filterItem };
      }
    }
    case COMPLETE_ITEM: {
      const comItem = [...state.todos];
      const comItemIndex = comItem.findIndex((c) => c.id === action.payload.id);
      const updateItem = { ...comItem[comItemIndex] };

      if (updateItem.task.path) {
        updateItem.completed = !updateItem.completed;
        comItem[comItemIndex] = updateItem;
        return { ...state, todos: comItem };
      } else {
        updateItem.completed = false;
        comItem[comItemIndex] = updateItem;
        return { ...state, todos: comItem };
      }
    }
    case EDIT_ITEM: {
      const editTodo = [...state.todos];
      const itemIndex = editTodo.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const updateTodo = { ...editTodo[itemIndex] };
      updateTodo.task.path = action.payload.updateTask;
      editTodo[itemIndex] = updateTodo;
      return { ...state, todos: editTodo };
    }
    default:
      return state;
  }
};

export default kifReducer;
