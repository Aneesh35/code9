import React from 'react'

const About = () => (
  <div className="container mx-auto p-8 space-y-6">
    <h1 className="text-3xl font-bold">About Us</h1>
    <div className="space-y-4">
      <p className="text-gray-600">
        Welcome to our application! We are dedicated to providing the best user experience.
      </p>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Easy to use interface</li>
          <li>Responsive design</li>
          <li>Fast performance</li>
          <li>Secure data handling</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="text-gray-600">
          We are a group of passionate developers working to create amazing web experiences.
        </p>
      </div>
    </div>
  </div>
)

export default About