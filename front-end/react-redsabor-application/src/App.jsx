import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/' element= {<h1>Home</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
