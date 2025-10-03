#!/bin/bash

echo "🚀 Setting up Department Information System..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Create environment files
echo "📝 Creating environment files..."

# Backend .env
if [ ! -f "backend/.env" ]; then
    cp backend/env.example backend/.env
    echo "✅ Created backend/.env"
else
    echo "⚠️  backend/.env already exists"
fi

# Frontend .env.local
if [ ! -f "frontend/.env.local" ]; then
    cp frontend/env.example frontend/.env.local
    echo "✅ Created frontend/.env.local"
else
    echo "⚠️  frontend/.env.local already exists"
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Build backend
echo "🔨 Building backend..."
cd backend
./mvnw clean compile
cd ..

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Start the database: docker-compose -f docker-compose.dev.yml up postgres -d"
echo "2. Start the backend: cd backend && ./mvnw spring-boot:run"
echo "3. Start the frontend: cd frontend && npm run dev"
echo ""
echo "🌐 Access the application at: http://localhost:3000"
echo "🔗 Backend API at: http://localhost:8080/api"

