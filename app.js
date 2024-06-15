const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes');


const app = express();
app.use(cors()); 
mongoose.connect('mongodb://localhost:27017/transaction-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Database Connecttion
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB Connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
 
app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
