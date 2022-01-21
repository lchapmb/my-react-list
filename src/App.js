import React from "react";

import "./App.css";

// components
// import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* <TodoList /> */}
      <TodoForm />
    </div>
  );
}

export default App;
