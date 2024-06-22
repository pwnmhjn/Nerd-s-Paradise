import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    bookImage: {
      type: String,
      default:
        'https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg',
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
    genre: {
      type: [String],
      enum: [
        'Fiction',
        'Non-Fiction',
        'Science Fiction',
        'Fantasy',
        'Romance',
        'Thriller',
        'Mystery',
        'Biography',
      ],
      default: [],
    },
    rating: {
      type: Number,
      default: 2,
    },
    chapters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chapter',
      },
    ],
    publish: {
      type: String,
      default: '',
      trim: true,
    },
    status: {
      type: String,
      enum: ['Finished', 'Unfinished'],
      default: 'Unfinished',
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model('Book', bookSchema);
