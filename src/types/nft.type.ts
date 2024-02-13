export interface CreateNftType {
  title: string;
  price: number;
  author: string;
  image: string;
}

export interface NftProposalType {
  _id: string;
  price: number;
  nft: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface NftType {
  _id: string;
  title: string;
  price: number;
  author: string;
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
