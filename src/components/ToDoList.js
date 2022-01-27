import React, { useContext, useState } from "react";
import { Card } from "semantic-ui-react";
import TodoItem from "./TodoItem";

import { TodoFormContext } from "./TodoForm";

export default function ToDoList() {
  const { listArray, handleTodoDelete } = useContext(TodoFormContext);

  return (
    <Card.Group style={{ display: "flex", justifyContent: "space-between" }}>
      {listArray.map((todo) => {
        return (
          <Card>
            <TodoItem
              handleTodoDelete={handleTodoDelete}
              todo={todo}
              key={todo.key}
            />
          </Card>
        );
      })}
    </Card.Group>
  );
}
