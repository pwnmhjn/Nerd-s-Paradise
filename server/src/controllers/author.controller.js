import { AsyncWrap } from "../utils/AsyncWrap.js";
import { Author } from "../models/authorSchema.js";
import { ErrorAPI } from "../utils/ErrorAPI.js";
import { ResponseAPI } from "../utils/ResponseAPI.js";

const getAuthors = AsyncWrap(async (req, res) => {
    const authors = await Author.find()
    if (!authors) {
        throw new ErrorAPI(503, "Could not get Users")
    }
    res.status(200).json(new ResponseAPI(200, authors, null))
})

export { getAuthors }



