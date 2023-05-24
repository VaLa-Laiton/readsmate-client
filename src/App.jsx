import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Componentes
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Publish from "./components/Publish";
// import Dashboard from "./components/Dashboard";
// import DashArticles from "./components/DashArticles";
import Profile from "./components/Profile";
import NotFoundPage from "./components/Lol";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/publish" element={<Publish />} />
        {/* <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/dashboard/:userId/articles" element={<DashArticles />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
