import { Route, Routes } from "react-router-dom";
import AllTodos from "../pages/AllTodos";
import ActiveTodos from "../pages/ActiveTodos";
import CompletedTodos from "../pages/CompletedTodos";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AllTodos />} />
            <Route path="/active" element={<ActiveTodos />} />
            <Route path="/completed" element={<CompletedTodos />} />
        </Routes>
    );
}