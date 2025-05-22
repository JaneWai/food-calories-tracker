import React, { useState } from 'react'
import { Camera, Upload, BarChart3, Home, User } from 'lucide-react'
import Header from './components/Header'
import UploadSection from './components/UploadSection'
import ResultsSection from './components/ResultsSection'
import HistorySection from './components/HistorySection'
import Footer from './components/Footer'

type Tab = 'home' | 'history' | 'profile'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [results, setResults] = useState<null | {
    calories: number
    foodName: string
    nutrients: {
      protein: number
      carbs: number
      fat: number
      fiber: number
    }
  }>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [history, setHistory] = useState<Array<{
    id: string
    image: string
    foodName: string
    calories: number
    date: string
  }>>([])

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl)
    setIsLoading(true)
    
    // Simulate API call to analyze food
    setTimeout(() => {
      const mockResults = {
        calories: Math.floor(Math.random() * 500) + 200,
        foodName: ['Grilled Chicken Salad', 'Pasta with Tomato Sauce', 'Avocado Toast', 'Salmon with Vegetables', 'Vegetable Stir Fry'][Math.floor(Math.random() * 5)],
        nutrients: {
          protein: Math.floor(Math.random() * 30) + 10,
          carbs: Math.floor(Math.random() * 50) + 20,
          fat: Math.floor(Math.random() * 20) + 5,
          fiber: Math.floor(Math.random() * 10) + 2
        }
      }
      
      setResults(mockResults)
      setIsLoading(false)
      
      // Add to history
      const newHistoryItem = {
        id: Date.now().toString(),
        image: imageUrl,
        foodName: mockResults.foodName,
        calories: mockResults.calories,
        date: new Date().toLocaleString()
      }
      
      setHistory(prev => [newHistoryItem, ...prev])
    }, 2000)
  }

  const resetUpload = () => {
    setUploadedImage(null)
    setResults(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 max-w-3xl">
        {activeTab === 'home' && (
          <>
            {!uploadedImage ? (
              <UploadSection onImageUpload={handleImageUpload} />
            ) : (
              <ResultsSection 
                imageUrl={uploadedImage}
                results={results}
                isLoading={isLoading}
                onReset={resetUpload}
              />
            )}
          </>
        )}
        
        {activeTab === 'history' && (
          <HistorySection history={history} />
        )}
        
        {activeTab === 'profile' && (
          <div className="mt-10 text-center">
            <User size={64} className="mx-auto text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <p className="text-gray-600 mb-8">Profile features coming soon!</p>
          </div>
        )}
      </main>
      
      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
