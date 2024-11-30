import express from "express";
const app = express();
const PORT = 3000;
import shortnerProvider from "./routes/shortnerProvider";
import createShortner from "./routes/createShortner";

app.use(express.json());

app.use("/create-url-shortner",createShortner);
app.use("/",shortnerProvider);


app.listen(PORT,()=>console.log("Server started successfully..."));