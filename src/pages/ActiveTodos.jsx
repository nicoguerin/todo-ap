import Todos from "../components/Todos";
import useTodos from "../hooks/useTodos";

export default function ActiveTodos() {
    const { todos } = useTodos();
    const activeTodos = todos.filter(todo => !todo.completed);

    return (
        <Todos todoList={activeTodos} />
    );
}