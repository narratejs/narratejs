import { displayObjectProperties } from "../../lib/util";

const AdminPage = ({ options }: any) => {
  console.log(options);
  return (
    <div className="flex flex-col min-h-screen p-5">
      <div className="flex gap-2 items-center mb-4">
        <img
          src="https://www.narratejs.com/images/narratejs_logo.png"
          className="w-10"
        />
        <h1 className="text-4xl font-bold">NarrateJS Admin Page</h1>
      </div>
      <div>{displayObjectProperties(options)}</div>
    </div>
  );
};

export default AdminPage;
