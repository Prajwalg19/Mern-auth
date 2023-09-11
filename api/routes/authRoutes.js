import express from "express";
import { authSignIn, authSignUp } from "../controllers/authController.js";
const route = express.Router();
route.post("/signup", authSignUp);
route.post("/signin", authSignIn);
export default route;
