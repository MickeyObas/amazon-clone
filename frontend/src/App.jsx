import './App.css'
import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import MainLayout from './layouts/MainLayout.jsx';
import Results from './pages/Results/Results.jsx';
import Product from './pages/Product/Product.jsx';

import  ProtectedRoutes from './utils.jsx';
import { AuthProvider } from './AuthContext.jsx';


export default function App() {
  return (
   <AuthProvider>
      <Routes>

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='results' element={<Results />} />
            <Route path='product' element={<Product />} />
          </Route>
        </Route>

        {/* Public Routes */}
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />

        </Routes>
    </AuthProvider>
    
  )
}
