import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Counter from "./pages/Counter";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default App;
