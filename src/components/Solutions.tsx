import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '2.5',
    period: 'per user/bulan',
    description: 'Cocok untuk perusahaan kecil yang membutuhkan proteksi dasar',
    features: [
      'Remote Browser Isolation',
      'Basic Web Filtering',
      'Email Support',
      'Dashboard Analytics',
      'Up to 50 Users'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '4.5',
    period: 'per user/bulan',
    description: 'Solusi lengkap untuk perusahaan menengah',
    features: [
      'Semua fitur Starter',
      'Advanced Threat Detection',
      'Custom Policies',
      'Priority Support',
      'Advanced Analytics',
      'Up to 500 Users'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'hubungi kami',
    description: 'Solusi enterprise dengan customization penuh',
    features: [
      'Semua fitur Professional',
      'On-premise Deployment',
      'Custom Integration',
      '24/7 Dedicated Support',
      'Compliance Reporting',
      'Unlimited Users'
    ],
    popular: false
  }
];

export default function Solutions() {
  return (
    <section id="solusi" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pilih Solusi yang Tepat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Paket fleksibel yang disesuaikan dengan kebutuhan dan skala bisnis Anda, 
            dari startup hingga enterprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Paling Populer
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                  {plan.price === 'Custom' && (
                    <span className="text-xl text-gray-600">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {plan.price === 'Custom' ? 'Hubungi Sales' : 'Mulai Gratis'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <Zap className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-gray-700 font-medium">
              30 hari trial gratis • Setup dalam 5 menit • Tanpa komitmen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}