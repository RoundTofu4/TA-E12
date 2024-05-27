# Gunakan image Node.js yang ringan
FROM node:14-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Expose port aplikasi
EXPOSE 3000

# Tentukan perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
