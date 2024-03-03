import { apiUrl } from "@/services/apiUrl";

export async function createProposal(prev: any, data: FormData) {
  const datas = {
    nft: data.get("nft"),
    price: data.get("price"),
    user: data.get("user"),
  };

  const res = await fetch(`${apiUrl}/api/proposal`, {
    method: "POST",
    body: JSON.stringify(datas),
  });
  const resp = await res.json();

  return { message: resp?.message, status: res.status };
}
