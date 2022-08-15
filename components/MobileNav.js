import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

import { menuItems } from "lib/menuItems";
import MyLink from "./MyLink";


export default function Dropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative flex">
        {({ open }) => (
          <>
            <Menu.Button className="dark:text-zinc-600 text-gray-400">
              {!open ? (
                <MenuIcon className="dropdownIcon" aria-hidden="true" />
              ) : (
                <XIcon className="dropdownIcon" aria-hidden="true" />
              )}
            </Menu.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="menuItems mt-[50px] py-5 text-xl tracking-widest">
                {menuItems.map(({ href, name }, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <MyLink active={active} href={href} name={name} />
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
