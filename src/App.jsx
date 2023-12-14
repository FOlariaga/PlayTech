import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenido a PlayTech"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer saludo={"Productos filtrados"} />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Pagina no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
