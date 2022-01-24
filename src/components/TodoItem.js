import React, { createContext, useContext, useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";

import SubtodoList from "./SubtodoList";

export const TodoItemContext = createContext();

export default function TodoItem({ handleTodoDelete, todo }) {
  const [tasks, setTasks] = useState([]);
  const [subTodoString, setSubTodoString] = useState("");

  const onSubmit = () => {
    setTasks(
      tasks.concat([
        {
          text: subTodoString,
          key: Math.round((Math.random() + 1) * 100000).toString(),
          isCompleted: false,
        },
      ])
    );
    setSubTodoString("");
  };

  const handleTaskCompleteToggle = (taskKey) => {
    // this handles marking the task as complete
    setTasks(
      tasks.map((task) => {
        if (task.key === taskKey) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      })
    );
  };

  return (
    <TodoItemContext.Provider
      value={{
        tasks,
        setTasks,
        subTodoString,
        setSubTodoString,
        onSubmit,
        handleTaskCompleteToggle,
      }}
    >
      <Segment basic>
        <Header as="h3" attached="top">
          {todo.text}
          <Button
            floated="right"
            size="mini"
            negative
            onClick={() => {
              handleTodoDelete(todo);
            }}
          >
            DELETE
          </Button>
        </Header>
        <Segment attached>
          <SubtodoList />
        </Segment>
      </Segment>
    </TodoItemContext.Provider>
  );
}
