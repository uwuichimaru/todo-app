import { Link } from "react-router-dom";
import { sidebar } from "./data";

export const Sidebar = () => {
  return (
    <div className="inherit h-[100vh]">
      <div className="w-[300px] pt-14 h-[100%] bg-[#252423] relative top-[-70px]">
        {sidebar.map((bar) => (
          <Link
            to={bar.path}
            key={bar.id}
            className="flex gap-[24px] p-3 pl-5 hover:bg-[#3B3A39] cursor-pointer"
          >
            <img src={bar.img} alt="" className="w-6" />
            <h3 className="text-[#fff]">{bar.title}</h3>
          </Link>
        ))}
        <div className="w-[90%] bg-zinc-400/80 h-[.5px] mx-auto mt-3 mb-3" />

        <div className="flex items-center p-3 pl-5 gap-3 hover:bg-[#3B3A39]">
          <button className="bg-transparent border-0 outline-none">
            <svg className="text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#78BAFD"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
          </button>
          <input type="text" className="bg-transparent outline-none text-[#fff] placeholder:text-[#78BAFD] text-sm focus:placeholder:text-zinc-400" placeholder="New list"/>
        </div>
      </div>
    </div>
  );
};
