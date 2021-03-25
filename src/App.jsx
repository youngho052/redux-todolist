import React from "react";
import NewNoteInput from "./components/NewNoteInput";
import TodoListViex from "./components/TodoListViex";
function App(props) {
  return (
    <div>
      <NewNoteInput />
      <TodoListViex />
    </div>
  );
}

export default App;
