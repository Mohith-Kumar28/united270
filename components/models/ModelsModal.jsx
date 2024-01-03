import { Dialog, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/solid";

import ModelsCardCarousel from "./ModelsCardCarousel";

export default function ModelsModal({ isOpen, setIsOpen, card }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-lg  " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[100vw] transform overflow-hidden  bg-light-orange p-6 text-left align-middle shadow-xl transition-all relative h-screen flex flex-col justify-center">
                  {/* <BrandCard card={card} /> */}
                  <ModelsCardCarousel card={card} />
                  <div
                    className=" z-50 bg-pri-pink p-3 rounded-full text-white absolute bottom-4 left-4 cursor-pointer"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-8" />{" "}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
