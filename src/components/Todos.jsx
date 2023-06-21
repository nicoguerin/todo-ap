import Todo from "./Todo";
import DeleteButton from "./DeleteButton";
import useTodos from "../hooks/useTodos";

export default function Todos({ todoList }) {
    const { handleDeleteCompletedTodos } = useTodos();

    if (todoList.length === 0) return <span className="font-semibold text-lg">No todos here...</span>

    return (
        <section className="w-full relative">
            <ul className="flex flex-col gap-3">
                {todoList.map(todo =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                    />
                )}
            </ul>
            <DeleteButton
                onClick={handleDeleteCompletedTodos}
                text="delete all"
            />
        </section>
    );
}