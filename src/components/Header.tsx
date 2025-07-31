import React from 'react';
import { Shield } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="relative flex items-center">
              <img 
                src="/mimedia-logo.png" 
                alt="PT. Mitra Media Data" 
                className="h-10 w-auto object-contain dark:filter dark:brightness-0 dark:invert"
               />
            </div>
          </div>
          
          <div className="flex items-center space-x-3 animate-slide-in-right">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}