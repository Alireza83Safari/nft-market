import NftDetails from "./components/NftDetails";
import { NftType } from "../../../types/nft.type";
import getNfts from "@/actions/getNfts";
import getNft from "@/actions/getNft";
import getUser from "@/actions/getUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authoptions";

export const revalidate = 60;

export async function generateStaticParams() {
  const nfts = await getNfts();

  return nfts?.data.map((nft: NftType) => ({
    id: nft._id,
  }));
}

export default async function page({ params }: { params: { id: string } }) {
  const nft = await getNft(params.id);
  const session = await getServerSession(authOptions);

  const user = await getUser((session as any)?.id);

  return (
    <div>
      <NftDetails nft={nft} user={user} />
    </div>
  );
}
