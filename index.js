import express from "express";
import mongoose from "mongoose";
import "dotenv/config"; //gives access to the environment variables defined in the .env file
import userRoutes from "./api/routes/userRoutes.js";
import authRoutes from "./api/routes/authRoutes.js";
import { handleError } from "./api/utils/errors.js";
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
app.use(express.json()); //converts the recieved request body json format into javascript obejct and puts it back into the request body
app.use("/api/user", userRoutes); // the use is a method that takes a middleware (functions that have the request and response object , used in between the requests and responses, the /api url has all the routes under the userRoutes module)

app.use("/api/auth", authRoutes); //url for authentication

app.use((err, req, res, next) => {
    const statusCode = err.statusCode ?? 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({ success: false, message, statusCode });
});
