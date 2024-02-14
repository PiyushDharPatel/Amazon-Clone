import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm("");
    setCategory("All");
  };
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-[38px] bg-amazonclone-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-0 text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-orange-400" />
        </button>
      </div>  

</div>
  );
};

export default Search;