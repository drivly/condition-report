import { Vehicle } from "typings";
import formatVehicleDetails from "utils/formatVehicleDetails";

interface Props {
  vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle: { vehicleDetails } }: Props) => {
  return (
    <div className="flex flex-col justify-center text-gray-6 capitalize mb-8">
      <h3 className="flex md:hidden dark:text-gray-1 text-dark-1 text-3xl font-bold leading-normal md:leading-normal whitespace-nowrap mb-4">
        Vehicle Details
      </h3>
      <div className="grid grid-cols-2 gap-y-4 text-sm font-monty font-medium">
        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Engine</p>
          <p className="text-dark-1 dark:text-gray-1">
            {formatVehicleDetails(vehicleDetails.engine)}
          </p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Drivetrain</p>

          <p className="text-dark-1 dark:text-gray-1">
            {formatVehicleDetails(vehicleDetails.driveTrain)}
          </p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Transmission</p>

          <p className="text-dark-1 dark:text-gray-1">
            {formatVehicleDetails(vehicleDetails.transmission)}
          </p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>VIN</p>

          <p className="text-dark-1 dark:text-gray-1">{vehicleDetails.vin}</p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Odometer</p>

          <p className="text-dark-1 dark:text-gray-1">
            {vehicleDetails.odometer} mi
          </p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Exterior Color</p>

          <p className="text-dark-1 dark:text-gray-1">
            {vehicleDetails.exteriorColor}
          </p>
        </div>

        <div className="flex justify-between col-span-2 border-b border-gray-6/30 pb-4">
          <p>Interior Color</p>

          <p className="text-dark-1 dark:text-gray-1">
            {vehicleDetails.interiorColor}
          </p>
        </div>

        <div className="pt-2 flex justify-between col-span-2">
          <p>Seller</p>

          <p className="text-dark-1 dark:text-gray-1">
            {formatVehicleDetails(vehicleDetails.sellerName)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
