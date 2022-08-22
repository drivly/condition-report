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
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center rounded-lg w-full border border-green-accent bg-green-accent px-4 py-2 text-left text-sm md:text-base font-medium text-gray-1 hover:brightness-110 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>{notes ? "Announcements" : "Notes/Remarks"}</span>
                <div className="flex items-center">
                  <span className="mr-1 h-4 w-4 bg-gray-1 text-green-accent flex items-center justify-center rounded-full font-semibold text-xs animate-pulse transtion-all duration-150 ease-out group-hover:animate-none">
                    {notes?.length || remarks?.length}
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-gray-1`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm p-2 sm:p-4 mt-2 mb-4 rounded-lg bg-gray-200 dark:bg-dark-3 text-dark-1 dark:text-gray-1">
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
