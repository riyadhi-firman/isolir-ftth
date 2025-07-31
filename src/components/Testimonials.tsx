import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'IT Director',
    company: 'PT Teknologi Maju',
    content: 'Isolir telah mengubah cara kami memandang keamanan internet. Remote browser isolation memberikan perlindungan yang luar biasa tanpa mengganggu produktivitas tim.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Sari Wijaya',
    role: 'CISO',
    company: 'Bank Digital Indonesia',
    content: 'Solusi zero trust dari Isolir memberikan peace of mind yang kami butuhkan. Dashboard analytics yang komprehensif membantu kami memantau threats secara real-time.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Ahmad Rahman',
    role: 'Security Manager',
    company: 'Grup Keuangan Nusantara',
    content: 'Implementation yang mudah dan support team yang responsif. Dalam 2 minggu, seluruh organisasi sudah terlindungi dengan optimal. ROI yang sangat baik.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dipercaya Oleh Perusahaan Terdepan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ribuan perusahaan di Indonesia telah mempercayakan keamanan internet mereka kepada Isolir.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-purple-600 mr-4" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}