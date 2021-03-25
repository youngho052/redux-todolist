import React from "react";
import { useSelector } from "react-redux";

function TodoListViex(props) {
  const item = useSelector((state) => state.todoList);
  console.log(item);
  return (
    <>
      {item.map((item, index) => {
        return (
          <p>
            {item.text}
            <span style={{ marginLeft: "50px" }}>삭제</span>
          </p>
        );
      })}
    </>
  );
}

export default TodoListViex;
