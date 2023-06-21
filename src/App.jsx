import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start items-center w-full max-w-[1000px] 
                       h-full py-5 px-5 md:px-28 mx-auto">
        <h1 className="font-bold text-3xl mb-3">Todo App</h1>
        <Navbar />
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}