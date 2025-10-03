# Department Information System

A comprehensive full-stack application for managing department operations, built with Next.js frontend and Spring Boot backend.

## 🏗️ Architecture

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Spring Boot 3.5 with Java 21
- **Database**: PostgreSQL 15
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
Department-Information-System/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app directory
│   │   ├── components/      # React components
│   │   ├── lib/            # Utility libraries
│   │   └── services/       # API service layer
│   ├── public/             # Static assets
│   ├── Dockerfile          # Frontend Docker configuration
│   └── env.example         # Frontend environment variables
├── backend/                 # Spring Boot backend application
│   ├── src/main/java/com/college/backend/
│   │   ├── controller/     # REST controllers
│   │   ├── config/         # Configuration classes
│   │   └── model/          # Data models
│   ├── src/main/resources/
│   │   └── application.yml # Backend configuration
│   ├── Dockerfile          # Backend Docker configuration
│   └── env.example         # Backend environment variables
├── docker-compose.yml      # Production Docker setup
├── docker-compose.dev.yml  # Development Docker setup
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Java 21+
- Maven 3.6+
- PostgreSQL 15+ (or use Docker)
- Docker & Docker Compose (optional)

### Option 1: Local Development

#### Backend Setup

1. **Configure Database**:

   ```bash
   # Create PostgreSQL database
   createdb department_db
   ```

2. **Configure Environment**:

   ```bash
   cd backend
   cp env.example .env
   # Edit .env with your database credentials
   ```

3. **Run Backend**:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

#### Frontend Setup

1. **Install Dependencies**:

   ```bash
   cd frontend
   npm install
   ```

2. **Configure Environment**:

   ```bash
   cd frontend
   cp env.example .env.local
   # Edit .env.local if needed
   ```

3. **Run Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

### Option 2: Docker Development

1. **Start Database Only**:

   ```bash
   docker-compose -f docker-compose.dev.yml up postgres
   ```

2. **Run Backend Locally** (with Docker database):

   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

3. **Run Frontend Locally**:
   ```bash
   cd frontend
   npm run dev
   ```

### Option 3: Full Docker Setup

1. **Start All Services**:
   ```bash
   docker-compose up --build
   ```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)

```env
DATABASE_URL=jdbc:postgresql://localhost:5432/department_db
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
SERVER_PORT=8080
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

#### Frontend (.env.local)

```env
NEXT_PUBLIC_API_BASE=http://localhost:8080/api
```

## 📡 API Endpoints

### Health Check

- `GET /api/ping` - Basic ping endpoint
- `GET /api/ping/health` - Health status endpoint

### Example Response

```json
{
  "message": "Department Information System Backend is running!",
  "timestamp": "2024-01-15T10:30:00",
  "status": "success",
  "version": "1.0.0"
}
```

## 🧪 Testing the Connection

1. Start both frontend and backend
2. Open http://localhost:3000
3. Click "Test Ping" to verify backend connection
4. Click "Check Health" to verify system health

## 🏗️ Development

### Adding New Modules

The project is structured to easily add new modules:

#### Backend Module Structure

```
src/main/java/com/college/backend/
├── controller/     # REST controllers
├── service/        # Business logic
├── repository/     # Data access layer
├── model/          # Entity models
└── dto/           # Data transfer objects
```

#### Frontend Module Structure

```
src/
├── app/           # Next.js pages
├── components/    # Reusable components
├── services/      # API services
├── lib/          # Utilities
└── types/        # TypeScript types
```

### Database Schema

The system uses JPA with automatic schema generation. Base entities include:

- `id` (Primary Key)
- `createdAt` (Creation timestamp)
- `updatedAt` (Last update timestamp)
- `isActive` (Soft delete flag)

## 🐳 Docker Commands

```bash
# Build and start all services
docker-compose up --build

# Start only database
docker-compose up postgres

# Start in development mode
docker-compose -f docker-compose.dev.yml up

# Stop all services
docker-compose down

# Remove volumes (careful!)
docker-compose down -v
```

## 📝 Next Steps

1. **Authentication**: Add JWT-based authentication
2. **User Management**: Create user registration/login
3. **Role Management**: Implement role-based access control
4. **Faculty Module**: Add faculty management features
5. **Student Module**: Add student management features
6. **Attendance Module**: Add attendance tracking
7. **Reports**: Add reporting and analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
