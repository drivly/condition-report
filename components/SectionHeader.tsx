import { useSectionState } from "atoms/sectionAtom";
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
      <h3 className="dark:text-gray-1 text-dark-1 text-3xl md:text-4xl font-bold leading-normal md:leading-normal whitespace-nowrap border-b pb-4 border-gray-6">
        {vehicleDetails.model} Report
      </h3>
      <div className="border-b py-4 mb-5 border-gray-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {inspectionSections.map((section, i) => (
            <li
              key={i}
              className="cursor-pointer my-2 w-fit"
              onClick={() => handleClick(section.name, i)}>
              <span
                className={`navLink ${
                  sectionValue.name === section.name
                    ? "text-dark-1 dark:text-gray-1"
                    : "text-gray-6"
                }`}>
                {section?.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionHeader;
