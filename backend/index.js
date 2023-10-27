const express = require('express');
const cors = require("cors");

const reservationRoutes = require("./routes/reservationRoutes");

const app = express();
const port = 3001;

app.use(cors()); //This allows sites to connect to this API.
app.use(express.json());

app.use("/reservations", reservationRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});