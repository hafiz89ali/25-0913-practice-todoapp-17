console.log("System is running.");

import express from "express";
import database from "./database/connection.js";
import router from "./routes/routes.js";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});
