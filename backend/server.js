const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express(),
  port=process.env.PORT||3005;

  app.use(morgan('combined'));

// Pokretanje servera
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*const dbService = require('./services/db-service');
dbService.initOracleClient();
dbService.connectToDatabase();*/

app.get('/', (req,res)=>{
  res.send("Hello");
})
