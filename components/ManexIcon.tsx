import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const ManexIcon = ({ vehicle: { metaData } }: Props) => {
  return (
    <div className="absolute top-0 right-0">
      {metaData.manex2021 === true ? (
        <div className="flex items-end text-gray-6">
          <p className="text-gray-6 font-medium font-monty text-sm uppercase leading-none mr-1">Manex 2021</p>
          <ThumbUpIcon className="h-4 w-4 text-green-accent mt-[0.6px]" />
        </div>
      ) : (
        <div className="flex items-center text-gray-6">
          <p className="text-xs leading-[0.9] italic mr-1">Manex 2021</p>
          <ThumbDownIcon className="h-4 w-4 text-red-500" />
        </div>
      )}
    </div>
  );
};

export default ManexIcon;
