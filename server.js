const express = require('express');

const app = express();

// this serves the index.html page with index.js entry into app
app.use(express.static('./'));

const port = process.env.PORT || 3000;

// app.get('/', (req, res, next) => {
//   console.log(`request url: ${req.originalUrl}`);
//   next();
// }, (req, res) => {
//   console.log(`Request Type: ${req.method}`)
//   res.send("Express is active.");
// });

app.listen(port, () => console.log(`Listening on PORT: ${port}.`));
