import mongoose from "mongoose";

const userSchema = new mongoose.Schema( //Schema is a constructor hence usage of new is mandatory
    {
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        pass: { type: String, required: true, unique: false },
    },
    { timestamps: true }
);

// schema is the blueprint , model is the actual working machine ,so u can't expect blueprint to work directly , model needs to be contructed to work
export const model = mongoose.model("user", userSchema);
