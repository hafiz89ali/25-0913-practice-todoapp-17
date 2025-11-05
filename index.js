import express from "express";
import router from "./routes/routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(router);

app.listen(PORT, () => {
  console.log(`System is running on port ${PORT}.`);
});
