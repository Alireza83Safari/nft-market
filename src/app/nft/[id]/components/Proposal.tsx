import { NftProposalType } from "@/types/nft.type";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

interface ProposalProps {
  proposal: NftProposalType[];
  openModal: any;
}

const Proposal: React.FC<ProposalProps> = ({ proposal, openModal }) => {
  const [showAllProposal, setShowAllProposal] = useState(false);
  const mapProposals = showAllProposal
    ? proposal
    : proposal?.length
    ? proposal?.slice(0, 2)
    : null;

  return (
    <div className="min-w-full border border-borderColor lg:mt-12 sm:mt-5 mt-12">
      <p className="text-center text-white sm:text-xl text-lg">پیشنهاد ها</p>
      {mapProposals !== null ? (
        mapProposals?.map((item: NftProposalType) => (
          <div
            className="text-white sm:flex justify-between border-b border-borderColor sm:text-base text-sm"
            key={item?._id}
          >
            <div className="flex lg:px-12 px-3 sm:py-6 py-2">
              <p>کاربر:</p>
              <p className="text-blue mr-2">{item?.user?.username}</p>
            </div>
            <div className="flex lg:px-12 px-3 sm:py-6 py-2">
              <p>قیمت:</p>
              <p className="text-blue mr-2">{item?.price?.toLocaleString()}$</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-center my-8">پیشنهادی ثبت نشده است</p>
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
  );
};

export default Proposal;
