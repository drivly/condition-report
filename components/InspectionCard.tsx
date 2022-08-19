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

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 overflow-x-hidden">
      {inspectionSections[sectionValue.index]?.responses?.map((res) => {
        let answers = res?.answers[0];
        let damages = answers?.notes || answers?.answer?.noteLabel;

        return (
          <div
            key={res.guid}
            className="flex flex-col justify-between space-y-2 gap-x-4 py-2 text-sm">
            {/* responses question */}
            <p className="font-monty font-medium truncate">
              {res?.question?.buyerTranslation || "Not Listed"}
            </p>
            <div className="flex items-center">
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
                    ? "text-red-600 hover:bg-red-600 hover:text-gray-1 cursor-pointer flex rounded-full"
                    : "text-green-accent"
                } font-semibold text-sm px-4 py-2`}>
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
