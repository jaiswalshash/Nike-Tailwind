import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function Navigation() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="./">
          <img src={headerLogo} alt="nike-logo" width={130} height={30} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-14 max-lg:hidden">
          {navLinks.map((link) => (
            <li>
              <a className="font-montesrrat leading-normal text-lg text-slate-gray" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="font-montesrrat leading-normal text-lg font-medium max-lg:hidden"> SignIn / Explore Now</div>
        <div className="hidden max-lg:block">
          <img
            width={25}
            height={25}
            src={hamburger}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
