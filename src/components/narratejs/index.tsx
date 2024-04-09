import { NextPage } from "next";

type Props = {
  options: {
    backendProvider: "supabase" | "jsonplaceholder";
  };
  params?: {};
  searchParams?: {};
};

const NarrateJS = ({ options, params, searchParams }: Props) => {
  return (
    <div className="min-h-screen p-5">
      <h1>{options.backendProvider}</h1>
      <p>Welcome to my home page!</p>
    </div>
  );
};

NarrateJS.getInitialProps = async () => {
  // fetch some data here
  return {
    title: "My Home Page",
    options: { backendProvider: "jsonplaceholder" },
  };
};

export default NarrateJS;
