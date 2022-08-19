import { ReactNode } from "react";

interface Props {
  heading: string;
  title: ReactNode;
  grade?: ReactNode;
}

const SectionTitle = ({ heading, title, grade }: Props) => {
  return (
    <header className="flex flex-col md:flex md:flex-row md:items-center  md:space-x-10 w-full">
      <div className="flex flex-1 justify-between items-center tracking-widest">
        <div className="">
          <h1 className="uppercase text-gray-6 font-medium text-sm">
            {heading}
          </h1>
          <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap">
            {title}
          </h3>
        </div>
        {grade && grade}
      </div>
    </header>
  );
};

export default SectionTitle;
