import CustomLink from "./CustomLink";
import NewTodoForm from "./NewTodoForm";

export default function Navbar() {
    return (
        <nav className="w-full">
            <ul className="w-full flex justify-evenly font-medium text-xl border-b-2 border-slate-400">
                <li>
                    <CustomLink
                        to="/"
                        text="All"
                    />
                </li>
                <li>
                    <CustomLink
                        to="/active"
                        text="Active"
                    />
                </li>
                <li>
                    <CustomLink
                        to="/completed"
                        text="Completed"
                    />
                </li>
            </ul>
            <NewTodoForm />
        </nav>
    );
}