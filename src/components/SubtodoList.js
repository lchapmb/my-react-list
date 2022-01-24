import React, { useContext } from "react";

import { List, Button, Input } from "semantic-ui-react";

import "../App.css";

// need an array of items to loop through and display
// will need a way of assigning each sub-item to the correct top level todo
// will need tick boxes to mark as complete
// top level todo to be complete after all sub-tasks complete

import { TodoItemContext } from "./TodoItem";

export default function SubtodoList() {
  const {
    tasks,
    handleTaskCompleteToggle,
    subTodoString,
    setSubTodoString,
    onSubmit,
  } = useContext(TodoItemContext);

  return (
    <List celled>
      {tasks.map((todo) => (
        <List.Item key={todo.key}>
          <List.Content floated="left">{todo.text}</List.Content>
          <List.Content floated="right">
            <Button
              positive
              size="mini"
              onClick={() => {
                handleTaskCompleteToggle(todo.key);
              }}
            >
              Mark as Complete
            </Button>
          </List.Content>
        </List.Item>
      ))}
      <Input
        type="text"
        value={subTodoString}
        name={subTodoString}
        placeholder="Add subTodo"
        size="mini"
        onChange={(e) => {
          setSubTodoString(e.target.value);
        }}
      />
      <Button value="submit" size="mini" onClick={onSubmit}>
        Submit
      </Button>
    </List>
  );
}
