# ===== Development Dockerfile =====
FROM node:20-alpine


# Set working directory
WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose dev server port
EXPOSE 3000

# Start Next.js in development mode (hot reload enabled)
CMD ["npm", "run", "dev"]
