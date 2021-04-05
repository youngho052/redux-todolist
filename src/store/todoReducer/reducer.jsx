import { ADD_TODO_LIST, DELETE_TODO_LIST } from "../types";

export const initialState = [
  {
    id: 0,
    text: "Todo-List 입니다.",
  },
];

export const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return [...state, action.payload];
    case DELETE_TODO_LIST:
      return [...action.payload];
    default:
      return state;
  }
};
