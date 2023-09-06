import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        pass: { type: String, required: true, unique: false },
    },
    { timestamp: true }
);

// schema is the blueprint , model is the actual working machine ,so u can't expect blueprint to work directly , model needs to be contructed to work
const model = mongoose.model("user", userSchema);
export const user1 = new model({
    userName: "Prajwal",
    email: "theimperical8@gmail.com",
    pass: "34dweof",
});
