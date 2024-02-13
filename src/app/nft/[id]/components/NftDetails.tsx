"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Header from "@/components/Header";
import Image from "next/image";
import { NftProposalType, NftType } from "@/types/nft.type";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { createProposal } from "@/actions/actions";
import toast from "react-hot-toast";
import { getRevalidateTag } from "@/actions/getRevalidateTag";
import Footer from "@/components/Footer";
import { UserType } from "@/types/auth.type";
import { BiDotsHorizontalRounded } from "react-icons/bi";

interface NftDetailsProps {
  nft: NftType;
  user: UserType;
  proposal: NftProposalType[] | any;
}

const NftDetails: React.FC<NftDetailsProps> = ({ nft, user, proposal }) => {
  const { _id, title, price, image, createdAt, description, author } = nft;

  const initialState = {
    message: "",
    status: null,
  } as any;
  const [state, formAction] = useFormState(createProposal, initialState);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [showAllProposal, setShowAllProposal] = useState(false);
  const mapProposals = showAllProposal ? proposal : proposal?.slice(0, 2);
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2 bg-backgroundBlack lg:pt-12 lg:px-14">
        <div>
          <Image
            src={image}
            alt="Portfolio Image"
            className="lg:min-w-full md:h-[30rem] min-w-full object-contain"
            width={100}
            height={100}
          />
        </div>
        <div className="lg:pr-10 sm:px-5 px-2 lg:mt-0 mt-4">
          <h1 className="lg:text-5xl text-4xl sm:mt-0 mt-4 font-black text-white text-center">
            {title}
          </h1>

          <div className="flex lg:my-7 my-5">
            <p className="text-gray-200">قیمت پبشنهادی سازنده</p>
            <p className="text-blue mr-2 font-bold">{price?.toLocaleString()}$</p>
          </div>

          <div className="flex lg:my-7 my-5">
            <p className="text-gray-200">تاریخ ساخت</p>
            <p className="text-blue mr-2 font-bold">
              {createdAt?.slice(0, 10)}
            </p>
          </div>

          <div className="flex lg:my-7 my-5 items-center">
            <p className="text-gray-200">سازنده</p>
            <p className="text-blue mr-2 font-bold">
              {user?.firstname} {"   "} {user?.lastname}
            </p>
          </div>
          <p className="sm:text-xl font-semibold text-white sm:mt-0 mt-12">
            {description}
          </p>

          <div className="min-w-full border border-borderColor lg:mt-12 sm:mt-5 mt-12">
            <p className="text-center text-white sm:text-xl text-lg">
              پیشنهاد ها
            </p>
            {!!proposal?.length ? (
              mapProposals?.map((item: NftProposalType) => (
                <div
                  className="text-white sm:flex justify-between border-b border-borderColor sm:text-base text-sm"
                  key={item?._id}
                >
                  <div className="flex lg:px-12 px-3 sm:py-6 py-2">
                    <p>کاربر:</p>
                    <p className="text-blue mr-2">{item?.user}</p>
                  </div>
                  <div className="flex lg:px-12 px-3 sm:py-6 py-2">
                    <p>قیمت:</p>
                    <p className="text-blue mr-2">{item?.price?.toLocaleString()}$</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center my-8">
                پیشنهادی ثبت نشده است
              </p>
            )}
            {proposal?.length > 3 && (
              <div
                className="flex justify-center my-3"
                onClick={() => setShowAllProposal(!showAllProposal)}
              >
                <BiDotsHorizontalRounded className="text-white text-4xl" />
              </div>
            )}

            <button
              className="flex bg-blue hover:bg-gray-200 duration-300 rounded-lg text-white items-center justify-center min-w-full py-2"
              onClick={openModal}
            >
              <FaPlus className="text-xl ml-2" />
              <p>ثبت پیشنهاد جدید</p>
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="ثبت پیشنهاد">
        <form action={formAction}>
          <input type="hidden" value={user?.email} name="user" />
          <input type="hidden" value={_id} name="nft" />
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
