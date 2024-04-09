import React, { useEffect } from "react";
import testServer from "../server";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-2 min-h-screen p-5">
      <div className="flex gap-2 items-center">
        <img
          src="https://www.narratejs.com/images/narratejs_logo.png"
          className="w-10"
        />
        <h1 className="text-4xl font-bold">NarrateJS Admin Page</h1>
      </div>
    </div>
  );
};

export default AdminPage;
