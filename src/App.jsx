import React from "react";
import NewNoteInput from "./components/NewNoteInput";
import TodoListViex from "./components/TodoListViex";
import styled from "styled-components";

function App(props) {
  return (
    <TodoList>
      <NewNoteInput />
      <TodoListViex />
    </TodoList>
  );
}

export default App;

const TodoList = styled.div`
  width: 100%;
  margin: 0 auto;
`;
