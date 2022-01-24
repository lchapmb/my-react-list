import React, { useState } from "react";
import "../App.css";

// need an array of items to loop through and display
// will need a way of assigning each sub-item to the correct top level todo
// will need tick boxes to mark as complete
// top level todo to be complete after all sub-tasks complete

const subtodoArray = [
  { text: "Task 1", key: 100001 },
  { text: "Task 2", key: 100002 },
  { text: "Task 3", key: 100003 },
];

export default function SubtodoList() {
  // handle subtask being checked
  const handleTaskCheck = (todo) => {
    console.log(`check ${todo.key}`);
  };

  return (
    <div className="subtodoList">
      {subtodoArray.map((todo) => (
        <ul className="todoItem" key={todo.key}>
          <li>
            {todo.key + " : " + todo.text}{" "}
            <input
              type="checkbox"
              name="complete"
              id={todo.key + "complete"}
              onClick={() => {
                handleTaskCheck(todo);
              }}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
