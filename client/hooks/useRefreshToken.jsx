import React from "react";
import axios from "axios";
import { setUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRefreshToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refresh = async () => {
    try {
      const response = await axios.get("/api/v1/users/get-access-token", {
        withCredentials: true,
      });
      const user = response.data?.data?.user;
      const accessToken = response.data?.data?.accessToken;
      dispatch(setUser({ user: user, accessToken: accessToken }));
      return response?.data?.data?.accessToken;
    } catch (error) {
      navigate("/");
    }
  };
  return refresh;
};

export default useRefreshToken;
