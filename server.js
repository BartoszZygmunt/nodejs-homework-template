import { app } from "./app.js";

import dotenv from "dotenv";

// Wczytanie zmiennych środowiskowych z pliku .env
dotenv.config();

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

import { mongoose } from "mongoose";
//console.log(process.env.DATABASE_URL);

const connection = mongoose.connect(process.env.DATABASE_URL);
