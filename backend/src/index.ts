import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
import shortnerProvider from "./routes/shortnerProvider";
import createShortner from "./routes/createShortner";

app.use(cors());
app.use(express.json());

app.use("/create-url-shortner",createShortner);
app.use("/",shortnerProvider);

export default app;
// app.listen(PORT,()=>console.log("Server started successfully..."));
