import React from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import { selectUser } from "../../features/user/userSlice";
import { useSelector } from "react-redux";

function User() {
  const [users, setUser] = useState(null);
  const user = useSelector(selectUser);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get("/get-Users", {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
          withCredentials: true,
        });
        const res = response.data.data;
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {users && users.map((user) => <li key={user._id}>{user.fullname}</li>)}
      </ul>
    </div>
  );
}

export default User;
