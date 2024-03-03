"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { NftProposalType, NftType } from "@/types/nft.type";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { createProposal } from "@/actions/createProposal";
import toast from "react-hot-toast";
import { getRevalidateTag } from "@/actions/getRevalidateTag";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import Proposal from "./Proposal";

interface NftDetailsProps {
  nft: NftType;
  proposal: NftProposalType[] | any;
}

const NftDetails: React.FC<NftDetailsProps> = ({ nft, proposal }) => {
  const initialState = {
    message: "",
    status: null,
  } as any;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, formAction] = useFormState(createProposal, initialState);
  const { data: session } = useSession();

  React.useEffect(() => {
    if (state?.message) {
      if (state.status !== 200) {
        toast.error(state.message);
      } else {
        toast.success("پیشنهاد با موفقیت اضافه شد");
        getRevalidateTag("nft");
        setIsModalOpen(false);
      }
    }
  }, [state]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2 bg-backgroundBlack lg:pt-12 lg:px-14">
        <div>
          <Image
            src={nft?.image}
            alt="Portfolio Image"
            className="lg:min-w-full md:h-[30rem] min-w-full object-contain"
            width={100}
            height={100}
          />
        </div>
        <div className="lg:pr-10 sm:px-5 px-2 lg:mt-0 mt-4">
          <h1 className="lg:text-5xl text-4xl sm:mt-0 mt-4 font-black text-white text-center">
            {nft?.title}
          </h1>

          <div className="flex lg:my-7 my-5">
            <p className="text-gray-200">قیمت پبشنهادی سازنده</p>
            <p className="text-blue mr-2 font-bold">
              {nft?.price?.toLocaleString()}$
            </p>
          </div>

          <div className="flex lg:my-7 my-5">
            <p className="text-gray-200">تاریخ ساخت</p>
            <p className="text-blue mr-2 font-bold">
              {nft?.createdAt?.slice(0, 10)}
            </p>
          </div>

          <div className="flex lg:my-7 my-5 items-center">
            <p className="text-gray-200">سازنده</p>
            <p className="text-blue mr-2 font-bold">
              {nft?.user?.firstname} {"   "} {nft?.user?.lastname}
            </p>
          </div>
          <p className="sm:text-sm leading-10 font-semibold text-white sm:mt-0 mt-12">
            {nft?.description}
          </p>

          <Proposal proposal={proposal} openModal={openModal} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="ثبت پیشنهاد">
        <form action={formAction}>
          <input type="hidden" value={(session as any)?.id} name="user" />
          <input type="hidden" value={nft?._id} name="nft" />
          <div>
            <Input label="قیمت" name="price" type="number" />
          </div>
          <button className="bg-blue min-w-full py-2 rounded-lg mt-5">
            ثبت
          </button>
        </form>
      </Modal>

      <Footer />
    </>
  );
};

export default NftDetails;
