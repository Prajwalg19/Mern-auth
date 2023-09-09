import express from "express";
import { auth, out } from "../controllers/authController.js";
const route = express.Router();
route.get("/signup", auth);
route.post("/signout", out);
export default route;
