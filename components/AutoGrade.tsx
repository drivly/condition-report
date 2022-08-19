import { BadgeCheckIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Vehicle } from "typings";
import formatGrade from "utils/formatGrade";

interface Props {
  vehicle: Vehicle;
}

const AutoGrade = ({ vehicle: { grade } }: Props) => {
  const [color, setColor] = useState<string | undefined>("");

  useEffect(() => {
    if (grade) {
      const getColor = async () => {
        let newColor = await formatGrade(Math.ceil(grade?.value));
        setColor(newColor);
      };
      getColor();
    }
  }, [grade]);

  return (
    <div className="pl-4 flex flex-col items-center space-y-1  mt-1 flex-1">
      <div className="relative flex flex-col items-center">
        <BadgeCheckIcon
          className={`h-20 w-20 ${color ? color : "text-gray-6"}`}
        />
        <p className="text-xs md:text-sm text-gray-6">{grade?.description}</p>
        <div className="absolute top-0 -right-1  h-8 w-8 bg-dark-1 dark:bg-gray-1 rounded-full flex items-center justify-center ">
          <span className="text-gray-1 text-xs dark:text-dark-1 font-semibold">
            {grade?.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoGrade;
