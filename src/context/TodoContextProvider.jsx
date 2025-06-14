import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(input) {
    const newTodo = {
      id: todos.length + 1,
      title: input,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function completeToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  }
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, completeToggle }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
