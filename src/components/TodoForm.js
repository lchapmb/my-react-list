import React, { createContext, useState } from "react";
import "../App.css";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import NewToDo from "./NewTodo";

import { Card, Divider } from "semantic-ui-react";

export const TodoFormContext = createContext();

export default function TodoForm() {
  const [todoString, setTodoString] = useState("");
  const [listArray, setListArray] = useState([]);
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

  return (
    <TodoFormContext.Provider value={{ listArray }}>
      <div className="todoList">
        <Divider hidden />
        <Card.Group
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {listArray.map((todo) => {
            return (
              <Card>
                <TodoItem
                  handleTodoDelete={handleTodoDelete}
                  todo={todo}
                  key={todo.key}
                />
              </Card>
            );
          })}
        </Card.Group>
        <Divider hidden />
        <NewToDo
          setTodoString={setTodoString}
          todoString={todoString}
          onSubmit={onSubmit}
        />
      </div>
      <br />
      <SearchBar
        listArray={listArray}
        searchResultsArray={searchResultsArray}
        setSearchResultsArray={setSearchResultsArray}
      />
      <br />
      {/* need to separate the search results into a component */}
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
    </TodoFormContext.Provider>
  );
}
