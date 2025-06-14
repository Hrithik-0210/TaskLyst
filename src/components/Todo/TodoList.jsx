import TodoItem from "./TodoItem";
import { useTodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div className="flex flex-col gap-3 mb-14">
      {todos.length === 0 ? (
        <h2 className="text-center text-xl font-semibold mt-10">
          No tasks yet. Add your first task !
        </h2>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
