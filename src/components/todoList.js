import React, { useState } from "react";

export default function TodoList() {
  const [listArray, setListArray] = useState([]);

  const handleTodoDelete = (todoItem) => {
    // callback to compare key of listItem and key of todoItem clicked for delete
    const checkForItem = (listItem) => {
      return listItem.key !== todoItem.key;
    };

    // creates new array by filtering the clicked item from the array in state
    const newItemList = listArray.filter(checkForItem);

    // sets state with the new array
    setListArray(newItemList);

    // setListArray(listArray.filter(item => item.key != todoItem.key))
  };

  return (
    <div className="todoList">
      <div
        style={{
          width: "100%",
          padding: 10,
          margin: 10,
        }}
      >
        {listArray.map((todo, index) => (
          <div
            className="listItem"
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
        onChange={(e) => {
          setTodoString(e.target.value);
        }}
        value={todoString}
        name={todoString}
        type="text"
        placeholder="Add todo"
      />
      <button onClick={onSubmit} value="submit">
        Submit
      </button>
    </div>
  );
}
