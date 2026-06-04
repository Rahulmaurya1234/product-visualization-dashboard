import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Read All */}
        <Route path="/" element={<ProductList />} />

        {/* Create */}
        <Route
          path="/add-product"
          element={<AddProduct />}
        />

        {/* Read Single */}
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;