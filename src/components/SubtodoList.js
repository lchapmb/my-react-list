import React, { useContext, useState } from "react";

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
          <List.Content>Lena</List.Content>
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

  //   return (
  //     <div className="subtodoList">
  //       <ul>
  //         {tasks.map((todo) => (
  //           <li className="todoItem" key={todo.key}>
  //             {todo.key + " : " + todo.text}{" "}
  //             <input
  //               type="checkbox"
  //               value="complete"
  //               id={todo.key + "complete"}
  //               onClick={() => {
  //                 handleTaskCompleteToggle(todo.key);
  //               }}
  //             />
  //           </li>
  //         ))}
  //         <li>
  //           <input
  //             type="text"
  //             value={subTodoString}
  //             name={subTodoString}
  //             placeholder="Add subTodo"
  //             onChange={(e) => {
  //               setSubTodoString(e.target.value);
  //             }}
  //           />
  //           <button value="submit" onClick={onSubmit}>
  //             Submit
  //           </button>
  //         </li>
  //       </ul>
  //     </div>
  //   );
}
