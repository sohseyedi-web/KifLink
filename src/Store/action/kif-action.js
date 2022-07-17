export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const COMPLETE_ITEM = "COMPLETE_ITEM";

export const addNewItem = (todo) => {
  return {
    type: ADD_ITEM,
    payload: todo,
  };
};

export const removeItem = (todo) => {
  return {
    type: REMOVE_ITEM,
    payload: todo,
  };
};
export const editItem = (todo) => {
  return {
    type: EDIT_ITEM,
    payload: todo,
  };
};
export const completeItem = (todo) => {
  return {
    type: COMPLETE_ITEM,
    payload: todo,
  };
};
