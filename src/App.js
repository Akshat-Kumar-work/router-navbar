import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
function App() {
  return (
    <div>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
    </div>
  );
}

export default App;
