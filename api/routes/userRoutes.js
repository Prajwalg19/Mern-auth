import express from "express";
import { user1 } from "../controllers/userController.js";
const router = express.Router(); // create a router instance that stores all the routes under it
router.post(
    // creating a route the listens on the /a url and process the request
    "/signup",
    user1
);

export default router;
