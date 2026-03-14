import { Link } from "react-router-dom";

function UpdatesComp() {
  return (
    <div className="mx-7 mb-10 px-4 py-3 custom-border surface-color flex justify-between items-center text-sm z-10 gap-x-2">

      <span className="text-[#4a4a4a]">
        🚧 LogSphere is currently in development. New features coming soon.
      </span>

      <Link to={"/updates"} className="primary-outline ">
        Updates
      </Link>

    </div>
  );
}

export default UpdatesComp;