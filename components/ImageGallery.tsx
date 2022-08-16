import Image from 'next/image'
import React, { useState } from 'react'
import { Vehicle } from 'typings'

interface Props {
  vehicle: Vehicle
}

const ImageGallery = ({ vehicle }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const { vehicleDetails, images } = vehicle

  return (
    <section className="">
        {/* main image */}
        <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm mb-4">
          {vehicleDetails.model} Gallery
        </h3>
        <div className="flex justify-center rounded-2xl bg-gray-1 sm:shadow-lg dark:bg-dark-3">
          <img
            src={images[index]}
            alt={vehicleDetails.model}
            className="sm:h-[375px] sm:w-[500px]  object-cover rounded-2xl sm:rounded-none"
          />
        </div>
        {/* thumb images to select main image */}
        <div className="flex overflow-scroll space-x-4 scrollbar-hide mt-5">
          {images.map((image, i) => (
            <div key={i} className="relative" onMouseEnter={() => setIndex(i)}>
              <Image
                src={image}
                layout="fixed"
                height="200px"
                width="250px"
                className="rounded-xl"
                alt={vehicleDetails.model}
              />
            </div>
          ))}
        </div>
      </section>
  )
}

export default ImageGallery
