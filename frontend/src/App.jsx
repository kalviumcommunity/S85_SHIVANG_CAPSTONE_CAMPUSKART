import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // adjust path if needed
import './App.css';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Marketplace from "./pages/Marketplace";
// import ChatPage from "./pages/ChatPage"; // your buyer-seller chat page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/chat" element={<ChatPage />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
