const express = require('express');

const app = express();

// app.use(express.static('./'));
// console.log(express.static('./'));

const port = process.env.PORT || 3000;

app.get('./', (req, res) => {
  res.send("Express is working.");
});

app.listen(port, () => console.log(`Listening on PORT: ${port}.`));
