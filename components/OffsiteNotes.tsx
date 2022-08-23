import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Vehicle } from "typings";

interface Props {
  notes?: Vehicle["offsiteAnnouncements"];
  remarks?: Vehicle["offsiteRemarks"];
}

const OffsiteNotes = ({ notes, remarks }: Props) => {
  const data = notes || remarks;

  return (
    <div className="max-w-full">
      <div className="w-full">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="offsiteNotesButton group">
                <span>{notes ? "Announcements" : "Notes/Remarks"}</span>
                <div className="flex items-center">
                  <span className="mr-1 h-5 w-5 bg-gray-1 text-dark-1 flex items-center justify-center rounded-full font-medium text-base animate-pulse transtion-all duration-150 ease-out group-hover:animate-none">
                    {notes?.length || remarks?.length}
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-gray-1`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm p-4 mt-2 mb-4 rounded-lg bg-gray-200 dark:bg-dark-1 text-dark-1 dark:text-gray-1">
                {!data?.length
                  ? "Nothing to see here"
                  : data?.map((item, i) => <p key={i}>{item}</p>)}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default OffsiteNotes;
