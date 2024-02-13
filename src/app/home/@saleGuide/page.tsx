"use client";

import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/bundle";
interface TemplateProps {
  img: string;
  level: string;
  title: string;
  desc: string;
}

const Template: React.FC<TemplateProps> = ({ img, level, title, desc }) => {
  return (
    <div
      className="xl:w-[23rem] lg:w-[20rem] md:w-[14rem] bg-[#242435] relative text-gray-200 p-4 md:my-0 my-5 mx-auto rounded-lg hover:text-blue duration-300"
      data-aos="fade-up"
    >
      <div className="flex justify-between">
        <Image
          src={img}
          alt="Portfolio Image"
          width={70}
          height={70}
          className=" absolute -top-4 -left-3"
        />
        <p className="text-white mt-4">مرحله-{level}</p>
      </div>
      <p className="text-2xl font-bold mt-9">
      <span className="transition-colors">{title}</span>
      </p>
      <p className="mt-7">{desc}</p>
      <FaAngleLeft className="text-3xl mt-8" />
    </div>
  );
};

const SaleGuide = () => {
  return (
    <div className="mt-24">
      <p className="text-3xl font-bold text-white mb-10">
        NFT های خود را ایجاد و بفروشید
      </p>
      <div className="grid md:grid-cols-3 ">
        <Template
          img="/image/shape-7.png"
          level="01"
          title="کیف پول خود را تنظیم کنید"
          desc="ویژگی‌ها و اجزای قدرتمند، که نورون را متمایز می‌کند،
به راحتی قابل تنظیم و مقیاس پذیر است."
        />
        <Template
          img="/image/shape-1.png"
          level="02"
          title="مجموعه خود را ایجاد کنید"
          desc="مجموعه ای عالی از قالب های زیبای وب سایت برای نیاز شما.
بهترین الگوی مناسب را انتخاب کنید."
        />
        <Template
          img="/image/shape-5.png"
          level="03"
          title="NFT خود را اضافه کنید"
          desc="ما الگو را کاملاً پاسخگو کرده ایم، بنابراین عالی به نظر می رسد
همه دستگاه ها: دسکتاپ، تبلت و."
        />
      </div>
    </div>
  );
};

export default SaleGuide;
