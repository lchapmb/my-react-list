import React from "react";
import { Container, Divider } from "semantic-ui-react";

import "./App.css";

// components
// import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Container>
      <Divider section hidden />
      <div className="App">
        <h1>Todo List</h1>
        {/* <TodoList /> */}
        <TodoForm />
      </div>
    </Container>
  );
}

export default App;
