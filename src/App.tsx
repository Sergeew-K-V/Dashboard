import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersPage from './Pages/UsersPage'
import Mint from './Pages/Mint'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/userspage' element={<UsersPage />} />
          <Route path='/mint' element={<Mint />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
