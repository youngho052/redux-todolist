import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoReducer/action";
import styled from "styled-components";

function TodoListViex() {
  const item = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const deleteItems = (idx) => {
    const items = item.filter((_, i) => {
      return i !== idx;
    });
    dispatch(deleteTodo(items));
  };

  return (
    <ListContainer>
      {item.map((item, index) => {
        return (
          <List>
            <P>{item.text}</P>
            <DeleteSpan onClick={() => deleteItems(index)}>삭제</DeleteSpan>
          </List>
        );
      })}
    </ListContainer>
  );
}

export default TodoListViex;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  margin: 0 auto;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
`;

const P = styled.p``;

const DeleteSpan = styled.div``;
