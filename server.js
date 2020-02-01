const http = require('http');
const app = require('./src/app');
const port = process.env.PORT || 3000;
const db = require('./src/models');

const server = http.createServer(app);

db.sequelize.sync().then(() => {
    server.listen(port, () => {
        console.log(`Product service listening on port ${port}`);
    })
})
