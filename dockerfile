# Use official lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the app port (e.g., 3000)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]