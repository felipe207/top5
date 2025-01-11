# Usar a imagem oficial do Node.js como base
# FROM node:18
FROM node:20.3

# Definir o diretório de trabalho dentro do contêiners
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Construir o aplicativo para produção
RUN npm run build

# Expor a porta em que o aplicativo será servido
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
