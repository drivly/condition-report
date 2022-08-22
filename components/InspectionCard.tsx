import { ExclamationIcon } from "@heroicons/react/solid";
import { infoModalState, moreInfoState } from "atoms/InfoModalAtom";
import { useSectionState } from "atoms/sectionAtom";
import { truncate } from "lib/truncate";
import { useRecoilState } from "recoil";
import { Vehicle } from "typings";

interface Props {
  vehicle: Vehicle;
}

const InspectionCard = ({ vehicle }: Props) => {
  const { inspectionSections } = vehicle;
  const [sectionValue, setSectionValue] = useSectionState();
  const [moreInfo, setMoreInfo] = useRecoilState(moreInfoState);
  const [isOpen, setOpen] = useRecoilState(infoModalState);

  const sections = inspectionSections[sectionValue.index]?.responses;

  return (
    <section className="grid grid-cols-2 gap-y-4 text-sm font-monty font-medium">
      {sections?.map((res, i) => {
        let answers = res?.answers[0];
        let damages = answers?.notes || answers?.answer?.noteLabel;
        return (
          <div
            key={res.guid}
            className={`${
              sections.length - 1 === i && "border-none"
            } flex justify-between col-span-2 border-b border-gray-6/30 pb-4 text-gray-6`}>
            {/* responses question */}
            <p className="truncate">
              {res?.question?.buyerTranslation || "Not Listed"}
            </p>
            <div className="flex items-center -my-2">
              <p
                onClick={
                  damages
                    ? () => {
                        setMoreInfo(
                          answers?.notes || answers?.answer?.noteLabel
                        );
                        setOpen(true);
                      }
                    : undefined
                }
                className={`${
                  res?.answers[0]?.answer?.connotation === -1
                    ? "text-red-600 hover:bg-red-600 hover:text-gray-1 cursor-pointer  rounded-xl hover:px-2"
                    : "text-dark-1 dark:text-gray-1"
                } inspectionDamage`}>
                {truncate(res?.answers[0]?.answer.value, 17) || "No Comments"}
                {damages && (
                  <span>
                    <ExclamationIcon className="h-6 w-6 ml-2" />
                  </span>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InspectionCard;
