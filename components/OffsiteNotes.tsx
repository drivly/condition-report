import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import React from 'react'
import { Vehicle } from 'typings'

interface Props {
  notes?: Vehicle['offsiteAnnouncements']
  remarks?: Vehicle['offsiteRemarks']
}

const OffsiteNotes = ({ notes, remarks }: Props) => {
  console.log(remarks?.length)
  return (
    <div className="w-full">
        <div className="">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-fit justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{notes ? "Announcements" : "Remarks"}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm p-2 sm:p-4 mt-2 mb-4 rounded-lg bg-gray-100 text-dark-1 dark:text-gray-1">
                  {(!notes?.length  || !remarks?.length ) && "Nothing to see here"}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
  )
}

export default OffsiteNotes
