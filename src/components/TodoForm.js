import React, { useState } from "react";

export default function TodoForm() {
  const [todoString, setTodoString] = useState("");
  const [listArray, setListArray] = useState([]);
  const [searchString, setSearchString] = useState("");

  const handleOnChange = (event) => {
    // sets state to the content of input field
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
    // callback to compare key of listItem and key of todoItem clicked for delete
    const checkForItem = (listItem) => {
      return listItem.key !== todoItem.key;
    };

    // creates new array by filtering the clicked item from the array in state
    const newItemList = listArray.filter(checkForItem);

    // sets state with the new array
    setListArray(newItemList);
  };

  return (
    <div>
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
        value={todoString}
        type="text"
        placeholder="Add todo"
      />
      <button onClick={onSubmit} value="submit">
        SUBMIT
      </button>
      <br />
      <input></input>
      <button>SEARCH</button>
    </div>
  );
}
