# Use Node.js LTS image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
