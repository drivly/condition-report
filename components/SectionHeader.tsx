import { useSectionState } from "atoms/sectionAtom";
import { truncate } from "lib/truncate";
import { useRef } from "react";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const SectionHeader = ({ vehicle }: Props) => {
  const { vehicleDetails, inspectionSections } = vehicle;
  const [sectionValue, setSectionValue] = useSectionState();
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleClick = (name: string, i: number) => {
    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
    setSectionValue({ name, index: i });
  };

  return (
    <section ref={sectionRef}>
      <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm">
        Inspection Sections
      </h3>
      <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap pb-4 border-b-4 border-gray-6/20">
        {vehicleDetails.model} Report
      </h3>
      <div className="py-4 mb-5 border-b-4 border-gray-6/20">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          {inspectionSections.map((section, i) => (
            <li
              key={i}
              className="cursor-pointer my-3 w-fit whitespace-nowrap"
              onClick={() => handleClick(section.name, i)}>
              <span
                className={`navLink hover:bg-green-accent hover:border-none px-4 py-2 rounded-full hover:text-gray-1 ${
                  sectionValue.name === section.name
                    ? "text-dark-1 dark:text-gray-1 border-gray-6 border bg-gray-100"
                    : "text-gray-6"
                }`}>
                {truncate(section?.name, 12)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionHeader;
