import { apiUrl } from "@/services/apiUrl";

export default async function getNft(id: string) {
  if (id) {
    const res = await fetch(`${apiUrl}api/nft/${id}`, {
      next: { tags: ["nft"] },
    });
    const data = await res?.json();
    return data;
  }
}
