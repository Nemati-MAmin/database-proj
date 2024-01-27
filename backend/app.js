const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const selectRoutes = require("./routes/select");
const insertionRoutes = require("./routes/insertion");

app.use(cors());
app.use(express.json());
app.use("/select", selectRoutes);
app.use("/insert", insertionRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}/salary`);
});
