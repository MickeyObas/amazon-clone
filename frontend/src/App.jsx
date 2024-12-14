import './App.css'
import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import MainLayout from './layouts/MainLayout.jsx';
import Results from './pages/Results/Results.jsx';
import Product from './pages/Product/Product.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

import  ProtectedRoutes from './utils.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CategoryProvider } from './context/CategoryContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import StripeCheckoutForm from './components/StripeCheckoutForm.jsx';
import StripeCheckout from './components/StripeCheckout.jsx';
import StripeComplete from './components/StripeComplete.jsx';


export default function App() {
  return (
   <AuthProvider>
    <CartProvider>
      <CategoryProvider>
        <Routes>

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='s/' element={<Results />} />
              <Route path='cart/' element={<Cart />} />
              <Route path='checkout/' element={<Checkout />} />
              <Route path='product/:id' element={<Product />} />
              <Route path='stripe-checkout' element={<StripeCheckout />} />
              <Route path='stripe-complete' element={<StripeComplete />} />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />

          </Routes>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
    
  )
}
