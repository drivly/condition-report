import { Vehicle } from "typings";
import formatVehicleDetails from "utils/formatVehicleDetails";

interface Props {
  vehicle: Vehicle;
}

const VehicleDetails = ({ vehicle: { vehicleDetails } }: Props) => {
  return (
    <div className="flex flex-col justify-center text-xs md:text-sm text-gray-6 capitalize mt-2">
      <p className="text-xs md:text-sm text-gray-6 capitalize">
        <span>{formatVehicleDetails(vehicleDetails.engine)}</span> •{" "}
        <span>{formatVehicleDetails(vehicleDetails.driveTrain)}</span> •{" "}
        <span>{formatVehicleDetails(vehicleDetails.transmission)}</span>
      </p>
      <p className="text-xs md:text-sm text-gray-6">
        {vehicleDetails.vin} • {vehicleDetails.odometer} mi
      </p>
      <p className="text-xs md:text-sm text-gray-6 flex items-center">
        {vehicleDetails.exteriorColor} on {vehicleDetails.interiorColor}
      </p>
      <p>{formatVehicleDetails(vehicleDetails.sellerName)}</p>
    </div>
  );
};

export default VehicleDetails;
