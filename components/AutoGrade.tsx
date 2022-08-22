import { BadgeCheckIcon } from "@heroicons/react/outline";
import { Vehicle } from "typings";
import { newBgColor, newTextColor } from "utils/formatGrade";

interface Props {
  vehicle: Vehicle;
}

const AutoGrade = ({ vehicle: { grade } }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-1 pt-4">
      <div className="relative flex flex-col items-center">
        <BadgeCheckIcon
          className={`h-16 w-16 ${newTextColor(grade?.value)}`}
        />
        <p className="text-xs font-monty text-gray-6 leading-none -mt-0.5">
          {grade?.description}
        </p>
        <div
          className={`${newBgColor(grade?.value)} absolute top-4 right-[16px] h-8 w-8 rounded-full flex items-center justify-center`}>
          <span className="text-white text-xs font-semibold">
            {grade?.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoGrade;
