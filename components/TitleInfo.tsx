import { Vehicle } from "typings";
import formatVehicleDetails from "utils/formatVehicleDetails";

interface Props {
  vehicle: Vehicle;
}

const TitleInfo = ({ vehicle: { titleInformation } }: Props) => {
  return (
    <div className="absolute bottom-1 right-0 text-sm leading-[0.9]">
      <p className="capitalize font-bold dark:text-gray-1 text-dark-1 tracking-widest">
        Title<span className="text-green-accent"> • </span>
        {formatVehicleDetails(titleInformation.status) || "Missing"}
        <span className="text-green-accent"> • </span>
        {titleInformation.state || "Missing"}
      </p>
    </div>
  );
};

export default TitleInfo;
