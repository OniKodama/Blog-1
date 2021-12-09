import React  from "react";
import NavBar from "./components/NavBar"
import Home from './components/pages/Home'
import Single from './components/pages/single/Single'
import Write from "./components/Write";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
      <Router>
            <NavBar />
        <Routes>
            <Route path="/" element = {<Home />} exact />
            <Route path="/register" element = {<Register />} exact />
            <Route path="/login" element = {<Login />} exact />
            <Route path="/write" element = {<Write />} exact />
            <Route path="/settings" element = {<Settings />} exact />
            <Route path="/post/:postId" element = {<Single />} exact />
        </Routes>
      </Router>
  );
}

export default App;
