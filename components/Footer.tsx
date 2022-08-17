import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-gray-1-2 py-10 dark:border-dark-2 max-w-7xl mx-auto px-5 sm:px-10">
      <div className="space-y-20 md:space-y-0 md:flex items-start justify-between">
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
        <div className="grid grid-cols-3 md:py-7">
          <div>
            <h4 className="dark:text-gray-1 text-dark-1 mb-5">Platform</h4>
            <div className="text-gray-6 space-y-3 text-sm">
              <p>API</p>
              <p>Data</p>
              <p>Services</p>
            </div>
          </div>
          <div>
            <h4 className="dark:text-gray-1 text-dark-1 mb-5">About</h4>
            <div className="text-gray-6 space-y-3 text-sm">
              <p>Partnerships</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h4 className="dark:text-gray-1 text-dark-1 mb-5">Shop</h4>
            <div className="text-gray-6 space-y-3 text-sm">
              <p>Concierge</p>
              <p>Listings</p>
              <p>Profitable Car Sharing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-5 text-[15px] leading-snug pb-5 mt-14 pt-16">
        <p>© 2022 Drivly Inc. All rights reserved.</p>
      </div>
      <div className="flex items-center text-gray-5 text-sm leading-snug space-x-10">
        <span>{`Terms & Conditions`}</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
