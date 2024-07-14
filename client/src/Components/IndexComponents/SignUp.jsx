/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { ObjectHasValue } from "../../utils/ObjectHasValue";
import { SignUpBtnClass } from "../../tailwindClass/BtnStyle";
import { throwFailed, throwSuccess } from "../../../features/toast/toastSlice";
import { useDispatch } from "react-redux";
import { setTrue } from "../../../features/header/headerSlice";
import { registerUser } from "../../../Api/user.js";

import Input from "./Input";

function SignUp() {
  const dispatch = useDispatch();

  const [userFields, setUserFields] = useState({
    username: "",
    fullname: "",
    DOB: "",
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const userFieldName = event.target.name;
    const userFieldValue = event.target.value;

    setUserFields((prev) => {
      prev[userFieldName] = userFieldValue;
      return { ...prev };
    });
  };

  const createUser = async (event) => {
    event.preventDefault();
    const response = await registerUser(userFields);
    console.log(response);
    if (response.statusCode === 200) {
      const user = response.data.user;
      console.log(user);

      dispatch(
        throwSuccess({
          visible: true,
          title: "Success",
          message: response.message,
        })
      );
      dispatch(setTrue(true));
    } else {
      dispatch(
        throwFailed({
          visible: true,
          title: "Failed",
          message: response.message,
        })
      );
    }

    // if (ObjectHasValue(userFields)) {
    //   try {
    //     axios
    //       .post("/api/v1/users/register", userFields)
    //       .then((res) => {
    //         const response = res.data;

    //         dispatch(
    //           throwSuccess({
    //             visible: true,
    //             title: "Success",
    //             message: response.message,
    //           })
    //         );
    //         setTimeout(() => {
    //           dispatch(setTrue(true));
    //         }, 3000);
    //       })
    //       .catch((err) => {
    //         const response = err.response.data;

    //         dispatch(
    //           throwFailed({
    //             visible: true,
    //             title: "Failed",
    //             message: response.message,
    //           })
    //         );
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else {
    //   dispatch(
    //     throwFailed({
    //       visible: true,
    //       title: "Failed",
    //       message: "Please Fill All Fields",
    //     })
    //   );
    // }
  };

  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          action=""
          onSubmit={createUser}
          className=" flex flex-col items-center mx-auto  h-[600px] place-content-center bg-index-light  w-[400px] gap-3  border-4  border-b-index-slate700 border-r-index-slate200 border-l-index-slate700 border-t-index-slate200  "
        >
          <span className="h-10 w-[200px] font-mono text-l border-4 rounded-xl font-bold border-t-index-slate700 text-center border-l-index-slate700 border-b-index-slate200 border-r-index-slate200 ">
            <h1 className="mt-[5px]">Register Yourself</h1>
          </span>

          <Input
            inputText="Enter Name"
            inputName="fullname"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Username"
            inputName="username"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Email"
            inputName="email"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter DOB"
            inputName="DOB"
            type="date"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Password"
            inputName="password"
            type="password"
            handleUserInput={handleUserInput}
          />

          <button className={SignUpBtnClass}>Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
