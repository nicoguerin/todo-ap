import { useState } from "react";
import useTodos from "./useTodos";

export default function useNewTodo() {
    const [newTodo, setNewTodo] = useState('')
    const { todos, setTodos } = useTodos();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;

        let todo = {
            id: crypto.randomUUID(),
            title: newTodo,
            completed: false
        }

        setTodos([...todos, todo]);
        setNewTodo('');
    }

    const handleInputChange = (e) => setNewTodo(e.target.value);

    return { newTodo, handleFormSubmit, handleInputChange };
}