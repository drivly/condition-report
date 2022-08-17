import { Dialog, Transition } from "@headlessui/react";
import { infoModalState, moreInfoState } from "atoms/InfoModalAtom";
import { Fragment } from "react";
import { useRecoilState } from "recoil";

export default function InfoModal() {
  const [isOpen, setOpen] = useRecoilState(infoModalState);
  const [moreInfo, setMoreInfo] = useRecoilState(moreInfoState);

  console.log("moreInfo", moreInfo);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-5" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-1 dark:bg-dark-3 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-start p-4 full ">
                  <div className="flex items-center w-full mb-4 border-b pb-4 border-gray-6">
                    <Dialog.Title className="font-semibold text-2xl">
                      Damage Details
                    </Dialog.Title>
                  </div>
                  <p className="text-lg font-monty">{moreInfo}</p>
                  <div className="w-full mt-4 flex gap-x-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="hover:bg-transparent w-full bg-green-accent hover:text-dark-1 dark:hover:text-gray-1 font-semibold text-gray-1 py-2 px-4 border hover:border-gray-6 border-transparent rounded transition-all transform duration-150">
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
