import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      toLowerCase: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, //? cloudinary url
      required: true,
    },
    coverImage: {
      type: String, //? cloudinary url
    },
    refreshToken: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    readList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Books",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
