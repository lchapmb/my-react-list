import React, { useState } from "react";

export default function TodoForm() {
  const [todoString, setTodoString] = useState("");
  const [listArray, setListArray] = useState([]);

  const handleOnChange = (event) => {
    // event => is the element that the function was called on, it contains the html element
    // so we are going into the target html event and getting the value which is the value of the input
    setTodoString(event.target.value);
  };

  const onSubmit = () => {
    console.log(`A todo was added: ${todoString}`);
    setListArray(
      listArray.concat([
        {
          text: todoString,
          key: Math.round((Math.random() + 1) * 100000).toString(),
        },
      ])
    );
    setTodoString("");
  };

  const handleTodoDelete = (todoItem) => {
    // handle the deletion of a todo item
    // delete todo
    console.log(todoItem);
  };

  return (
    <div>
      {/* <ul className="todoList">
        {listArray.map((todo, index) => (
          <li key={todo + "_" + index}>{todo}</li>
        ))}
      </ul> */}
      <div
        style={{
          width: "100%",
          padding: 10,
          margin: 10,
        }}
      >
        {listArray.map((todo, index) => (
          <div
            style={{
              borderRadius: 5,
              backgroundColor: "lightblue",
              padding: 5,
              margin: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
            key={todo.key}
          >
            <div>{todo.key + " : " + todo.text}</div>
            <div>
              <button
                onClick={() => {
                  handleTodoDelete(todo);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <br />

      <input
        onChange={handleOnChange}
        // value={this.state.todoString}
        value={todoString}
        type="text"
        placeholder="Add todo"
      />
      <button onClick={onSubmit} value="submit">
        SUBMIT
      </button>
    </div>
  );
}
