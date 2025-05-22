import React from 'react'
import { Home, BarChart3, User } from 'lucide-react'

interface FooterProps {
  activeTab: 'home' | 'history' | 'profile'
  onTabChange: (tab: 'home' | 'history' | 'profile') => void
}

const Footer: React.FC<FooterProps> = ({ activeTab, onTabChange }) => {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto max-w-3xl">
        <nav className="flex justify-around py-3">
          <button 
            onClick={() => onTabChange('home')}
            className={`flex flex-col items-center px-4 py-2 ${
              activeTab === 'home' 
                ? 'text-blue-600' 
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button 
            onClick={() => onTabChange('history')}
            className={`flex flex-col items-center px-4 py-2 ${
              activeTab === 'history' 
                ? 'text-blue-600' 
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            <BarChart3 size={24} />
            <span className="text-xs mt-1">History</span>
          </button>
          
          <button 
            onClick={() => onTabChange('profile')}
            className={`flex flex-col items-center px-4 py-2 ${
              activeTab === 'profile' 
                ? 'text-blue-600' 
                : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
