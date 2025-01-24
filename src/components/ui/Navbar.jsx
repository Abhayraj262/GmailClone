import { Search } from "lucide-react";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"}
            alt=""
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full">
          <IoIosSearch size="24px" className="text-gray-700" />
          <input
            type="text"
            value={Search}
            placeholder="Seach mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="cursor-pointer">
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fprofile-picture&psig=AOvVaw3LU1App66Pro_HyoXBmdYJ&ust=1737815323684000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOidoNvIjosDFQAAAAAdAAAAABAE" size="40" round={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
