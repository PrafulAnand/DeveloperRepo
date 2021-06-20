const express = require('express');
const path = require('path');
const userRoutes = require('./devapi/api.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', userRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));