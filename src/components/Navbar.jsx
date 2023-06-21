import CustomLink from "./CustomLink";
import NewTodoForm from "./NewTodoForm";

export default function Navbar() {
    return (
        <nav className="w-full">
            <ul className="w-full flex justify-evenly font-medium text-xl border-b-2 border-slate-400">
                <CustomLink
                    to="/"
                    text="All"
                />
                <CustomLink
                    to="/active"
                    text="Active"
                />
                <CustomLink
                    to="/completed"
                    text="Completed"
                />
            </ul>
            <NewTodoForm />
        </nav>
    );
}