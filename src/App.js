
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Routes>
    </div>
  );
}

export default App;