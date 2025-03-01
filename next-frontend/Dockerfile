# Build stage
FROM node:20.12.2 AS builder
WORKDIR /app

# 依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Next.js をビルド
RUN npm run build

# Production stage
FROM node:20.12.2
WORKDIR /app
COPY --from=builder /app ./

# ポートを設定
EXPOSE 3000

# 開発環境サーバーを起動
CMD ["npm", "run", "start"]
