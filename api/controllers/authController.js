import { model } from "../models/usermodel.js";
import bcryptjs from "bcryptjs"; //for encrypting the user password to a hash value for security & privacy reasons
import { handleError } from "../utils/errors.js";
export const auth = async (req, res, next) => {
    try {
        let { userName, email, pass } = req.body;
        const hashedPass = bcryptjs.hashSync(pass, 12);
        const newUser = new model({
            //creation of the document using the model created using the schema defined
            userName, //after es6 , if the key and variable name of the value are of the same name ,then the shorthand of writing only one was introduced
            email,
            pass: hashedPass,
        });
        await newUser.save(); //saves the document inside of the collection.
        const promise = res.status(201).json("User created Successfully");
        console.log(promise);
    } catch (e) {
        next(handleError(300, "something went wrong"));
    }
};

export const out = () => {};
