import React from "react";
import { NextPage } from "next";

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

  return <div className="min-h-screen">narratejs</div>;
};

export default NarrateJS;
