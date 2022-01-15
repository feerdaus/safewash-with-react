import { useState } from "react";
import "./header.css";
import { openNav } from "./icons";
import { closeNav } from "./icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <section>
      <div className="relative md:hidden">
        {open ? (
          <span
            onClick={() => setOpen(false)}
            className="openNav cursor-pointer absolute z-10"
          >
            {closeNav}
          </span>
        ) : (
          <span
            onClick={handleOpen}
            className="openNav cursor-pointer absolute z-10"
          >
            {openNav}
          </span>
        )}

        <ul
          className={`mobile_menu flex flex-col absolute text-center max-w-screen-lg ${
            open ? "block" : "hidden"
          }`}
        >
          <li>
            <img
              src={
                "https://ik.imagekit.io/7wpxe2myx/Safewash/hdLogo_Zb3KO53zg.svg"
              }
              alt="site-logo"
              className="p-8"
            />
          </li>
          <li className="px-8 mt-8">Home</li>
          <li className="px-8 mt-8">About Us</li>
          <li className="px-8 mt-8">Become a Distributor</li>
          <li className="px-8 mt-8">Contact Us</li>
        </ul>
      </div>
      <div className="header hidden md:block absolute z-50 w-full py-2">
        <ul className="flex justify-center text-center max-w-screen-lg">
          <li className="pr-8">
            <img
              src={
                "https://ik.imagekit.io/7wpxe2myx/Safewash/hdLogo_Zb3KO53zg.svg"
              }
              alt="site-logo"
            />
          </li>
          <li className="px-8 mt-6">Home</li>
          <li className="px-8 mt-6">About Us</li>
          <li className="px-8 mt-6">Become a Distributor</li>
          <li className="px-8 mt-6">Contact Us</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
