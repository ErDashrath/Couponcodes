const express = require('express');
const app = express();
require('dotenv').config();

// Uncomment and require these when ready
const bodyParser = require('body-parser');
 const cors = require('cors');
 const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

// Database connection (Uncomment when ready)
require('./Models/db');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Uncomment these when ready to use
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
