import axios from "axios";
import { useState } from "react";
import { LogInBtnClass } from "../../tailwindClass/BtnStyle";
import { throwFailed, throwSuccess } from "../../../features/toast/toastSlice";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { ObjectHasValue } from "../../utils/ObjectHasValue";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [userFields, setUserFields] = useState({
    username: "",
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

  const LogIn = (event) => {
    event.preventDefault();
    if (ObjectHasValue(userFields)) {
      try {
        axios
          .post("/api/v1/users/login", userFields)
          .then((res) => {
            const response = res.data;
            dispatch(
              throwSuccess({
                visible: true,
                title: "Failed",
                message: response.message,
              })
            );
            Navigate("/reader");
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
          message: "Password or Username is Missing",
        })
      );
    }
  };
  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          onSubmit={LogIn}
          action=""
          className=" flex flex-col items-center mx-auto  h-[400px] place-content-center bg-index-light  w-[400px] gap-3  border-4  border-t-index-slate700 border-l-index-slate700 border-r-index-slate200 border-b-index-slate200  "
        >
          <span className="h-10 w-[100px] font-mono text-l border-4 rounded-xl font-bold border-t-index-slate700 text-center border-l-index-slate700 border-r-index-slate200 border-b-index-slate200  ">
            <h1 className="mt-[5px]">LogIn</h1>
          </span>

          <Input
            inputText="Enter Username"
            inputName="username"
            type="text"
            handleUserInput={handleUserInput}
          />
          <Input
            inputText="Enter Password"
            inputName="password"
            type="password"
            handleUserInput={handleUserInput}
          />

          <button className={LogInBtnClass}>Log In</button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
