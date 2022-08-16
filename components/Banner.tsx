import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  image?: boolean;
  bannerText: ReactNode;
  wrapperStyle: string;
  bodyStyle: string;
}

const Banner = ({ bannerText, wrapperStyle, bodyStyle, image }: Props) => {
  return (
    <div
      className={`relative w-full flex items-center bg-gradient-to-tr from-dark to-green-accent z-0 overflow-hidden ${wrapperStyle}`}>
      {image && (
        <>
          <Image
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1660503590/my-upload/bmiduxmijdh4uokdv7tm.jpg"
            alt="poster of cars"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Image
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1641955967/blugenix/oucr6qg64ooxu9rtc5h4.png"
            alt="gradient"
            layout="fill"
            objectFit="cover"
            priority
            is="image"
          />
        </>
      )}
      <div className="h-96 bg-gradient-to-l from-transparent to-black/70 absolute w-full bottom-0 right-0" />
      <h1 className={`font-bold text-4xl ${bodyStyle}`}>
        {bannerText}
      </h1>
      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full bg-white/20 -top-9 -left-16 -z-5" />
      <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full bg-white/20 -bottom-24 -right-14 -z-5" />
    </div>
  );
};

export default Banner;
