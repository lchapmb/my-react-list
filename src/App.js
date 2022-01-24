import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

import "./App.css";

import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Container className="appContainer">
      <Divider section hidden />
      <div className="App">
        <Header as="h1" attached="top" block="true" textAlign="center">
          Todo List
        </Header>
        <TodoForm />
      </div>
    </Container>
  );
}

export default App;
