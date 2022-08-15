import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MobileNav } from ".";
import { menuItems } from "../lib/menuItems";

const Navbar = () => {
  const [active, setActive] = useState<string>("/");
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full top-0 z-50 py-1 sticky border-b border-gray-1-2 dark:border-dark-2 bg-white dark:bg-black">
      <header className="flex items-center justify-between max-w-7xl mx-auto px-5 sm:px-12">
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
          <div className="flex items-center ml-3 rotate-90">
            <input
              type="checkbox"
              className="opacity-0 absolute checkbox"
              name="toggleTheme"
              id="checkbox"
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <label
              htmlFor="checkbox"
              className="flex justify-between items-center w-8 h-4 bg-black rounded-2xl label p-0.5 relative transform scale-150 cursor-pointer">
              <SunIcon className="h-3 w-3 text-yellow-400" />
              <MoonIcon className="h-3 w-3 text-green-accent rotate-180" />
              <div className="w-3 h-3 absolute bg-white rounded-full top-0.5 left-0.5 ball transition-transform duration-200" />
            </label>
          </div>
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
            // if(isMobile) setOpen(prev => !prev)
          }}
          className={`navLink ${
            active === item.href
              ? "text-dark-1 dark:text-gray-1"
              : "dark:text-zinc-600 text-gray-400"
          }`}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
