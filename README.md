# Calculator Microservice

This project is a simple **Calculator Microservice** built with **Node.js** and **Express**. The microservice provides basic arithmetic operations such as **addition**, **subtraction**, **multiplication**, and **division**. It is designed to handle incoming HTTP requests and perform calculations based on provided parameters.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Logging](#logging)


---

## Project Overview

This **Calculator Microservice** provides a simple and efficient way to perform basic arithmetic operations through an API. The service accepts HTTP requests, performs the requested operations, and returns the results as JSON responses. Additionally, the service includes **Winston logging** for tracking requests and errors.

---

## Technologies Used

- **Node.js**: JavaScript runtime used for building the microservice.
- **Express**: Framework used for routing and handling HTTP requests.
- **Winston**: Logging library used to log request details and errors.
- **npm**: Node package manager used to install dependencies.

---

## Installation

### Prerequisites

- **Node.js**: Download and install from [here](https://nodejs.org/en/download/).
- **npm**: Comes bundled with Node.js.

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/M-NOUMAN-QAISER/sit737-2025-prac4p.git
   cd sit737-2025-prac4p
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure that all dependencies, including **Express** and **Winston**, are properly installed.

---

## Usage

### Run the Microservice

1. To run the server, execute the following command in the project directory:
   ```bash
   node server.js
   ```

2. The server will start on `http://localhost:3000` by default.

3. You can now send HTTP requests to the following API endpoints.

---

## API Endpoints

The microservice exposes four main API endpoints:

### `GET /add?num1=<number>&num2=<number>`
- **Description**: Adds two numbers.
- **Example Request**:
  ```
  GET http://localhost:3000/add?num1=5&num2=3
  ```
- **Response**:
  ```json
  {
    "operation": "addition",
    "num1": 5,
    "num2": 3,
    "result": 8
  }
  ```

### `GET /subtract?num1=<number>&num2=<number>`
- **Description**: Subtracts the second number from the first number.
- **Example Request**:
  ```
  GET http://localhost:3000/subtract?num1=10&num2=5
  ```
- **Response**:
  ```json
  {
    "operation": "subtraction",
    "num1": 10,
    "num2": 5,
    "result": 5
  }
  ```

### `GET /multiply?num1=<number>&num2=<number>`
- **Description**: Multiplies two numbers.
- **Example Request**:
  ```
  GET http://localhost:3000/multiply?num1=5&num2=3
  ```
- **Response**:
  ```json
  {
    "operation": "multiplication",
    "num1": 5,
    "num2": 3,
    "result": 15
  }
  ```

### `GET /divide?num1=<number>&num2=<number>`
- **Description**: Divides the first number by the second number.
- **Example Request**:
  ```
  GET http://localhost:3000/divide?num1=10&num2=2
  ```
- **Response**:
  ```json
  {
    "operation": "division",
    "num1": 10,
    "num2": 2,
    "result": 5
  }
  ```

---

## Logging

The **Winston** logging library is used to track requests and errors. Logs are written to two files:

- **combined.log**: Logs all requests, including errors and general information.
- **error.log**: Contains only error logs.

### Real-Time Log Monitoring

To monitor logs in real-time:

1. On **Windows PowerShell**, run:
   ```bash
   Get-Content -Path "logs\combined.log" -Wait
   ```

2. On **Linux/MacOS**, use:
   ```bash
   tail -f logs/combined.log
   ```

This allows you to view the latest logs as they are generated.


---



