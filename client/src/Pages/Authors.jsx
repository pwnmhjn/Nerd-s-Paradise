import React, { useEffect } from "react";
import { AuthorDetail } from "../Components/AuthorComponents";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function Authors() {
  const axiosPrivate = useAxiosPrivate();
  (async () => {
    const res = await axiosPrivate("/");
  })();

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col gap-8 ">
        <Link>
          <AuthorDetail />
        </Link>
      </div>
    </div>
  );
}

export default Authors;
