import { useRef, useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const { addTodo } = useTodoContext();
  const refElement = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todoInput.trim() === "") return;
    addTodo(todoInput);
    setTodoInput("");
    refElement.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <input
        ref={refElement}
        type="text"
        value={todoInput}
        placeholder="Add a new task..."
        className="border border-gray-300  rounded-sm p-2 w-[70%] placeholder-gray-600 dark:placeholder-gray-100"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-amber-600 rounded-sm px-3 py-2 text-white font-semibold w-[30%]"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;
