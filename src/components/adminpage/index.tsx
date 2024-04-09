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
    <div className="flex flex-col gap-2 min-h-screen text-red-600">
      <h1 className="text-6xl font-bold">NarrateJS Admin Page</h1>
      <h2 className="font-bold">Options</h2>
      <ul className="list-disc">{listOptions()}</ul>
    </div>
  );
};

export default AdminPage;
