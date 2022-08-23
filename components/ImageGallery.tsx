import Image from "next/image";
import { useState } from "react";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
  sectionStyle?: string
}

const ImageGallery = ({ vehicle, sectionStyle }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const { vehicleDetails, images } = vehicle;

  return (
    <section className={sectionStyle}>
      {/* main image */}
      <div className="flex justify-center rounded-2xl bg-gray-1 sm:shadow-lg dark:bg-dark-3">
        <img
          src={images[index]}
          alt={vehicleDetails.model}
          className="object-cover rounded-2xl"
        />
      </div>
      {/* thumb images to select main image */}
      <div className="flex overflow-scroll space-x-4 scrollbar-hide mt-4">
        {images.map((image, i) => (
          <div key={i} className="relative" onMouseEnter={() => setIndex(i)}>
            <Image
              src={image}
              layout="fixed"
              height="100px"
              width="150px"
              className="rounded-xl"
              alt={vehicleDetails.model}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;