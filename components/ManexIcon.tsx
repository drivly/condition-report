import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const ManexIcon = ({ vehicle: { metaData } }: Props) => {
  return (
    <div className="absolute top-0 right-0">
      {metaData.manex2021 === true ? (
        <div className="flex items-center text-gray-6">
          <p className="capitalize dark:text-gray-1 text-dark-1 text-sm tracking-wide mr-1">Manex 2021</p>
          <ThumbUpIcon className="h-4 w-4 mb-1 text-green-accent" />
        </div>
      ) : (
        <div className="flex items-center text-gray-6">
          <p className="text-xs leading-1 italic mr-1">Manex 2021</p>
          <ThumbDownIcon className="h-4 w-4 text-red-500" />
        </div>
      )}
    </div>
  );
};

export default ManexIcon;
