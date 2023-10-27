import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './home/home.jsx'
import Todo from './todo/todo.jsx'
import Detalhe from '.Detalhe/detalhe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/detalhe:id' element={<Detalhe/>}></Route>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
