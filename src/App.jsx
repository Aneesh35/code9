import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './index.css'

export default function App() {
  const [dark, setDark] = useState(
    () => localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="space-x-4">
            {['/','/about','/contact'].map((to, i) => (
              <NavLink
                key={to}
                to={to}
                end={to==='/'}
                className={({ isActive }) =>
                  `mx-2 ${isActive ? 'text-blue-600 dark:text-blue-300 font-bold' : 'text-gray-700 dark:text-gray-400'}`
                }
              >
                {['Home','About','Contact'][i]}
              </NavLink>
            ))}
          </div>
          <button
            onClick={() => setDark(d => !d)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
      <main className="container mx-auto py-8">
        <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
