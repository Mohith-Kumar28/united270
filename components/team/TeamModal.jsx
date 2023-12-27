import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
  SiLinkedin,
} from "react-icons/si";
import { galaktisRegular, sourceSansVariableItalic } from "@/styles/fonts";
import SlidingText from "../utils/SlidingText";
import Link from "next/link";

export default function TeamModal({ isOpen, setIsOpen, user }) {
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-pri-pink p-6 text-left align-middle shadow-xl transition-all relative h-[90vh] md:h-[80vh] flex flex-col justify-center">
                  <div className="flex  overflow-hidden">
                    {/* <TranslateWrapper>
                      <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                      <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                      <LogoItemsTop />
                    </TranslateWrapper>
                  </div>
                  <div className="flex overflow-hidden mt-4">
                    <TranslateWrapper reverse>
                      <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                      <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                      <LogoItemsBottom />
                    </TranslateWrapper> */}
                    <TranslateWrapper>
                      <img
                        className=" h-[14vmax] object-cover overflow-visible"
                        src={user?.brands}
                      />{" "}
                      <img
                        className="translate-x-[25%] h-[14vmax] object-cover overflow-visible"
                        src={user?.brands}
                      />
                    </TranslateWrapper>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="mt-4 text-lg font-medium leading-6 text-gray-900"
                  >
                    <p
                      className={`text-pri-green text-4xl md:text-8xl font-semibold relative z-10  w-full px-5  ${galaktisRegular.className}`}
                    >
                      {user?.name}
                    </p>
                  </Dialog.Title>
                  <div className="mt-2 p-4 justify-between flex flex-col md:flex-row">
                    <p
                      className={`text-base md:text-lg font-medium text-gray-100 bg-white/5 backdrop-blur-lg relative z-10 md:w-2/3  ${sourceSansVariableItalic.className}`}
                    >
                      {user?.description}
                    </p>
                    <Link
                      href={user?.linkedinUrl}
                      // target="_blank"
                      className="cursor-pointer z-10 w-16 md:w-24 h-16 md:h-24 flex justify-center items-center rounded-lg  hover:bg-black/10 text-pri-green transition-colors outline-none"
                    >
                      <SiLinkedin className="text-4xl md:text-5xl" />
                    </Link>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="absolute top-4 right-4 z-10"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="w-8 text-gray-800" />
                    </button>
                    <Image
                      width={600}
                      height={600}
                      className="object-contain h-full py-20  absolute -right-10 -bottom-3 "
                      src={user?.photo}
                    />
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

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "50%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center  hover:bg-slate-200 text-pri-green transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiNike} />
    <LogoItem Icon={Si3M} />
    <LogoItem Icon={SiAbstract} />
    <LogoItem Icon={SiAdobe} />
    <LogoItem Icon={SiAirtable} />
    <LogoItem Icon={SiAmazon} />
    <LogoItem Icon={SiBox} />
    <LogoItem Icon={SiBytedance} />
    <LogoItem Icon={SiChase} />
    <LogoItem Icon={SiCloudbees} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiBmw} />
    <LogoItem Icon={SiBurton} />
    <LogoItem Icon={SiBuildkite} />
    <LogoItem Icon={SiCouchbase} />
    <LogoItem Icon={SiDailymotion} />
    <LogoItem Icon={SiDeliveroo} />
    <LogoItem Icon={SiEpicgames} />
    <LogoItem Icon={SiGenius} />
    <LogoItem Icon={SiGodaddy} />
    <LogoItem Icon={SiHeroku} />
  </>
);
