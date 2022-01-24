import React, { useState } from "react";
import SubtodoList from "./SubtodoList";
import "../App.css";

export default function TodoForm() {
  const [todoString, setTodoString] = useState("");
  const [listArray, setListArray] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchResultsArray, setSearchResultsArray] = useState([]);

  const onSubmit = () => {
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

    // setListArray(listArray.filter(item => item.key != todoItem.key))
  };

  const onSearchSubmit = () => {
    const resultsArr = listArray.filter((item) =>
      item.text.includes(searchString)
    );

    setSearchResultsArray(resultsArr);

    setSearchString("");
  };

  return (
    <div>
      <div className="todoList">
        <div
          style={{
            width: "100%",
            padding: 10,
            margin: 10,
          }}
        >
          {listArray.map((todo) => (
            <div className="listItem">
              <div className="todoItem" key={todo.key}>
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
              <SubtodoList />
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
      <br />
      <div className="search">
        <input
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          value={searchString}
          name={searchString}
          type="text"
          placeholder="Search Term"
        ></input>
        <button onClick={onSearchSubmit} value="searchSubmit">
          Search
        </button>
        <br />
        <div>
          {searchResultsArray.map((searchResult) => (
            <div
              style={{
                borderRadius: 5,
                backgroundColor: "lightblue",
                padding: 5,
                margin: 5,
                display: "flex",
                justifyContent: "space-between",
              }}
              key={searchResult.key}
            >
              <div>{searchResult.key + " : " + searchResult.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
