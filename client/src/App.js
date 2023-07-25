import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Exercise from "./pages/exercise";
import Navbar from './components/navbar';
import Footer from "./components/footer"
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/exercises/:id" element={<Exercise />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
