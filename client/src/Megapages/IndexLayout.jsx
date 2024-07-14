import {
  InfoSection,
  SignUp,
  LogIn,
  IndexHeader,
} from "../Components/IndexComponents";

import { useSelector } from "react-redux";

function IndexLayout() {
  const LogInVisible = useSelector((state) => state.headerReducer.boolean);

  return (
    <div className="h-fit ">
      <IndexHeader />
      <div className=" text-center h-screen w-full rounded-lg  bg-index-lessLight m-1  grid grid-cols-12    ">
        <InfoSection />
        {LogInVisible ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default IndexLayout;
