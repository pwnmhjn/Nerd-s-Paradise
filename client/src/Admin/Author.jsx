import { useState } from "react";
import AdminInput from "./adminComponents/AdminInput";
import { useDispatch } from "react-redux";
import { throwFailed, throwSuccess } from "../../features/toast/toastSlice";
import axios from "axios";
import { ObjectHasValue } from "../utils/ObjectHasValue";

function Author() {
  const dispatch = useDispatch();
  const [formKey, setFormKey] = useState(0);
  const [author, setAuthor] = useState({
    name: "",
    popularity: "",
    genre: "",
    avatar: null,
  });

  const handleAuthorInput = (e) => {
    const { name, value, files } = e.target;

    setAuthor((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", author.name);
    data.append("popularity", author.popularity);
    data.append("genre", author.genre);
    data.append("avatar", author.avatar);
    const value = ObjectHasValue(data);

    if (value) {
      try {
        axios
          .post("/api/v1/admin/add-author", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            const response = res.data;
            console.log(response);
            dispatch(
              throwSuccess({
                visible: true,
                title: "Success",
                message: response.message,
              })
            );
          })
          .catch((err) => {
            const response = err.response.data;
            console.log(response.message);
            dispatch(
              throwSuccess({
                visible: true,
                title: "failed",
                message: response.message,
              })
            );
          });

        setAuthor({
          name: "",
          popularity: "",
          genre: "",
          avatar: null,
        });
        // const response = await axios.post("/api/v1/admin/add-author", data, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // });

        // console.log(response);
      } catch (error) {
        const response = error.response.data;
        dispatch(
          throwSuccess({
            visible: true,
            title: "failed",
            message: response.message,
          })
        );
      }
    } else {
      dispatch(
        throwFailed({
          visible: true,
          title: "Failed",
          message: "Please Fill All Fields",
        })
      );
      setFormKey((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className=" w-full flex  items-center justify-center  bg-index-lessLight">
        <form
          key={formKey}
          onSubmit={handleSubmit}
          className="flex flex-col items-center mx-auto my-10 py-10 place-content-center bg-index-light  w-[50%] gap-3  border-4  border-b-index-slate700 border-r-index-slate200 border-l-index-slate700 border-t-index-slate200"
        >
          <div className="h-10 w-[200px] font-mono text-l border-4 rounded-xl font-bold border-t-index-slate700 text-center border-l-index-slate700 border-b-index-slate200 border-r-index-slate200 ">
            <h1 className="mt-[5px]">Create Author</h1>
          </div>
          <AdminInput
            inputName={"name"}
            inputText={"Author Name"}
            type={"text"}
            handleBookInput={handleAuthorInput}
          />
          <AdminInput
            inputName={"avatar"}
            inputText={"Enter Profile Picture"}
            type={"file"}
            handleBookInput={handleAuthorInput}
          />
          <AdminInput
            inputName={"popularity"}
            inputText={"Enter Popularity"}
            type={"number"}
            handleBookInput={handleAuthorInput}
          />

          <span className="flex flex-col place-items-center mt-3 col-span-1 ">
            <label
              className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200"
              htmlFor="genre"
            >
              Select Genre
            </label>
            <select
              className="bg-black border-[3px] h-[35px] w-24 outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
              id="genre"
              name="genre"
              onChange={handleAuthorInput}
            >
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
              <option value="Mystery">Mystery</option>
              <option value="Biography">Biography</option>
            </select>
          </span>

          <button
            className="border-2 p-2 px-3 hover:font-bold font-mono h-fit text-2xl w-[150px] my-3 border-b-index-slate700  hover:bg-index-lessDark bg-index-dark    border-r-index-slate700 shadow-2xl  hover:shadow-inner "
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Author;
