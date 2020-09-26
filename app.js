const express = require("express");
const app = express();
const db = require("./helper/dbProc")();
const mainRoutes = require("./routes/mainRoutes");
const port = process.env.PORT || 5001;
const bodyParser = require("body-parser");
const errorHandler = require("./middlewear/errorHandling");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`localhost:${port} -> API OK `);
});

 app.use('/getRecords',mainRoutes)

 app.use((req, res, next) => {
  errorHandler.notFound(res);
});