import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t border-gray-1-2 dark:border-dark-2">
      <a
        className="flex items-center justify-center gap-2"
        href="https://driv.ly/"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          className="filter invert dark:invert-0 brightness-150"
          src="/assets/PoweredByDrivlyLight.svg"
          alt="Powered by Drivly Logo"
          width={150}
          height={80}
        />
      </a>
    </footer>
  );
};

export default Footer;
