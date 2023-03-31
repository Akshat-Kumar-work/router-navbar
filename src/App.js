import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
          <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></NavBar>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/dashboard" element={ <PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>}/>
            <Route path="/about" element={<About></About>}/>
            <Route path="/contact" element={<Contact></Contact>}/>
          </Routes>
    </div>
  );
}

export default App;