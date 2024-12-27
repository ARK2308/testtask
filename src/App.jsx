import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

   
  return (
    <Router>
      <ToastContainer  position="top-right" autoClose={1000} />
      <Routes>
  
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={ <Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
