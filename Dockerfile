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

# Mengubah port Apache agar sesuai dengan Cloud Run
RUN sed -i 's/Listen 80/Listen ${PORT}/' /etc/apache2/ports.conf
RUN sed -i 's/:80/:${PORT}/' /etc/apache2/sites-available/000-default.conf

# Menambahkan script untuk menginstall dependensi tambahan jika diperlukan
# RUN apt-get update && apt-get install -y libpng-dev && docker-php-ext-install gd

# Mengekspos port 80 untuk akses HTTP
EXPOSE 8080

# Menjalankan perintah untuk memulai Apache
CMD ["apache2-foreground"]
