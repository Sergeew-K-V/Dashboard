import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersPage from './Pages/UsersPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/userspage' element={<UsersPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
