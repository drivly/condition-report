import { Vehicle } from "typings";
import formatVehicleDetails from "utils/formatVehicleDetails";

interface Props {
  vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle: { vehicleDetails } }: Props) => {
  return (
    <div className="flex flex-col justify-center text-gray-6 capitalize border-b border-gray-6 md:border-0 pb-10 mb-10 md:pb-0 md:mb-0">
      <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm">
        Vehicle Details
      </h3>
      <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap mb-3">
        {vehicleDetails.model} Info
      </h3>

      <div className="grid grid-cols-2 text-sm gap-x-8 gap-y-4">
        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Engine
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {formatVehicleDetails(vehicleDetails.engine)}
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Drivetrain
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {formatVehicleDetails(vehicleDetails.driveTrain)}
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Transmission
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {formatVehicleDetails(vehicleDetails.transmission)}
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            VIN
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {vehicleDetails.vin}
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Odometer
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {vehicleDetails.odometer} mi
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Exterior Color
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {vehicleDetails.exteriorColor}
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Interior Color
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {vehicleDetails.interiorColor}
            </p>
          </div>
        </div>

        <div className="space-y-2 py-2">
          <p className="font-monty font-medium text-dark-1 dark:text-gray-1 text-sm">
            Seller
          </p>
          <div>
            <p className="text-gray-6 font-semibold px-4 py-2">
              {formatVehicleDetails(vehicleDetails.sellerName)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;


// previous layout
      /* <p className="text-gray-6 capitalize">
        <span>{formatVehicleDetails(vehicleDetails.engine)}</span> •{" "}
        <span>{formatVehicleDetails(vehicleDetails.driveTrain)}</span> •{" "}
        <span>{formatVehicleDetails(vehicleDetails.transmission)}</span>
      </p>
      <p className="text-gray-6">
        {vehicleDetails.vin} • {vehicleDetails.odometer} mi
      </p>
      <p className="text-gray-6 flex items-center">
        {vehicleDetails.exteriorColor} on {vehicleDetails.interiorColor}
      </p>
      <p>{formatVehicleDetails(vehicleDetails.sellerName)}</p> */
