import { ADD_FORM_DATA } from "./../action/kif-action";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  forms: localStorage.getItem("forms")
    ? JSON.parse(localStorage.getItem("forms"))
    : [],
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA: {
      const newData = {
        id: uuidv4(),
        data: action.payload,
        createdAt: new Date().toISOString(),
      };
      const addNewItem = [...state.forms, newData];
      localStorage.setItem("forms", JSON.stringify(state.forms));
      return { ...state, forms: addNewItem };
    }
    default:
      return state;
  }
};

export default formReducer;
