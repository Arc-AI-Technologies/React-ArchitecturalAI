import React, { useState } from 'react'
import Header from './components/Header'
import InputSection from './components/InputSection'
import SpecificationSection from './components/SpecificationSection'
import DrawingSection from './components/DrawingSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [description, setDescription] = useState('')
  const [specification, setSpecification] = useState('')
  const [isGeneratingSpec, setIsGeneratingSpec] = useState(false)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)
  const [selectedDrawingType, setSelectedDrawingType] = useState('')
  const [generatedImage, setGeneratedImage] = useState('')
  const [imageTitle, setImageTitle] = useState('Generated Drawing')
  const [imageFilename, setImageFilename] = useState('architect-ai-drawing.png')

  return (
    <div className="App">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Header />
        
        <main className="max-w-4xl mx-auto">
          <InputSection 
            description={description}
            setDescription={setDescription}
            onGenerateSpec={() => {
              setIsGeneratingSpec(true)
              setSpecification('')
              setGeneratedImage('')
              setSelectedDrawingType('')
            }}
            isGenerating={isGeneratingSpec}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SpecificationSection 
              specification={specification}
              setSpecification={setSpecification}
              isGenerating={isGeneratingSpec}
              onSpecGenerated={(spec) => {
                setSpecification(spec)
                setIsGeneratingSpec(false)
              }}
            />

            <DrawingSection 
              specification={specification}
              selectedType={selectedDrawingType}
              setSelectedType={setSelectedDrawingType}
              generatedImage={generatedImage}
              setGeneratedImage={setGeneratedImage}
              imageTitle={imageTitle}
              setImageTitle={setImageTitle}
              imageFilename={imageFilename}
              setImageFilename={setImageFilename}
              isGenerating={isGeneratingImage}
              setIsGenerating={setIsGeneratingImage}
            />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App
