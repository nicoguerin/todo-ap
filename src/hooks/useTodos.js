import { useContext } from "react";
import { TodosContext } from "../context/Todos";

export default function useTodos() {
    const { todos, setTodos } = useContext(TodosContext);

    const handleChangeTodoState = (todo) => {
        const prevTodos = [...todos];
        let todoIndex = todoIndexInTodos(prevTodos, todo);
        prevTodos[todoIndex].completed = !prevTodos[todoIndex].completed;
        setTodos(prevTodos);
    }

    const todoIndexInTodos = (prevTodos, todo) => {
        let todoIndex = -1;
        for (let i = 0; i < prevTodos.length && todoIndex === -1; ++i) {
            let actTodo = prevTodos[i];
            if (todo.id === actTodo.id) todoIndex = i;
        }
        return todoIndex;
    }

    const handleDeleteTodo = (todo) => {
        let prevTodos = [...todos];
        prevTodos = prevTodos.filter(t => t.id !== todo.id);
        setTodos(prevTodos);

    }

    const handleDeleteCompletedTodos = () => {
        let prevTodos = [...todos];
        prevTodos = prevTodos.filter(todo => !todo.completed);
        setTodos(prevTodos);
    }

    return { todos, setTodos, handleChangeTodoState, handleDeleteTodo, handleDeleteCompletedTodos };
}