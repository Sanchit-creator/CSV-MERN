import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from './components/signIn/SignIn';
import Navbar from "./components/appBar/Navbar";
import SignUp from "./components/signUp/SignUp";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
