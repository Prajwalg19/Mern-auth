import mongoose from "mongoose"; //once mongoDb database is connected it is applicable to all files
const userSchema = new mongoose.Schema( //Schema is a constructor hence usage of new is mandatory
    {
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        pass: { type: String, required: true, unique: false },
        photoURL: { type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
    },
    { timestamps: true } //server time self created
);

// schema is the blueprint , model is the actual working machine ,so u can't expect blueprint to work directly , model needs to be contructed to work
export const model = mongoose.model("user", userSchema); //user is the collection name , it will be appended with 's' by mongoDb
