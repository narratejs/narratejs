import React from "react";
import { NextPage } from "next";
import MainPage from "./mainpage";
import AdminPage from "./adminpage";
// import MainPage from "./mainpage";

interface NarrateJSProps {
  params?: any; // Define a more specific type if possible
  searchParams?: any; // Define a more specific type if possible
  // [key: string]: any; // For the rest of the options
}

const NarrateJS: NextPage<NarrateJSProps> = ({
  params,
  searchParams,
}): React.JSX.Element => {
  console.log(params.narratejs?.[0], "params");

  if (!params.narratejs?.[0]) {
    return <MainPage />;
  }

  if (params.narratejs?.[0] === "admin") {
    return <AdminPage />;
  }

  return <div className="min-h-screen">narratejs</div>;
};

export default NarrateJS;
