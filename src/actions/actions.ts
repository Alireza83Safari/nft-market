"use server";

import { apiUrl } from "@/services/apiUrl";

export async function createNft(prev: any, data: FormData) {
  const datas = {
    title: data.get("title"),
    price: data.get("price"),
    author: data.get("author"),
    description: data.get("description"),
    image: null,
  };

  const res = await fetch(`${apiUrl}/api/nft`, {
    method: "POST",
    body: JSON.stringify(datas),
  });
  const resp = await res.json();

  return { message: resp?.message, status: res.status };
}

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
