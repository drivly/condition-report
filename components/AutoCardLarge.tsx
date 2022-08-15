import Link from "next/link";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const AutoCardLarge = ({ vehicle }: Props) => {
  return (
    <Link href={`/vehicle/[id]`} as={`/vehicle/${vehicle.id}`}>
      <div className="cursor-pointer rounded-xl shadow-md group">
        <div className="rounded-xl overflow-hidden">
          <img
            src={vehicle.images[0]}
            className="group-hover:scale-105 transform transition duration-150 ease-out"
            alt="vehicle"
          />
          <div className="p-5 flex justify-between bg-white dark:bg-black-4 rounded-b-xl font-poppins pb-8">
            <div>
              <h2 className="font-light text-xl md:text-lg text-center">
                {vehicle.vehicleDetails.make}{" "}
                <span className="font-semibold">
                  {vehicle.vehicleDetails.model}
                </span>
              </h2>
              <p className="text-xs font-semibold">
                {vehicle.vehicleDetails.trim}{" "}
                {vehicle.vehicleDetails.transmission}
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-bold text-base sm:text-lg">{vehicle.vehicleDetails.year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AutoCardLarge;
