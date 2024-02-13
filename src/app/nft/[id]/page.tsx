import NftDetails from "./components/NftDetails";
import { NftType } from "../../../types/nft.type";
import getNfts from "@/actions/getNfts";
import getNft from "@/actions/getNft";
import getUser from "@/actions/getUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authoptions";
import Proposal from "@/models/proposal";

export const revalidate = 60;

export async function generateStaticParams() {
  const nfts = await getNfts();

  return nfts?.data?.map((nft: NftType) => ({
    id: nft._id,
  }));
}

async function getProplosal(id: string) {
  if (id) {
    const proposal = await Proposal.find({ nft: id });
    return proposal;
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const nft = await getNft(params.id);
  const session = await getServerSession(authOptions);
  const proposal = await getProplosal(params.id);
  const user = await getUser((session as any)?.id);
  return <NftDetails nft={nft} user={user} proposal={proposal} />;
}
