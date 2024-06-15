const transactionService = require('../services/transactionService');

// Using async/await concept - get transaction list
async function getTransactions(req, res, next) {
  try {
    const transactions = await transactionService.getTransactions();
    res.status(200).json({
      message: 'Transactions data',
      data: transactions
    });
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Using promise concept - call transaction data by start and end date
function filterTransactionByDate(req, res, next) {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate) {
    return res.status(400).json({
      message: 'startDate and endDate query parameters are required',
      data: null
    });
  }

  transactionService.filterTransactionByDate(startDate, endDate)
    .then(transactions => {
      res.status(200).json({
        message: 'Transactions data',
        data: transactions
      });
    })
    .catch(error => {
      console.error('Controller error:', error);
      res.status(500).json({ error: 'Server error' });
    });
}

// Using async/await concept - filter transactions by status
async function filterTransactionByStatus(req, res, next) {
  const { status } = req.query;
  try {
    const transactions = await transactionService.filterTransactionByStatus(status);
    res.status(200).json({
      message: 'Transactions data',
      data: transactions
    });
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  getTransactions,
  filterTransactionByDate,
  filterTransactionByStatus
};


// //by using async await concept - get transaction list
// async function getTransactions(req, res, next) {
 
//   try {
//    const transactions = await transactionService.getTransactions();
//     res.status(200).json({
//         message: 'Transactions data',
//         data: transactions
//       });
//   } catch (error) {
//     console.error('Controller error:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// }

// //Using promise concept - call transaction data by start and end date
// function filterTransactionByDate(req, res, next) {
//   const { startDate, endDate } = req.query;
//   if (!startDate || !endDate) {
//       return res.status(400).json({
//           message: 'startDate and endDate query parameters are required',
//           data: null
//       });
//   }

//   transactionService.filterTransactionByDate(startDate, endDate)
//       .then(transactions => {
//           res.status(200).json({
//               message: 'Transactions data',
//               data: transactions
//           });
//       })
//       .catch(error => {
//           console.error('Controller error:', error);
//           res.status(500).json({ error: 'Server error' });
//       });
// }


//   async function filterTransactionByStatus(req, res, next){
//     const {status} = req.query;
//     try {
//       const transactions = await transactionService.filterTransactionByStatus(status);
//       res.status(200).json({
//           message: 'Transactions data',
//           data: transactions
//         });
//     } catch (error) {
//       console.error('Controller error:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   }


// module.exports = {
//   getTransactions,
//   filterTransactionByDate,
//   filterTransactionByStatus
// };
