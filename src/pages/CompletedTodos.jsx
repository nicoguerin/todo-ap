import Todos from "../components/Todos";
import useTodos from "../hooks/useTodos";

export default function CompletedTodos() {
    const { todos } = useTodos();
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <Todos todoList={completedTodos} />
    );
}