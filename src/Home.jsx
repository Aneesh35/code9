import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">Welcome to Our Website</h1>
    <section className="text-center space-y-4 mb-12">
      <h2 className="text-2xl font-semibold">Discover Amazing Features</h2>
      <p className="text-gray-600">
        Start exploring our services and find out what we can do for you.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/about"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
    <section>
      <h3 className="text-xl font-semibold mb-4">Featured Content</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Service 1','Service 2','Service 3'].map(title => (
          <div
            key={title}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h4 className="font-bold mb-2">{title}</h4>
            <p className="text-gray-600">Description of {title.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default Home