import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";
function App() {
    return (
        <>
            <div>
                <ToastContainer position="bottom-center" />
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signin" element={<SignIn />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
