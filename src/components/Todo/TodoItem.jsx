import { useTodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, completeToggle } = useTodoContext();

  return (
    <div className="flex justify-between p-3 items-center  rounded-sm border border-gray-100 gap-2 shadow-sm">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeToggle(todo.id)}
        className="p-1 w-4 h-4"
      />
      <div className="w-[80%]">
        <p
          className={`flex-1 break-words whitespace-normal  ${
            todo.isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="hover:bg-gray-200 dark:hover:bg-gray-800 p-1 hover:rounded-md"
      >
        ❌
      </button>
    </div>
  );
};
export default TodoItem;
