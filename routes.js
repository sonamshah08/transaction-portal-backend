
const express = require('express');
const router = express.Router();
const transactionController = require('./controllers/transactionController');

// Route to fetch transactions based on startDate and endDate
router.get('/transactions', transactionController.getTransactions);
router.get('/transactions/date', transactionController.filterTransactionByDate);
router.get('/transactions/status', transactionController.filterTransactionByStatus);

module.exports = router;
