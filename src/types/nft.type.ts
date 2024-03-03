import { UserType } from "./auth.type";

export interface CreateNftType {
  title: string;
  price: number;
  user: string;
  image: string;
}

export interface NftProposalType {
  _id: string;
  price: number;
  nft: string;
  user: UserType;
  createdAt: string;
  updatedAt: string;
}

export interface NftType {
  _id: string;
  title: string;
  price: number;
  user: UserType;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface NftWithPaginationType {
  data: NftType[];
  total: number;
  limit: number;
  page: number;
}
