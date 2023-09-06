import express from "express";
import { user1 } from "../controllers/userController.js";
const router = express.Router(); // create a router instance that stores all the routes under it

router.post(
    // creating a route the listens on the /a url and process the request
    "/a",
    user1 // ExpressJS magically puts the request and response varaibles inside of the user1 function which will be used by the user1 function in the other file
);

router.get("/b");

export default router;
