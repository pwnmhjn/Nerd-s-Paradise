import { useSelector } from "react-redux";
import Button from "../Custom/Toast/Button";
// import { removeUser } from "../../features/user/userSlice";

function ReaderHome() {
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  return (
    <div>
      <div className=" ">
        <Button />
      </div>
    </div>
  );
}

export default ReaderHome;
