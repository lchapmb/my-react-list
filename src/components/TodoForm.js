import React, { createContext, useState } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import NewToDo from "./NewTodo";
import ToDoList from "./ToDoList";

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
    <TodoFormContext.Provider
      value={{
        listArray,
        handleTodoDelete,
        searchResultsArray,
        setSearchResultsArray,
      }}
    >
      <Divider hidden />
      <ToDoList />
      <Divider hidden />
      <NewToDo
        setTodoString={setTodoString}
        todoString={todoString}
        onSubmit={onSubmit}
      />
      <br />
      <SearchBar />
      <br />
    </TodoFormContext.Provider>
  );
}
