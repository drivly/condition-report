import { useSectionState } from "atoms/sectionAtom";
import { DamageCount } from "components";
import { useRef } from "react";
import { Vehicle } from "typings";
import getDamageCount from "utils/getDamageCount";

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

  // get total Damage Count and SEction
  const damages = getDamageCount(inspectionSections, sectionValue.index);

  return (
    <section ref={sectionRef}>
      <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm">
        Inspection Sections
      </h3>
      <h3 className="dark:text-gray-1 text-dark-1 text-3xl font-bold leading-normal md:leading-normal whitespace-nowrap pb-4 border-b-4 border-gray-6/20">
      Inspection
      </h3>
      <div className="py-4 border-b-4 border-gray-6/20 flex justify-between">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {inspectionSections.map((section, i) => {
          return (
            <li
              key={i}
              className="cursor-pointer my-2 relative"
              onClick={() => handleClick(section.name, i)}>
              <p
                className={`inspectionLinks truncate ${
                  sectionValue.name === section.name
                    ? "text-dark-1 dark:text-gray-1 dark:hover:bg-green-accent border-gray-6/20 border-2 bg-gray-100 dark:bg-dark-3 shadow-md"
                    : "text-gray-6"
                }`}>
                <span className="w-fit">{section?.name}</span>
              </p>
              {damages?.total && damages?.section === section?.name ? (
                <DamageCount total={damages?.total} />
              ) : null}
            </li>
          )})}
        </ul>
      </div>
    </section>
  );
};

export default SectionHeader;
