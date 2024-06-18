import { LogInBtnClass } from "../../tailwindClass/BtnStyle";
import Input from "./Input";

function LogIn() {
  return (
    <>
      <div className=" col-span-5 h-auto place-content-center ">
        <form
          action=""
          className=" flex flex-col items-center mx-auto  h-[400px] place-content-center bg-custom-light  w-[400px] gap-3  border-4  border-t-custom-slate700 border-l-custom-slate700 border-r-custom-slate200 border-b-slate200  "
        >
          <span className="h-10 w-[100px] font-mono text-l border-4 rounded-xl font-bold border-t-custom-slate700 text-center border-l-custom-slate700 ">
            <h1 className="mt-[5px]">LogIn</h1>
          </span>

          <Input inputText="Enter Username" inputName="username" type="text" />
          <Input
            inputText="Enter Password"
            inputName="password"
            type="password"
          />

          <button className={LogInBtnClass}>Log In</button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
