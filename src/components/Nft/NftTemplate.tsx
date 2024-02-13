import Image from "next/image";
import React from "react";
import "./NftTemplate.css";
import { NftType } from "@/types/nft.type";
import Link from "next/link";

const NftTemplate = ({ _id, title, price, image, createdAt }: NftType) => {
  return (
    <Link
      href={`/nft/${_id}`}
      className="h-[26rem] relative w-auto mx-4 text-white product rounded-lg mt-5"
      data-aos="fade-up"
    >
      <div className="max-h-[17rem]">
        <Image
          src={image}
          alt="Image"
          className="w-full h-full max-h-[17rem] rounded-t-lg"
          width={400}
          height={400}
        />
      </div>
      <div className="h-[12rem] px-5 mt-3">
        <p className="text-xl font-black text-center">{title}</p>
        <div className="flex justify-between mt-4">
          <p className="text-sm">قیمت پیشنهادی سازنده:</p>
          <p className="text-blue font-black">${price}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-sm">تاریخ ساخت:</p>
          <p className="text-blue font-black">{createdAt?.slice(0, 10)}</p>
        </div>
      </div>
    </Link>
  );
};

export default NftTemplate;
