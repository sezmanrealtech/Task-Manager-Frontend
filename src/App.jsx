import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverPages from "./pages/CoverPages";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  const baseURL = "https://task-manager-backend-53o2.onrender.com";
  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          <Route path="/" element={<CoverPages />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//Netify, Vercel, Render etc are popular free platforms for hosting web applications.

//Netify is best for static sites and applications with a focus on simplicity and serverless function

//Vercel is optimized for frontend development, especially those using React and node.js with strong serverless and edge capabilities

//Render is a versatile platform suitable
