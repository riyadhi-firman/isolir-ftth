# 🚀 Panduan Deploy ke CloudPanel

## 📋 Persiapan

File production sudah siap: `isolir-ftth-production.tar.gz` (213KB)

## 🔧 Langkah-langkah Deploy

### **1. Login ke CloudPanel**
- Buka CloudPanel di browser Anda
- Login dengan kredensial admin

### **2. Buat Website Baru**
1. Klik **"Add Website"** atau **"Create Website"**
2. Isi informasi website:
   - **Domain**: `isolir-ftth.yourdomain.com` (atau domain yang diinginkan)
   - **PHP Version**: Pilih **"Static Files"** atau **"No PHP"**
   - **SSL**: Aktifkan SSL certificate
   - **Document Root**: `/www/htdocs/` (default)

### **3. Upload File**
**Opsi A: Via File Manager**
1. Buka **File Manager** di CloudPanel
2. Navigasi ke folder `/www/htdocs/`
3. Upload file `isolir-ftth-production.tar.gz`
4. Extract file tersebut
5. Pindahkan semua isi folder `dist/` ke root directory

**Opsi B: Via FTP/SFTP**
1. Gunakan FTP client (FileZilla, WinSCP)
2. Connect ke server CloudPanel
3. Upload semua file dari folder `dist/` ke `/www/htdocs/`

**Opsi C: Via SSH**
```bash
# Upload file ke server
scp isolir-ftth-production.tar.gz user@your-server:/tmp/

# SSH ke server
ssh user@your-server

# Extract dan pindahkan file
cd /tmp
tar -xzf isolir-ftth-production.tar.gz
cp -r dist/* /www/htdocs/
chown -R www-data:www-data /www/htdocs/
```

### **4. Konfigurasi Domain**
1. Pastikan domain mengarah ke server CloudPanel
2. Update DNS records jika diperlukan
3. Aktifkan SSL certificate di CloudPanel

### **5. Test Website**
- Buka domain di browser
- Pastikan semua fitur berfungsi normal
- Test responsive design di berbagai device

## 📁 Struktur File di Server

```
/www/htdocs/
├── index.html
├── .htaccess
├── mimedia-logo.png
└── assets/
    ├── index-BnJpfh44.css
    └── index-D8md-XWI.js
```

## 🔧 Konfigurasi Tambahan

### **Nginx (Jika menggunakan Nginx)**
Tambahkan di konfigurasi Nginx:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### **Caching**
File `.htaccess` sudah dikonfigurasi untuk:
- Cache static assets (1 tahun)
- Compress files
- Security headers

## 🚨 Troubleshooting

### **Error 404**
- Pastikan `.htaccess` terupload dengan benar
- Cek permission file (644 untuk file, 755 untuk folder)
- Pastikan mod_rewrite aktif di Apache

### **CSS/JS tidak load**
- Cek path file di browser developer tools
- Pastikan semua file assets terupload
- Cek permission folder `assets/`

### **SSL Error**
- Aktifkan SSL di CloudPanel
- Pastikan certificate valid
- Redirect HTTP ke HTTPS

## 📞 Support

Jika mengalami masalah:
1. Cek error log di CloudPanel
2. Test di browser developer tools
3. Pastikan semua file terupload dengan benar

## ✅ Checklist Deploy

- [ ] File production ter-build dengan benar
- [ ] Website dibuat di CloudPanel
- [ ] File terupload ke server
- [ ] Domain dikonfigurasi
- [ ] SSL aktif
- [ ] Website berfungsi normal
- [ ] Responsive design test
- [ ] Performance test 