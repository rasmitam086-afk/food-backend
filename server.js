
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import express from "express";
import connectDB from "./db.js";
import dns from "dns";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user.routes.js";
import foodRouters from "./routes/food.routes.js";
import TableRoutes from "./routes/table.routes.js";
import ContactRoutes from "./routes/contact.routes.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", UserRouter);
app.use("/api/food", foodRouters);
app.use("/api/table", TableRoutes);
app.use("/api/contact", ContactRoutes);


dns.setServers(["8.8.8.8", "8.8.4.4"]);


const PORT = process.env.PORT || 5500;
connectDB();
app.listen(PORT, () => {
  console.log("Server is Runing On Port", PORT);
});
