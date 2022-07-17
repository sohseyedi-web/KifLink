import {
  ADD_ITEM,
  COMPLETE_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM,
} from "../action/kif-action";

import { v4 as uuidv4 } from "uuid";

const kifReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = {
        ...state,
        id: uuidv4(),
        task: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      const addNewItem = [...state, newItem];
      return addNewItem;
    }

    default:
      return state;
  }
};


export default kifReducer
