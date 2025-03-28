import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.send("Hello  Kien!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
