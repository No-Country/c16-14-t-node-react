const server = require('./scr/server.js');
const { conn } = require('./scr/db.js');
const PORT = 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))