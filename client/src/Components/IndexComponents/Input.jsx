/* eslint-disable react/prop-types */
function Input({ inputText, inputName, type, handleUserInput }) {
  return (
    <>
      <span className="flex flex-col mt-3 ">
        <label
          htmlFor={inputName}
          className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-custom-slate700  border-r-custom-slate700"
        >
          {inputText}
        </label>
        <input
          className="bg-black border-[3px] h-[35px] w-[300px] outline-none m-[2px]   text-white  border-t-custom-slate700 border-l-custom-slate700  text-center"
          type={type}
          name={inputName}
          id={inputName}
          onChange={handleUserInput}
        />
      </span>
    </>
  );
}

export default Input;
