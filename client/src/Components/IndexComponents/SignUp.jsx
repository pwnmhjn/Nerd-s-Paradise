/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { ObjectHasValue } from "../../utils/ObjectHasValue";
import { SignUpBtnClass } from "../../tailwindClass/BtnStyle";
import { throwFailed, throwSuccess } from "../../../features/toast/toastSlice";
import { useDispatch } from "react-redux";

import Input from "./Input";

function SignUp({ visibleLogin }) {
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

  const createUser = (event) => {
    event.preventDefault();
    if (ObjectHasValue(userFields)) {
      try {
        axios
          .post("/api/v1/users/register", userFields)
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

            setTimeout(visibleLogin, 3000);
          })
          .catch((err) => {
            const response = err.response.data;

            dispatch(
              throwFailed({
                visible: true,
                title: "Failed",
                message: response.message,
              })
            );
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(
        throwFailed({
          visible: true,
          title: "Failed",
          message: "Please Fill All Fields",
        })
      );
    }
  };

  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          action=""
          onSubmit={createUser}
          className=" flex flex-col items-center mx-auto  h-[600px] place-content-center bg-custom-light  w-[400px] gap-3  border-4  border-b-custom-slate700 border-r-custom-slate200 border-l-custom-slate700 border-t-custom-slate200  "
        >
          <span className="h-10 w-[200px] font-mono text-l border-4 rounded-xl font-bold border-t-slate-700 text-center border-l-slate-700 ">
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
