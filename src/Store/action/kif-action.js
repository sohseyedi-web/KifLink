export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const COMPLETE_ITEM = "COMPLETE_ITEM";
export const ADD_FORM_DATA = "ADD_FORM_DATA";

// func for todolist
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

// func for todolist
// func for user form data
export const addNewFormData = (todo) => {
  return {
    type: ADD_FORM_DATA,
    payload: todo,
  };
};

// func for user form data
