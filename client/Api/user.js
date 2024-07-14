import axios from "axios";
import { ObjectHasValue } from "../src/utils/ObjectHasValue";

const api = axios.create({
  baseURL: "/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (cred) => {
  if (ObjectHasValue(cred)) {
    try {
      const res = await api.post("/register", cred);
      const response = res.data;
      return response;
    } catch (error) {
      const response = error.response.data;
      return response;
    }
  } else {
    const response = {
      message: "Some Field are Missing",
    };
    return response;
  }
};

export const logUser = async (cred) => {
  if (ObjectHasValue(cred)) {
    try {
      const res = await api.post("/login", cred);
      const response = res.data;
      return response;
    } catch (error) {
      const response = error.response.data;
      return response;
    }
  } else {
    const response = {
      message: "Some Field are Missing",
    };
    return response;
  }
};
