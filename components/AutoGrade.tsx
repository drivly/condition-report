import { BadgeCheckIcon } from "@heroicons/react/outline";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const AutoGrade = ({ vehicle: { grade } }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-1 pt-4">
      <div className="relative flex flex-col items-center">
        <BadgeCheckIcon
          className={`h-16 w-16 ${
            grade?.value > 0 && grade?.value < 3
              ? "text-dirty-yellow"
              : grade?.value > 3
              ? "text-green-accent"
              : "text-gray-6"
          }`}
        />
        <p className="text-xs font-monty text-gray-6 leading-none ">
          {grade?.description}
        </p>
        <div
          className={`${
            grade?.value > 0 && grade?.value < 3
              ? "bg-dirty-yellow"
              : grade?.value > 3
              ? "bg-green-accent"
              : "bg-dark-1 dark:bg-gray-1"
          } absolute top-4 right-[16px] h-8 w-8 rounded-full flex items-center justify-center`}>
          <span className="text-white text-xs font-semibold">
            {grade?.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoGrade;
