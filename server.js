const express = require('express');
const path = require('path');
const routes = require('./src/server/routes');

const app = express();
const port = parseInt(process.env.BLOCKLET_PORT || process.env.APP_PORT, 10) || 3001;

app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});