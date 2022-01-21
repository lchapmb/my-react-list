const todos = [
  "Write shopping list",
  "Wash dishes",
  "Go to the shops",
  "Hoover",
];

const Todo = (props) => <li>{props.todo}</li>;

const TodoList = () => (
  <ul className="todoList">
    {todos.map((todo) => (
      <Todo todo={todo} key={todo} />
    ))}
  </ul>
);

export default TodoList;
