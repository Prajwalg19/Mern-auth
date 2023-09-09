import { model } from "../models/usermodel.js";
import bcryptjs from "bcryptjs"; //for encrypting the user password to a hash value for security & privacy reasons
export const auth = async (req, res) => {
    try {
        let { userName, email, pass } = req.body;
        const hashedPass = bcryptjs.hashSync(pass, 12);
        const newUser = new model({
            userName, //after es6 , if the key and variable name of the value are of the same name ,then the shorthand of writing only one was introduced
            email,
            pass: hashedPass,
        });
        await newUser.save();
        const promise = res.status(201).json("User created Successfully");
        console.log(promise);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const out = () => {};
