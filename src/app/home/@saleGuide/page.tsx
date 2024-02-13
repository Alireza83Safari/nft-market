"use client";

import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/bundle";

const SaleGuide = () => {
  return (
    <div className="mt-24">
      <p className="text-3xl font-bold text-white mb-10">
        NFT های خود را ایجاد و بفروشید
      </p>
      <div className="grid md:grid-cols-3 ">
        <div
          className=" xl:w-[23rem] lg:w-[20rem] md:w-[14rem] bg-[#242435] relative text-gray-200 p-4 md:my-0 my-5 mx-auto"
          data-aos="fade-up"
        >
          <div className="flex justify-between">
            <Image
              src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1704537227/shape-1_pmifkq.png"
              alt="Portfolio Image"
              width={70}
              height={70}
              className=" absolute -top-4 -left-3"
            />
            <p className="text-white mt-4">مرحله-02</p>
          </div>
          <p className="text-2xl font-bold mt-9">مجموعه خود را ایجاد کنید</p>
          <p className="mt-7">
            ما الگو را کاملاً پاسخگو کرده ایم، بنابراین عالی به نظر می رسد همه
            دستگاه ها: دسکتاپ، تبلت و.
          </p>
          <FaAngleLeft className="text-3xl mt-8" />
        </div>
      </div>
    </div>
  );
};

export default SaleGuide;
