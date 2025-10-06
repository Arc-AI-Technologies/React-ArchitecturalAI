import React from 'react'

const DrawingSection = ({ 
  specification, 
  selectedType, 
  setSelectedType, 
  generatedImage, 
  setGeneratedImage, 
  imageTitle, 
  setImageTitle, 
  imageFilename, 
  setImageFilename, 
  isGenerating, 
  setIsGenerating 
}) => {
  const drawingTypes = [
    { value: 'floor-plan', label: 'Floor Plan', icon: '🏠' },
    { value: 'elevation', label: 'Elevation View', icon: '📐' },
    { value: '3d-render', label: '3D Render', icon: '🏗️' },
    { value: 'blueprint', label: 'Blueprint', icon: '📋' }
  ]

  const handleGenerateDrawing = () => {
    if (!specification.trim()) {
      alert('Please generate a specification first.')
      return
    }
    if (!selectedType) {
      alert('Please select a drawing type.')
      return
    }
    
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage(`https://via.placeholder.com/600x400/4f46e5/ffffff?text=${encodeURIComponent(selectedType.replace('-', ' ').toUpperCase())}`)
      setIsGenerating(false)
    }, 3000)
  }

  const handleDownload = () => {
    if (!generatedImage) return
    
    const link = document.createElement('a')
    link.href = generatedImage
    link.download = imageFilename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          3. Generate Architectural Drawing
        </label>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3">Select drawing type:</p>
          <div className="grid grid-cols-2 gap-2">
            {drawingTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedType === type.value
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{type.icon}</div>
                <div className="text-sm font-medium">{type.label}</div>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleGenerateDrawing}
          disabled={isGenerating || !specification || !selectedType}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 disabled:bg-indigo-300 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Generating Drawing...
            </>
          ) : (
            'Generate Drawing'
          )}
        </button>
      </div>

      {generatedImage && (
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <input
              type="text"
              value={imageTitle}
              onChange={(e) => setImageTitle(e.target.value)}
              className="text-lg font-medium text-gray-800 bg-transparent border-none focus:outline-none"
            />
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
            >
              Download
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img 
              src={generatedImage} 
              alt={imageTitle}
              className="w-full h-auto"
            />
          </div>
          
          <div className="mt-2">
            <input
              type="text"
              value={imageFilename}
              onChange={(e) => setImageFilename(e.target.value)}
              className="text-sm text-gray-600 bg-transparent border-none focus:outline-none w-full"
              placeholder="filename.png"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DrawingSection
