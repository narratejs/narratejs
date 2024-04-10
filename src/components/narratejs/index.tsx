import { notFound } from "next/navigation";
import AdminPage from "../adminpage";
import MainPage from "../mainpage";
import BlogPage from "../blogpage";

type Props = {
  options: {
    backendProvider: "supabase" | "jsonplaceholder";
    adminSlug: string;
  };
  params?: { narratejs: string[] };
  searchParams?: {};
};

const NarrateJS = ({ options, params, searchParams }: Props) => {
  console.log(params, "PARAMS");
  console.log(options, "OPTIONS");

  if (!params?.narratejs) return <MainPage />;
  if (params?.narratejs?.[0] === options.adminSlug)
    return <AdminPage options={options} />;
  return <BlogPage options={options} slug={params.narratejs} />;
};

export default NarrateJS;
