import React from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'

interface ResultsSectionProps {
  imageUrl: string
  results: {
    calories: number
    foodName: string
    nutrients: {
      protein: number
      carbs: number
      fat: number
      fiber: number
    }
  } | null
  isLoading: boolean
  onReset: () => void
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ 
  imageUrl, 
  results, 
  isLoading,
  onReset
}) => {
  return (
    <div className="mt-6">
      <button 
        onClick={onReset}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition duration-300"
      >
        <ArrowLeft size={18} className="mr-1" />
        Back to upload
      </button>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={imageUrl} 
              alt="Uploaded food" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:w-1/2">
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center py-10">
                <Loader2 size={48} className="text-blue-500 animate-spin mb-4" />
                <p className="text-gray-600">Analyzing your food...</p>
              </div>
            ) : results ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{results.foodName}</h2>
                
                <div className="mt-6 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Total Calories:</span>
                    <span className="text-2xl font-bold text-blue-600">{results.calories} kcal</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-3">Nutritional Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Protein</span>
                        <span className="font-medium">{results.nutrients.protein}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(results.nutrients.protein / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Carbohydrates</span>
                        <span className="font-medium">{results.nutrients.carbs}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{ width: `${(results.nutrients.carbs / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Fat</span>
                        <span className="font-medium">{results.nutrients.fat}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${(results.nutrients.fat / 40) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Fiber</span>
                        <span className="font-medium">{results.nutrients.fiber}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full" 
                          style={{ width: `${(results.nutrients.fiber / 25) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>Note: These values are estimates based on image analysis.</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsSection
