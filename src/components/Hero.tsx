import React from 'react';
import { AlertTriangle, CreditCard, ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/30 dark:from-gray-900 dark:via-red-900/20 dark:to-orange-900/20 flex items-center relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 dark:from-red-500/30 dark:to-orange-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          {/* Main alert icon with animation */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-8 shadow-2xl animate-bounce-gentle">
            <AlertTriangle className="h-12 w-12 text-white animate-pulse" />
          </div>
          
          {/* Main heading with stagger animation */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up transition-colors duration-300">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Akses Internet
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">Dibatasi</span>
          </h1>
          
          {/* Description with delay */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed transition-colors duration-300">
            Layanan internet Anda saat ini tidak aktif karena tagihan belum diselesaikan. 
            <span className="font-semibold text-red-600 dark:text-red-400"> Silakan lakukan pembayaran</span> untuk mengaktifkan kembali layanan.
          </p>

          {/* Action buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up-delayed-2">
            <a 
              href="https://member.mimedia.net.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <CreditCard className="h-5 w-5 group-hover:animate-pulse" />
              <span>Bayar Sekarang</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/62817707111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Hubungi CS</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}