import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page01 from './pages/navigation/Page01'
import Page02 from './pages/navigation/Page02'
import ErrorPage from './pages/navigation/Error'
import Login from './pages/login'
import { AuthProvider } from './context/AuthContext'
import PrivateRoutes from './utils/PrivateRoutes'
import { Home } from './pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Toaster position='top-right' toastOptions={{ duration: 2000 }}/>
    <AuthProvider>
      {/* React Router Dom */}
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/' index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='page01' element={<PrivateRoutes />}>
            <Route path='/page01' element={<Page01/>}/>
          </Route>
          <Route path='/page02' element={<Page02/>}/>
        </Routes>
      </BrowserRouter>
      {/* React Router Dom */}
    </AuthProvider>
  </React.Fragment>
)