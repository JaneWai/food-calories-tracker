import React from 'react'
import { Clock, Trash2 } from 'lucide-react'

interface HistoryItem {
  id: string
  image: string
  foodName: string
  calories: number
  date: string
}

interface HistorySectionProps {
  history: HistoryItem[]
}

const HistorySection: React.FC<HistorySectionProps> = ({ history }) => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Food History</h2>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock size={16} className="mr-1" />
          <span>Last 7 days</span>
        </div>
      </div>
      
      {history.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-10 text-center">
          <Clock size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">No history yet</h3>
          <p className="text-gray-500">
            Your food tracking history will appear here once you analyze some meals.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.foodName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">{item.foodName}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-blue-600">{item.calories} kcal</span>
                    <button className="text-gray-400 hover:text-red-500 transition duration-300">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {history.length > 0 && (
        <div className="mt-8 bg-blue-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">Weekly Summary</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Average daily calories:</p>
              <p className="font-bold text-blue-600 text-xl">
                {Math.round(history.reduce((sum, item) => sum + item.calories, 0) / Math.min(7, history.length))} kcal
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total meals tracked:</p>
              <p className="font-bold text-gray-800 text-xl">{history.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HistorySection
