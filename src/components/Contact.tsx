import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Siap Mengamankan Internet Anda?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Tim ahli kami siap membantu Anda mengimplementasikan solusi keamanan internet 
              yang tepat untuk organisasi Anda. Hubungi kami untuk konsultasi gratis.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Telepon</p>
                  <p className="text-purple-100">+62 21 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-purple-100">info@isolir.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Alamat</p>
                  <p className="text-purple-100">
                    Menara Cyber, Jl. Gatot Subroto<br />
                    Jakarta Selatan 12950
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Jam Operasional</p>
                  <p className="text-purple-100">
                    Senin - Jumat: 08:00 - 18:00 WIB<br />
                    Sabtu: 09:00 - 15:00 WIB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Dapatkan Demo Gratis</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="nama@perusahaan.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Perusahaan</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Nama perusahaan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telepon</label>
                <input 
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Ceritakan kebutuhan keamanan internet Anda..."
                ></textarea>
              </div>

              <button className="w-full bg-white text-purple-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}