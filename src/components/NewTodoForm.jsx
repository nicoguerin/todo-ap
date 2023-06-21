import useNewTodo from "../hooks/useNewTodo";

export default function NewTodoForm() {
    const { newTodo, handleFormSubmit, handleInputChange } = useNewTodo();

    return (
        <form
            onSubmit={handleFormSubmit}
            className="h-20 w-full flex justify-between items-center gap-3 py-5"
        >
            <input
                value={newTodo}
                onChange={handleInputChange}
                placeholder="add details"
                className="border border-slate-400 rounded-lg w-9/12 h-full px-2"
            />
            <button
                className="w-3/12 h-full bg-blue-500 rounded-lg"
            >Add</button>
        </form>
    );
}