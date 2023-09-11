import express from "express";
import mongoose from "mongoose";
import "dotenv/config"; //gives access to the environment variables defined in the .env file
import userRoutes from "./api/routes/userRoutes.js";
import authRoutes from "./api/routes/authRoutes.js";
const app = express();

export const db = mongoose
    .connect(process.env.URL) // process.env is a object with the members that are the key value pairs of the details written inside the .env file
    .then(console.log("logged in"))
    .catch((e) => {
        console.log(e);
    });
app.listen(4500, () => {
    //starts the server in the defined port number and listens in the same port
    console.log("Server Stated at port 4500");
});
app.use(express.json()); //converts the recieved request body json format into javascript obejct and puts it back into the request body
app.use("/api/user", userRoutes); // the use is a method that takes a middleware functions that have access to the request and response object , used in between the requests and responses, the /api/user url has all the routes under the userRoutes module)

//pipelines is a series of middlewares one after the other in form of serial disjoint pipes arranged one after one. Every middleware has it's own tasks
//cycle of request response is self explanatory
app.use("/api/auth", authRoutes); //url for authentication
app.use((err, req, res, next) => {
    //middleware is passed with 4 parameters and they should be in the same order (names can be anything )
    const statusCode = err.statusCode ?? 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({ success: false, message, statusCode });
});
