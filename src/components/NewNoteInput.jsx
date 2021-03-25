import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionTodo } from "../store/todoReducer/action";

function NewNoteInput(props) {
  const [note, setNote] = useState("");

  const inputValueHandle = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(actionTodo(note));
    setNote("");
  };

  console.log(note);
  return (
    <div>
      <input
        onChange={inputValueHandle}
        type="text"
        value={note}
        name="note"
        placeholder="Note"
      />
      <button onClick={onSubmit}>Add note</button>
    </div>
  );
}

export default NewNoteInput;
