import { useState } from "react";
import { ObjectHasValue } from "../../utils/ObjectHasValue";
import { SignUpBtnClass } from "../../tailwindClass/BtnStyle";
import axios from "axios";
import Input from "./Input";

function SignUp() {
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
      axios.post("/api/v1/users/register", userFields).then((res) => {
        console.log(res.data);
      });
    } else {
      console.log("NO");
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
