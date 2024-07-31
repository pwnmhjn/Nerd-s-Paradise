import React from "react";

function AuthorDetail() {
  return (
    <div>
      <div className="bg-slate-400 h-28 min-w-[500px] rounded-lg flex place-items-center p-4 border-2">
        <img
          src="https://i.pinimg.com/236x/37/d7/5d/37d75df5a8aebe746de58eb8784fb49f.jpg"
          alt=""
          className="w-24 h-24 rounded-full border-1"
        />
        <div className="m-2">
          <h1 className="font-bold font-mono text-xl"> Name:- Jane Doe</h1>
          <h1 className="font-bold font-mono text-xl">
            Popularity:- <span>20%</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetail;
