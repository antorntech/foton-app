import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
