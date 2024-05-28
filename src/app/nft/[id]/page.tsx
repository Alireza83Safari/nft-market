import NftDetails from "./components/NftDetails";
import { NftType } from "../../../types/nft.type";
import getNfts from "@/actions/getNfts";
import getNft from "@/actions/getNft";
import Proposal from "@/models/proposal";
import { isValidObjectId } from "mongoose";
import getProposal from "@/actions/getProposal";

export const dynamicParams = false;

/* export async function generateStaticParams() {
  const nfts = await getNfts();
  return nfts?.data?.map((nft: NftType) => ({
    id: nft._id,
  }));
} */

export default async function page({ params }: { params: { id: string } }) {
  const nft = await getNft(params?.id);
  const proposal = await getProposal(params.id);

  return <NftDetails nft={nft} proposal={proposal} />;
}
