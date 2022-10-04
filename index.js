import express from "express";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ response: "Server berjalan" });
});
app.use(router);

app.listen(process.env.POR || 8080, () => {
  console.log("server up and running...");
});
