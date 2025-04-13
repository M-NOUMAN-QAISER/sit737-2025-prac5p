# SIT737 – 5.1P: Calculator Microservice (Dockerised)

This project is a Node.js microservice that performs basic calculator operations. It has been containerised using Docker and deployed using Docker Compose.

---

## 🧰 Tools Used
- Node.js
- Express.js
- Docker & Docker Compose
- Winston (Logging)
- GitHub

---

## 📦 Features
- Basic operations: add, subtract, multiply, divide
- Advanced operations: exponent, square root, modulo
- Logs all requests and errors
- Health check enabled for Docker container

---

## 📁 Project Structure
```
calculator-microservice/
│
├── app.js                 # Main application logic
├── Dockerfile             # Docker container definition
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # Project metadata and dependencies
└── logs/                  # Winston logs directory (auto-created)
```

---

## 🚀 Setup & Run Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/M-NOUMAN-QAISER/sit737-2025-prac5p.git
cd sit737-2025-prac5p
```

### 2. Build the Docker Image
```bash
docker-compose build
```

### 3. Run the Container
```bash
docker-compose up
```

### 4. Open the App
Visit: [http://localhost:3000](http://localhost:3000)

---

## 🩺 Health Check

Docker Compose includes a health check:
```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/add?num1=1&num2=1"]
  interval: 30s
  timeout: 10s
  retries: 3
```

The container will restart if it becomes unhealthy.

---

## 📤 Submission

GitHub Repository:  
[https://github.com/M-NOUMAN-QAISER/sit737-2025-prac5p](https://github.com/M-NOUMAN-QAISER/sit737-2025-prac5p)

This completes all required steps of the 5.1P assessment task.

---

## 👨‍💻 Author
**Muhammad Nouman Qaiser**
