import { ReactNode } from "react";

interface Props {
  heading: string;
  title: ReactNode;
  grade?: ReactNode;
}

const SectionTitle = ({ heading, title, grade }: Props) => {
  return (
    <header className="flex flex-col md:flex md:flex-row md:items-center md:space-x-10 w-full">
      <div className="flex flex-1 justify-between items-center">
        <div className="">
          <h1 className="uppercase text-gray-6 font-medium font-monty text-sm lg:text-base tracking-widest">
            {heading}
          </h1>
          <h3 className="dark:text-gray-1 text-dark-1 text-3xl font-bold leading-snug lg:text-4xl lg:leading-snug whitespace-nowrap mb-4">
            {title}
          </h3>
        </div>
        {grade && grade}
      </div>
    </header>
  );
};

export default SectionTitle;
