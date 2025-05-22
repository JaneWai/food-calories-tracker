import React from 'react'
import { Camera } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-3xl">
        <div className="flex items-center space-x-2">
          <Camera size={28} className="text-white" />
          <h1 className="text-xl font-bold">NutriSnap</h1>
        </div>
        <div className="text-sm font-medium">
          Food Calorie Tracker
        </div>
      </div>
    </header>
  )
}

export default Header
