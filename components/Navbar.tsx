import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DarkModeToggle, MobileNav } from ".";
import { menuItems } from "../lib/menuItems";

const Navbar = () => {
  const [active, setActive] = useState<string>("/");

  return (
    <nav className="nav">
      <header className="flex items-center justify-between max-w-7xl mx-auto px-5 sm:px-10">
        <div onClick={() => setActive("/")}>
          <Link href="/">
            <div className="h-16 w-16 relative cursor-pointer">
              <Image
                src="/assets/DrivlyLogoDark.svg"
                className="filter dark:invert"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </Link>
        </div>

        {/* Left Side */}
        <div className="flex items-center justify-center">
          <div className="hidden sm:flex">
            <MenuItems active={active} setActive={setActive} />
          </div>
          <div className="flex sm:hidden items-center">
            <MobileNav />
          </div>
          <DarkModeToggle />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

const MenuItems = ({
  active,
  setActive,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <ul className="flex">
      {menuItems.map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item.href);
          }}
          className={`navLink mx-3 ${
            active === item.href
              ? "text-dark-1 dark:text-gray-1"
              : "text-gray-6"
          }`}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
