import useTodos from "../hooks/useTodos";
import DeleteButton from "./DeleteButton";

export default function Todo({ todo }) {
    const { handleChangeTodoState, handleDeleteTodo } = useTodos();

    return (
        <li className="w-full h-12 border flex justify-between items-center p-3">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleChangeTodoState(todo)}
                />
                <span
                    className={todo.completed ? "line-through" : ""}
                >{todo.title}</span>
            </div>
            <DeleteButton onClick={() => handleDeleteTodo(todo)} />
        </li>
    );
}