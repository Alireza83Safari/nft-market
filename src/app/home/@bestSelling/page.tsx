import { bestSelling } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-white font-bold mb-10">بیشترین فروش</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-7">
        {bestSelling?.map((user) => (
          <div className="flex items-center">
            <Image
              src={user?.img}
              width={50}
              height={50}
              alt=""
              className="rounded-full transition-transform ease-in-out duration-500 transform-gpu hover:scale-125"
            />
            <div className="text-white mr-3">
              <h2 className="font-bold mb-1 text-lg">{user?.user}</h2>
              <p className="text-xs">{user?.price}تومان</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
