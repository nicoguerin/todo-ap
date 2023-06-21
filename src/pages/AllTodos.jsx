import Todos from "../components/Todos";
import useTodos from "../hooks/useTodos";

export default function AllTodos() {
    const { todos } = useTodos();

    return (
        <Todos todoList={todos} />
    );
}