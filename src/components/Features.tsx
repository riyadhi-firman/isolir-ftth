import React from 'react';
import { Shield, Globe, Zap, Users, Lock, Monitor } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Remote Browser Isolation',
    description: 'Isolasi browser jarak jauh yang memisahkan aktivitas browsing dari endpoint pengguna untuk perlindungan maksimal.'
  },
  {
    icon: Globe,
    title: 'Web Filtering',
    description: 'Sistem filter web cerdas yang memblokir konten berbahaya dan mengontrol akses berdasarkan kebijakan perusahaan.'
  },
  {
    icon: Zap,
    title: 'Real-time Threat Detection',
    description: 'Deteksi ancaman real-time dengan AI untuk mengidentifikasi dan memblokir malware sebelum mencapai jaringan.'
  },
  {
    icon: Users,
    title: 'Multi-tenant Management',
    description: 'Manajemen multi-tenant yang memungkinkan pengelolaan multiple organisasi dalam satu platform terpusat.'
  },
  {
    icon: Lock,
    title: 'Zero Trust Architecture',
    description: 'Arsitektur zero trust yang memverifikasi setiap permintaan akses tanpa mempercayai lokasi atau perangkat.'
  },
  {
    icon: Monitor,
    title: 'Advanced Analytics',
    description: 'Dashboard analitik canggih dengan laporan real-time untuk monitoring dan compliance reporting.'
  }
];

export default function Features() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Keamanan Internet Terdepan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi komprehensif untuk melindungi organisasi Anda dari ancaman cyber 
            dengan teknologi isolasi browser dan keamanan web yang canggih.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}