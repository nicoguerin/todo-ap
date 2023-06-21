import { useLocation } from "react-router-dom";
export default function DeleteButton({ onClick, text }) {
    const url = useLocation();

    if (url.pathname !== '/completed') return null;
    return (
        <button
            onClick={onClick}
            className={`${text ? "flex items-center gap-2 absolute mt-3 right-0 bg-red-600" : ""} 
                        p-2 rounded-lg`}
        >
            <img
                src="../../public/trash.svg"
                alt="Trash icon"
                className="w-7"
            />
            {text && <span>delete all</span>}
        </button>
    );
}