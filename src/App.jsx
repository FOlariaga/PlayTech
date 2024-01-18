import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartView from "./components/CartView/CartView"
import Checkout from "./components/Checkout/Checkout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/context"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenido a PlayTech"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer saludo={"Productos filtrados"} />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='*' element={<h1>Pagina no encontrada</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
