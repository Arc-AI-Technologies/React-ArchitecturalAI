import React from 'react'

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="inline-flex items-center gap-3">
        <svg className="w-10 h-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Architect AI</h1>
      </div>
      <p className="mt-2 text-lg text-gray-600">Your AI-Powered Architectural Assistant</p>
    </header>
  )
}

export default Header
