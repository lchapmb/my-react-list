import React, { useState } from "react";
import "../App.css";

// need an array of items to loop through and display
// will need a way of assigning each sub-item to the correct top level todo
// will need tick boxes to mark as complete
// top level todo to be complete after all sub-tasks complete

export default function SubtodoList() {
  const [subTodoString, setSubTodoString] = useState("");
  const [subtodoArray, setSubTodoArray] = useState([]);

  // handle new subItem
  const onSubmit = () => {
    setSubTodoArray(
      subtodoArray.concat([
        {
          text: subTodoString,
          key: Math.round((Math.random() + 1) * 100000).toString(),
        },
      ])
    );
    setSubTodoString("");
  };

  // handle subtask being checked
  const handleTaskCheck = (todo) => {
    console.log(`check ${todo.key}`);
    console.log(todo.key + "complete");
    const checkbox = document.querySelector("." + todo.key + "complete");
    console.log(checkbox.checked);
  };

  return (
    <div className="subtodoList">
      <ul>
        {subtodoArray.map((todo) => (
          <li className="todoItem" key={todo.key}>
            {todo.key + " : " + todo.text}{" "}
            <input
              type="checkbox"
              value="complete"
              id={todo.key + "complete"}
              onClick={() => {
                handleTaskCheck(todo);
              }}
            />
          </li>
        ))}
        <li>
          <input
            type="text"
            value={subTodoString}
            name={subTodoString}
            placeholder="Add subTodo"
            onChange={(e) => {
              setSubTodoString(e.target.value);
            }}
          />
          <button value="submit" onClick={onSubmit}>
            Submit
          </button>
        </li>
      </ul>
    </div>
  );
}
