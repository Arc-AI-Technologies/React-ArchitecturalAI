import React, { useState } from 'react'

const InputSection = ({ description, setDescription, onGenerateSpec, isGenerating }) => {
  const [errorMessage, setErrorMessage] = useState('')

  const examplePrompts = [
    { text: 'Cozy 2-bed cottage', fullText: 'A cozy 2-bedroom cottage with a fireplace and a small front porch, featuring stone accents.' },
    { text: 'Luxury 4-bed modern home', fullText: 'A luxury 4-bedroom, two-story modern home with a 3-car garage, home office, large glass windows and a flat roof.' },
    { text: 'Simple ranch with a deck', fullText: 'A simple 3-bedroom ranch-style home with an attached garage and a large wooden deck in the back.' }
  ]

  const handleGenerateSpec = () => {
    if (!description.trim()) {
      setErrorMessage('Please describe your ideal home first.')
      return
    }
    setErrorMessage('')
    onGenerateSpec()
  }

  const handleExampleClick = (fullText) => {
    setDescription(fullText)
    setErrorMessage('')
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="mb-4">
        <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-2">
          1. Describe your ideal home
        </label>
        <textarea 
          id="description" 
          rows="4" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
          placeholder="e.g., a modern 3-bedroom bungalow with an open-concept living area..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Or try an example:</p>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((prompt, index) => (
            <button 
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
              onClick={() => handleExampleClick(prompt.fullText)}
            >
              {prompt.text}
            </button>
          ))}
        </div>
      </div>

      <div className="flex">
        <button 
          onClick={handleGenerateSpec}
          disabled={isGenerating}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 disabled:bg-indigo-300 disabled:cursor-not-allowed"
        >
          Generate Specification
        </button>
      </div>
    </div>
  )
}

export default InputSection
