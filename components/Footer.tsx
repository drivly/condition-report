import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-gray-1-2 py-10 dark:border-dark-2 max-w-7xl mx-auto px-5 sm:px-10">
      <div className="space-y-15 md:space-y-0 md:flex items-center justify-between">
        <a
          className="gap-2"
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
        <div className="flex items-center text-gray-5 text-[15px] leading-snug space-x-10">
          <span>{`Terms & Conditions`}</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
