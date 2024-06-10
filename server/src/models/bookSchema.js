import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({});

export const Books = mongoose.model("Books", bookSchema);
