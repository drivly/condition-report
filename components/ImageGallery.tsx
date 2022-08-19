import Image from "next/image";
import { useState } from "react";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const ImageGallery = ({ vehicle }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const { vehicleDetails, images } = vehicle;

  return (
    <section className="mb-10 border-b-4 border-gray-6/20 pb-10">
      {/* main image */}
      <h1 className="uppercase text-gray-6 tracking-widest font-medium text-sm">
        images section
      </h1>
      <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap mb-4">
        {vehicleDetails.model} Gallery
      </h3>
      <div className="flex justify-center rounded-2xl bg-gray-1 sm:shadow-lg dark:bg-dark-3">
        <img
          src={images[index]}
          alt={vehicleDetails.model}
          className="object-cover rounded-2xl"
        />
      </div>
      {/* thumb images to select main image */}
      <div className="flex overflow-scroll space-x-4 scrollbar-hide mt-5">
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
