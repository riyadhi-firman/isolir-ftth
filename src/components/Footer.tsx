import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white py-8 relative overflow-hidden transition-colors duration-300">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-orange-900/10 dark:from-red-800/20 dark:to-orange-800/20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-4">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              PT. Mitra Media Data
            </span>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-300 text-sm">
              © 2025 PT. Mitra Media Data. Semua hak dilindungi undang-undang.
            </p>
            
            <p className="text-gray-400 dark:text-gray-500 text-xs">
              Halaman ini ditampilkan karena tagihan internet Anda belum diselesaikan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}