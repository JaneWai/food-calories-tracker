import React, { useState, useRef } from 'react'
import { Upload, Camera, Image } from 'lucide-react'

interface UploadSectionProps {
  onImageUpload: (imageUrl: string) => void
}

const UploadSection: React.FC<UploadSectionProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // Create a URL for the file
    const imageUrl = URL.createObjectURL(file)
    onImageUpload(imageUrl)
  }

  const onButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Sample images for demo purposes
  const sampleImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ]

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-2">Analyze Your Food</h2>
      <p className="text-gray-600 text-center mb-8">
        Upload a photo of your meal to get instant calorie information
      </p>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="flex flex-col items-center">
          <Upload size={48} className="text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Drag & Drop your food photo here</h3>
          <p className="text-gray-500 mb-4">or</p>
          <button
            onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center"
          >
            <Camera size={18} className="mr-2" />
            Upload Photo
          </button>
          
          <div className="mt-4 text-sm text-gray-500">
            Supports JPG, PNG, HEIC
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4 text-center">Or try with these examples</h3>
        <div className="grid grid-cols-3 gap-4">
          {sampleImages.map((img, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition duration-300 shadow-md"
              onClick={() => onImageUpload(img)}
            >
              <img src={img} alt={`Sample food ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UploadSection
