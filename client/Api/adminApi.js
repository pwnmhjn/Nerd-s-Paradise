import axios from "axios";
import { ObjectHasValue } from "../src/utils/ObjectHasValue";

const api = axios.create({
  baseURL: "/api/v1/admin",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const createAuthor = async (cred) => {
  if (ObjectHasValue(cred) === true) {
    try {
      const res = await api.post("/add-author", cred);
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
    return response.message;
  }
};

export const createChapter = async (cred) => {
  if (ObjectHasValue(cred) === true) {
    try {
      const res = await api.post("/add-chapter", cred, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = res.data;
      console.log(res);
      return response;
    } catch (error) {
      console.log(error);
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

export const createBook = async (cred) => {
  console.log(ObjectHasValue(cred));
  console.log(cred);
  if (ObjectHasValue(cred) === true) {
    try {
      const res = await api.post("/add-book", cred);
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
