const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Bienvenue Guillaume Forestier !');
});

server.listen(process.env.PORT || 3000);