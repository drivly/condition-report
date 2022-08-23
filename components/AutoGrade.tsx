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
          className={`h-14 w-14 mt-1 md:h-16 md:w-16 ${
            grade?.value > 0 && grade?.value < 3
              ? "text-dirty-yellow"
              : grade?.value > 3
              ? "text-green-accent"
              : "text-gray-6"
          }`}
        />
        <p className="text-sm font-monty text-gray-6 leading-none md:leading-none tracking-wide">
          {grade?.description}
        </p>
        <div
          className={`${
            grade?.value > 0 && grade?.value < 3
              ? "bg-dirty-yellow"
              : grade?.value > 3
              ? "bg-green-accent"
              : "bg-dark-1 dark:bg-gray-1"
          } absolute p-1 top-[18px] right-[13.5px] h-7 w-7 md:h-8 md:w-8 md:top-5 md:right-4 rounded-full flex items-center justify-center`}>
          <span className="text-white text-sm md:text-base font-semibold">
            {grade?.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoGrade;
