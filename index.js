import express from "express";
import mongoose from "mongoose";
import "dotenv/config"; //gives access to the environment variables defined in the .env file
const app = express();
const db = mongoose
    .connect(process.env.URL) // process.env is a object with the members that are the key value pairs of the details written inside the .env file
    .then(console.log("logged in"))
    .catch((e) => {
        console.log(e);
    });
app.listen(4500, () => {
    //starts the server in the defined port number are listens in the same port
    console.log("boo");
});
