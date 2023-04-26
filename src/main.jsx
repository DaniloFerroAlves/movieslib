import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Movie } from './pages/Movie'


import App from './App.jsx'
import './index.css'


//Rotas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route element={<Home/>} path='/'/>
          <Route element={<Movie/>} path='movie/:id'/>
          <Route element={<Search/>} path='search'/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
