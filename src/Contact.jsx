import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({ name:'', email:'', message:'' })
  const handleChange = e =>
    setData(d => ({ ...d, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', data)
  }

  return (
     <div className="container mx-auto max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[{ id:'name', type:'text', label:'Name' },{ id:'email', type:'email', label:'Email' }].map(f => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              {f.label}:
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              value={data[f.id]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        ))}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={data.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact