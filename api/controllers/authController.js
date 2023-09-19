import { model } from "../models/usermodel.js";
import bcryptjs from "bcryptjs"; //for encrypting the user password to a hash value for security & privacy reasons
import { handleError } from "../utils/errors.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
export const authSignUp = async (req, res, next) => {
    //post method from the authRoutes pases only 3 parameters i.e req,res and next
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
    } catch (e) {
        next(e);
    }
};

export const authSignIn = async (req, res, next) => {
    const { email, pass } = req.body;
    let databaseRes = await model.findOne({ email }); //findOne takes, first parameter : query , second parameter : the key that we exclusively need
    let hashPass;
    if (databaseRes != null) {
        hashPass = databaseRes.pass; //for find : a query always returns an array of objects(Documents in the collections) but for findOne it returns only object
    } else {
        hashPass = "";
    }
    let compareBol = bcryptjs.compareSync(pass, hashPass); //the bcryptjs will compare the normal form of the password with the hashCode and return the boolean
    if (compareBol) {
        let { pass, ...rest } = databaseRes._doc; //spreads all the key-values into individuals and puts all the keys and values pairs inside the rest variable . _doc cantains all the information related to the document

        const token = jwt.sign({ id: rest._id }, process.env.MY_JWT, { expiresIn: "1m" }); //expiry time of the token.
        res.cookie("my-cookie", token, { secure: true, httpOnly: true, maxAge: 60 * 60 * 24 * 1000 }) //expiry time of the cookie in the browsers
            .status(200)
            .json({
                success: true,
                message: "User Authenticated",
                data: rest,
            });
    } else if (!compareBol && databaseRes?._doc?.userName != undefined) {
        // ?. is called optional chaining , if there's no property inside the object then it doesn't break the flow and it returns the undefined instead
        next(handleError(401, "wrong credentials"));
    } else {
        next(handleError(404, "Something went wrong"));
    }
};
