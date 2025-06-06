# Etapa 1 - Build
FROM node:latest AS builder

# Diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package.json package-lock.json ./

# Instala só as dependências de produção
RUN npm install --production

# Copia o restante da aplicação
COPY . .

# Etapa 2 - Imagem final mínima
FROM node:latest

# Diretório de trabalho
WORKDIR /app

# Copia os node_modules da etapa de build
COPY --from=builder /app/node_modules ./node_modules

# Copia apenas os arquivos necessários da aplicação
COPY --from=builder /app ./

# Expõe a porta (ajuste se necessário)
EXPOSE 8888

# Comando para rodar a aplicação
CMD ["node", "./index.js"]
