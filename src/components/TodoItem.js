import React, { createContext, useState } from "react";
import { Button, Segment, Card } from "semantic-ui-react";

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
    // need to change the button to reflect it is complete
    // need to track whether all subtasks are done, and complete the task if so
    // need to indicate task is done
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
      <Card.Content>
        <Card.Header as="h3" attached="top">
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
        </Card.Header>
        <Segment attached>
          <SubtodoList />
        </Segment>
      </Card.Content>
    </TodoItemContext.Provider>
  );
}
