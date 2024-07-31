import useAxiosPrivate from "./useAxiosPrivate";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/user/userSlice";
import { selectUser } from "../features/user/userSlice";

const useLogout = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(removeUser({}));
    const response = await axiosPrivate("/logout", {
      withCredentials: true,
    });
    return response;
  };
  return logout;
};

export default useLogout;
