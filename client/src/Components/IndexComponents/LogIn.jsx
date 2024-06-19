import axios from "axios";
import { useState } from "react";
import { LogInBtnClass } from "../../tailwindClass/BtnStyle";

import Toast from "../../Custom/Toast/Toast";
import {
  Container,
  XButton,
  ErrTitle,
  ErrDesc,
  SucTitle,
} from "../../Custom/Toast/ToastClass";
import Input from "./Input";
import { ObjectHasValue } from "../../utils/ObjectHasValue";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [toast, setToast] = useState({
    visible: false,
    title: "",
    message: "",
  });

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

  const cancelToast = () => {
    setToast({ visible: false });
  };

  if (toast.visible === true) {
    setTimeout(() => {
      setToast((prevToast) => ({
        ...prevToast,
        visible: false,
      }));
    }, 3000);
  }
  const Navigate = useNavigate();

  const LogIn = (event) => {
    event.preventDefault();
    if (ObjectHasValue(userFields)) {
      try {
        axios
          .post("/api/v1/users/login", userFields)
          .then((res) => {
            const response = res.data;
            setToast({
              visible: true,
              title: "Success",
              message: response.message,
            });
            Navigate("/about");
          })
          .catch((err) => {
            const response = err.response.data;
            setToast({
              visible: true,
              title: "Failed",
              message: response.message,
            });
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setToast({
        visible: true,
        title: "Failed",
        message: "Password or Username is Missing",
      });
    }
  };
  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          onSubmit={LogIn}
          action=""
          className=" flex flex-col items-center mx-auto  h-[400px] place-content-center bg-custom-light  w-[400px] gap-3  border-4  border-t-custom-slate700 border-l-custom-slate700 border-r-custom-slate200 border-b-slate200  "
        >
          <span className="h-10 w-[100px] font-mono text-l border-4 rounded-xl font-bold border-t-custom-slate700 text-center border-l-custom-slate700 ">
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
          {toast.visible && (
            <Toast
              title={toast.title}
              message={toast.message}
              Container={Container}
              XButton={XButton}
              ErrTitle={ErrTitle}
              ErrDesc={ErrDesc}
              SucTitle={SucTitle}
              cancelToast={cancelToast}
            />
          )}
          <button className={LogInBtnClass}>Log In</button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
