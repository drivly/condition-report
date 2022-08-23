import { Vehicle } from "typings";
import formatVehicleDetails from "utils/formatVehicleDetails";

interface Props {
  vehicle: Vehicle;
}

const TitleInfo = ({ vehicle: { titleInformation } }: Props) => {
  return (
    <div className="absolute bottom-2 left-0 text-sm lg:text-md leading-1">
      <p className="capitalize dark:text-gray-1 text-dark-1 tracking-wide">
        Title<span className="text-green-accent"> • </span>
        {formatVehicleDetails(titleInformation.status) || "Missing"}
        <span className="text-green-accent"> • </span>
        {titleInformation.state || "Missing"}
      </p>
    </div>
  );
};

export default TitleInfo;
