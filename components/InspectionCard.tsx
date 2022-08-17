import { InformationCircleIcon } from "@heroicons/react/outline";
import { infoModalState, moreInfoState } from "atoms/InfoModalAtom";
import { useSectionState } from "atoms/sectionAtom";
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

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {inspectionSections[sectionValue.index]?.responses?.map((res) => {
        let answers = res?.answers[0];
        return (
          <div
            key={res.guid}
            className="flex flex-col justify-between space-y-2 py-2 text-sm space-x-8">
            {/* responses question */}
            <p className="font-monty font-medium">
              {res?.question?.buyerTranslation || "Not Listed"}
            </p>
            <div className="flex items-center space-x-4">
              <p
                className={`${
                  res?.answers[0]?.answer?.connotation === -1
                    ? "text-red-600"
                    : "text-green-accent"
                } font-semibold text-base`}>
                {res?.answers[0]?.answer.value || "No Comments"}
              </p>
              {(answers?.notes || answers?.answer?.noteLabel) && (
                <button
                  className="text-base italic text-gray-6 font-medium flex items-center hover:text-dark-1 dark:hover:text-gray-1 transition-all duration-200 ease-out whitespace-nowrap"
                  onClick={() => {
                    setMoreInfo(answers?.notes || answers?.answer?.noteLabel);
                    setOpen(true);
                  }}>
                  more info
                  <InformationCircleIcon className="h-6 w-6 ml-2" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InspectionCard;
