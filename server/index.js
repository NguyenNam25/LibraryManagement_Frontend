const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

// Routes
const bookRoute = require('./routes/book.route.js')
const roleRoute = require('./routes/role.route.js')
const MajorRoute = require('./routes/major.route.js')
const userRoute = require('./routes/user.route.js')
const borrowTicketRoute = require('./routes/borrowticket.route.js')

app.use('/books', bookRoute);
app.use('/roles', roleRoute);
app.use('/majors', MajorRoute);
app.use('/users', userRoute);
app.use('/borrow-tickets', borrowTicketRoute);

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('[✅] MongoDB connected'))
  .catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[🚀] Server running on http://localhost:${PORT}`);
});