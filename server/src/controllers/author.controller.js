import { AsyncWrap } from "../utils/AsyncWrap.js";
import { Author } from "../models/authorSchema.js";

const getAuthors = AsyncWrap(async (req, res) => {
    const authors = await Author.find()
    console.log(authors)
})

export { getAuthors }



