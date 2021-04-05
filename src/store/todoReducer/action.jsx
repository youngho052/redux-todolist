import { ADD_TODO_LIST, DELETE_TODO_LIST } from "../types";

let autoId = 1;

export const actionTodo = (value) => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      id: autoId++,
      text: value,
    },
  };
};

export const deleteTodo = (value) => {
  return {
    type: DELETE_TODO_LIST,
    payload: value,
  };
};
