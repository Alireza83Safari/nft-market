import Image from "next/image";
import React from "react";
import "./NftTemplate.css";

const NftTemplate = () => {
  return (
    <div
      className="h-[26rem] relative w-auto mx-4 text-white z-20 product rounded-lg"
      data-aos="fade-up"
    >
      <div className="max-h-[17rem]">
        <Image
          src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1704535121/portfolio-10_k2phbj.jpg"
          alt="Portfolio Image"
          className="w-full h-full max-h-[17rem]"
          width={200}
          height={200}
        />
      </div>
      <div className="h-[12rem] px-5 mt-3">
        <p className="text-xl font-black">دلتا25</p>
        <p className="my-4">بالاترین پیشنهاد</p>
        <div className="flex justify-between">
          <p className="text-blue font-black">0.34eth</p>
          <p>205</p>
        </div>
      </div>
    </div>
  );
};

export default NftTemplate;
