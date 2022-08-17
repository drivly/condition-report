import { ReactNode, SVGProps, useEffect, useState } from "react";
import formatGrade from "utils/formatGrade";

interface Props {
  heading: string;
  title: ReactNode;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  grade?:
    | {
        value: number;
        description: string;
      }
    | any;
}

const SectionTitle = ({ heading, title, Icon, grade }: Props) => {
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
    <header className="flex flex-col sm:flex sm:flex-row sm:items-center  sm:space-x-10 w-fit">
      <div className="flex flex-1 items-center tracking-widest space-x-4 md:space-x-8">
        <div className="flex-1">
          <h1 className="uppercase text-gray-6 font-medium text-sm">
            {heading}
          </h1>
          <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap">
            {title}
          </h3>
        </div>

        {Icon && (
          <div className="flex flex-col items-center space-y-1 relative">
            <Icon
              className={`h-14 md:h-16 w-14 md:w-16 ${
                color ? color : "text-gray-6"
              }`}
            />
            <p className="text-xs md:text-sm text-gray-6">
              {grade?.description}
            </p>
            <div className="absolute -top-1 -right-1 text-[12px] h-6 w-6 bg-dark-1 dark:bg-gray-1 rounded-full flex items-center justify-center text-gray-1 dark:text-dark-1">
              {Math.ceil(grade?.value)}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default SectionTitle;
