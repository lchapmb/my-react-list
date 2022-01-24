import React, { createContext, useContext, useState } from "react";
import "../App.css";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";

import { List, Input, Button } from "semantic-ui-react";

export const TodoFormContext = createContext();

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
    <TodoFormContext.Provider value={{ listArray }}>
      <div className="todoList">
        <List>
          <List.Content>
            {listArray.map((todo) => {
              return (
                <TodoItem
                  handleTodoDelete={handleTodoDelete}
                  todo={todo}
                  key={todo.key}
                />
              );
            })}
          </List.Content>
        </List>
        <br />

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
      </div>
      <br />
      <SearchBar listArray={listArray} />
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
    </TodoFormContext.Provider>
  );
}
