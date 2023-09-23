import express from "express";
import { authSignIn, authSignUp, authGoogle } from "../controllers/authController.js";
const route = express.Router();
route.post("/signup", authSignUp);
route.post("/signin", authSignIn);
route.post("/google", authGoogle);
export default route;
