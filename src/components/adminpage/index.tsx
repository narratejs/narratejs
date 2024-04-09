import React from "react";
import { getOptions } from "../configureOptions";

const AdminPage = () => {
  const options = getOptions();

  const listOptions = () => {
    return Object.entries(options).map(([key, value]) => (
      <li key={key}>{`${key}: ${value}`}</li>
    ));
  };

  // console.log(options);
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl font-bold">NarrateJS Admin Page</h1>

      <ul className="list-disc">{listOptions()}</ul>
    </div>
  );
};

export default AdminPage;
