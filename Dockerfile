# Menggunakan image PHP resmi dengan Apache
FROM php:8.1-apache

# Menyalin file aplikasi ke direktori kerja di dalam container
COPY . /var/www/html/

# Mengatur izin agar direktori dapat diakses oleh Apache
RUN chown -R www-data:www-data /var/www/html

# Mengaktifkan modul Apache yang diperlukan
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Menambahkan konfigurasi ServerName untuk mengatasi warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Menambahkan script untuk menginstall dependensi tambahan jika diperlukan
# RUN apt-get update && apt-get install -y libpng-dev && docker-php-ext-install gd

# Mengekspos port 80 untuk akses HTTP
EXPOSE 80

# Menjalankan perintah untuk memulai Apache
CMD ["apache2-foreground"]
