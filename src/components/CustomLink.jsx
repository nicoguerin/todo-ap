import { Link, useLocation } from "react-router-dom";

export default function CustomLink({ to, text }) {
    const url = useLocation();

    return (
        <Link
            to={to}
            className={`${url.pathname === to ? "border-b-4 border-radius border-blue-500" : ""}`}
        >{text}</Link>
    );
}