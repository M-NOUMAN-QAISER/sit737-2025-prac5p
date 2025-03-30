const express = require('express');
const winston = require('winston');
const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    logger.info({
        message: 'Incoming request',
        method: req.method,
        url: req.url,
        ip: req.ip,
        headers: req.headers
    });
    next();
});

// Helper function to validate numbers
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return { valid: false, message: 'Parameters must be valid numbers' };
    }
    return { valid: true };
};

// Addition endpoint
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        logger.error({
            message: 'Invalid parameters for addition operation',
            num1: req.query.num1,
            num2: req.query.num2
        });
        return res.status(400).json({ error: validation.message });
    }
    
    const result = num1 + num2;
    
    logger.info({
        level: 'info',
        message: `New addition operation requested: ${num1} + ${num2} = ${result}`
    });
    
    res.json({ operation: 'addition', num1, num2, result });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        logger.error({
            message: 'Invalid parameters for subtraction operation',
            num1: req.query.num1,
            num2: req.query.num2
        });
        return res.status(400).json({ error: validation.message });
    }
    
    const result = num1 - num2;
    
    logger.info({
        level: 'info',
        message: `New subtraction operation requested: ${num1} - ${num2} = ${result}`
    });
    
    res.json({ operation: 'subtraction', num1, num2, result });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        logger.error({
            message: 'Invalid parameters for multiplication operation',
            num1: req.query.num1,
            num2: req.query.num2
        });
        return res.status(400).json({ error: validation.message });
    }
    
    const result = num1 * num2;
    
    logger.info({
        level: 'info',
        message: `New multiplication operation requested: ${num1} * ${num2} = ${result}`
    });
    
    res.json({ operation: 'multiplication', num1, num2, result });
});

// Division endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    const validation = validateNumbers(num1, num2);
    if (!validation.valid) {
        logger.error({
            message: 'Invalid parameters for division operation',
            num1: req.query.num1,
            num2: req.query.num2
        });
        return res.status(400).json({ error: validation.message });
    }
    
    if (num2 === 0) {
        logger.error({
            message: 'Division by zero attempt',
            num1: num1,
            num2: num2
        });
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    
    const result = num1 / num2;
    
    logger.info({
        level: 'info',
        message: `New division operation requested: ${num1} / ${num2} = ${result}`
    });
    
    res.json({ operation: 'division', num1, num2, result });
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error({
        message: 'Server error',
        error: err.message,
        stack: err.stack
    });
    res.status(500).json({ error: 'Internal server error' });
});
// Root path handler
app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Calculator Microservice</h1>
        <p>Available endpoints:</p>
        <ul>
            <li><a href="/add?num1=5&num2=3">/add?num1=5&num2=3</a></li>
            <li><a href="/subtract?num1=10&num2=4">/subtract?num1=10&num2=4</a></li>
            <li><a href="/multiply?num1=6&num2=7">/multiply?num1=6&num2=7</a></li>
            <li><a href="/divide?num1=20&num2=5">/divide?num1=20&num2=5</a></li>
        </ul>
    `);
});
// Start the server
app.listen(port, () => {
    logger.info(`Calculator microservice listening at http://localhost:${port}`);
});

module.exports = app;
