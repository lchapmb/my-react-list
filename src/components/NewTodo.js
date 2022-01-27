import React from "react";
import { Input, Button } from "semantic-ui-react";

export default function NewToDo({ setTodoString, todoString, onSubmit }) {
  return (
    <>
      <Input
        onChange={(e) => {
          setTodoString(e.target.value);
        }}
        value={todoString}
        name={todoString}
        type="text"
        placeholder="Add todo"
      />
      <Button onClick={onSubmit} value="submit">
        Submit
      </Button>
    </>
  );
}
