import { apiUrl } from "@/services/apiUrl";

export default async function getProposal(id: string) {
  const res = await fetch(`${apiUrl}api/proposal/${id}`, {
    next: { tags: ["proposal"] },
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
