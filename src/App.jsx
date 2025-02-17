import Dashboard from './components/Dashboard.jsx.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import NotFound  from './components/NotFound.jsx'
import ViewProduct from './components/ViewProduct.jsx'
import AddProduct from './components/AddProduct.jsx'
import EditProduct from './components/EditProduct.jsx'
import { Routes ,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/products" element={<Dashboard />} />
        <Route path="/products/:productID" element={<ViewProduct />} />
        <Route path="/editproduct/:productID" element={<EditProduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
