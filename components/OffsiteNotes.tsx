import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Vehicle } from "typings";

interface Props {
  notes?: Vehicle["offsiteAnnouncements"];
  remarks?: Vehicle["offsiteRemarks"];
}

const OffsiteNotes = ({ notes, remarks }: Props) => {
  return (
    <div className="w-full">
      <div className="">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between rounded-lg bg-green-accent px-4 py-2 text-left text-sm font-medium text-gray-1 hover:brightness-110 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>{notes ? "Announcements" : "Notes/Remarks"}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm p-2 sm:p-4 mt-2 mb-4 rounded-lg bg-gray-200 dark:bg-dark-3 text-dark-1 dark:text-gray-1">
                {(!notes?.length || !remarks?.length) && "Nothing to see here"}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default OffsiteNotes;
