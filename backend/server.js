const express = require('express');
const dotenv = require('dotenv')
const notes = require('./data/notes');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Api testing fine');
// });

app.get('/api/notes', (req, res) => {
    console.log(notes);
});

app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at PORT ${PORT}`));