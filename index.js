const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker Node App version 2!!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

