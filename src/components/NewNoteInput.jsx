import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionTodo } from "../store/todoReducer/action";
import styled from "styled-components";

function NewNoteInput() {
  const [note, setNote] = useState("");

  const inputValueHandle = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (note) {
      dispatch(actionTodo(note));
    }
    setNote("");
  };

  return (
    <TodoListContainer>
      <Input
        onChange={inputValueHandle}
        type="text"
        value={note}
        name="note"
        placeholder="Note"
      />
      <Button onClick={onSubmit}>Add note</Button>
    </TodoListContainer>
  );
}

export default NewNoteInput;

const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 300px;
  height: 25px;
  outline: none;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 20px;
`;
