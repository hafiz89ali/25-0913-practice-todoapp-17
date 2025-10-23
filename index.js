console.log("System is running.");

import router from "./routes/routes";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
