import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Regsitration/RegisterForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Pages/Home/Landing";
import Forgot from "./Pages/Login/forgot";
import AdminHome from "./Pages/Admin/AdminHome";
import About from "./Pages/Home/About";
import Users from "./Pages/Admin/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/AdminHome" element={<AdminHome />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}
export default App;
