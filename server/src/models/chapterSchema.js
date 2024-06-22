import mongoose, { Schema } from 'mongoose';

const chapterSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    ratings: {
      type: Number,
      default: 2,
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
    },
    status: {
      type: String,
      enum: ['Finished', 'Unfinished'],
      default: 'Unfinished',
    },
  },
  { timestamps: true }
);

export const Chapter = mongoose.model('Chapter', chapterSchema);
