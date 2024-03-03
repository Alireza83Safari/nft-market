import { apiUrl } from "@/services/apiUrl";

export default async function getNfts(url?: string) {
  const res = await fetch(`${apiUrl}api/nft${url?.length ? url : ""}`, {
    next: { tags: ["nfts"] },
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
