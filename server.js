require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db'); 
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


connectDB();


app.use('/api/posts', postRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
