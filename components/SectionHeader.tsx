import { useSectionState } from "atoms/sectionAtom";
import { DamageCount } from "components";
import { useRef } from "react";
import { Vehicle } from "typings";
import getDamageCount from "utils/getDamageCount";

interface Props {
  vehicle: Vehicle;
}

const SectionHeader = ({ vehicle }: Props) => {
  const { inspectionSections } = vehicle;
  const [sectionValue, setSectionValue] = useSectionState();
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleClick = (name: string, i: number) => {
    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
    setSectionValue({ name, index: i });
  };

  // get total Damage Count and Sections
  const filteredSections = getDamageCount(inspectionSections);

  return (
    <section ref={sectionRef}>
      <h3 className="uppercase text-gray-6 tracking-widest font-medium text-sm md:text-base">
        Filters
      </h3>
      <h3 className="dark:text-gray-1 text-dark-1 text-2xl md:text-3xl font-bold leading-normal md:leading-normal whitespace-nowrap pb-4">
        Inspection
      </h3>
      <div className="pb-2 border-b-4 border-gray-6/20 justify-between">
        <ul className="flex flex-0 flex-wrap gap-x-2 md:gap-x-4 mx-auto">
          {filteredSections.map((section, i) => {
            return (
              <li
                key={i}
                className="cursor-pointer mb-3 relative rounded-xl"
                onClick={() => handleClick(section.name, i)}>
                <p
                  className={`inspectionLinks group ${
                    sectionValue.name === section.name
                      ? "activeInspectionLinks "
                      : "text-gray-6"
                  }`}>
                  <span className="px-2">
                    {section?.name.replace(
                      "OBD II & Warning Lights",
                      "Computer"
                    )}
                  </span>
                  {section?.damageTotal > 0 && (
                    <DamageCount total={section?.damageTotal} />
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionHeader;
