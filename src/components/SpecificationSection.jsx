import React from 'react'

const SpecificationSection = ({ 
  specification, 
  setSpecification, 
  isGenerating, 
  onSpecGenerated 
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          2. Architectural Specification
        </label>
        <div className="relative">
          <textarea 
            rows="12" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow resize-none"
            placeholder={isGenerating ? "Generating specification..." : "Your detailed architectural specification will appear here..."}
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
            readOnly={isGenerating}
          />
          {isGenerating && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                <span className="text-indigo-600 font-medium">Generating...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {specification && !isGenerating && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✓ Specification generated successfully! You can now generate architectural drawings.
          </p>
        </div>
      )}
    </div>
  )
}

export default SpecificationSection
