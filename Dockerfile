# ---------- Build stage ----------
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the app for production
RUN npm run build


# ---------- Production stage ----------
FROM nginx:alpine

# Copy built files from previous stage to Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
