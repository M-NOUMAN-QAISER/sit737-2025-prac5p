# 5.2D Calculator Microservice

A simple Node.js calculator API containerized with Docker and deployed to Google Cloud.

## 🚀 Quick Start

```bash
# Clone and run locally
git clone https://github.com/M-NOUMAN-QAISER/sit737-2025-prac5d.git
cd sit737-2025-prac5d
npm install
npm start
```

Visit: `http://localhost:3000`

## 📡 API Endpoints

| Operation | URL | Example |
|-----------|-----|---------|
| Add | `/add?num1=5&num2=3` | Returns: `{"result": 8}` |
| Subtract | `/subtract?num1=10&num2=4` | Returns: `{"result": 6}` |
| Multiply | `/multiply?num1=7&num2=8` | Returns: `{"result": 56}` |
| Divide | `/divide?num1=20&num2=4` | Returns: `{"result": 5}` |
| Square Root | `/sqrt?num=16` | Returns: `{"result": 4}` |
| Power | `/power?base=2&exponent=3` | Returns: `{"result": 8}` |

## 🐳 Docker

```bash
# Build and run
docker build -t calculator-microservice .
docker run -p 3000:3000 calculator-microservice

# Or use docker-compose
docker-compose up
```

## ☁️ Google Cloud Deployment

```bash
# Setup
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud auth configure-docker

# Deploy
docker tag calculator-microservice gcr.io/YOUR_PROJECT_ID/calculator-microservice:v1
docker push gcr.io/YOUR_PROJECT_ID/calculator-microservice:v1

# Run from cloud
docker run -p 3001:3000 gcr.io/YOUR_PROJECT_ID/calculator-microservice:v1
```

## 📁 Files

- `app.js` - Main server file
- `package.json` - Dependencies
- `Dockerfile` - Container config
- `docker-compose.yml` - Local development

## 🎯 Purpose

SIT737 Task 5.2D - Dockerization and cloud deployment of a Node.js microservice.

---

**Author**: Muhammad Nouman Qaiser  
**Course**: SIT737 - Cloud Native Application Development