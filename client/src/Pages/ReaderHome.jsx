import { useSelector, useDispatch } from "react-redux";
// import { removeUser } from "../../features/user/userSlice";

function ReaderHome() {
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  return (
    <div>
      <div className=" ">
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil</h4>
      </div>
    </div>
  );
}

export default ReaderHome;
