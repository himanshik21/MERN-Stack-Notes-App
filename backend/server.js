const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const notesRoutes = require('./routes/notesRoute');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use("/api/notes", notesRoutes);

// ------------------------- deployment ---------------------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, 'frontend', "build", "index.html"));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Api testing fine');
    });
}

// ------------------------- deployment ---------------------------------------


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at PORT ${PORT}`));