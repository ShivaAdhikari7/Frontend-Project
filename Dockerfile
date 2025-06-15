# Use Node.js official image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including dev dependencies for dev mode)
RUN npm ci

# Copy source code
COPY . .

# Expose port 3000 (or whatever port your dev server uses)
EXPOSE 3000
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]