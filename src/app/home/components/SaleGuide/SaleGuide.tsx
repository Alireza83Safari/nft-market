"use client";

import Template from "./Template";
import "swiper/css";
import "swiper/css/bundle";

const SaleGuide = () => {
  return (
    <div className="mt-20">
      <p className="text-3xl font-bold text-white mb-10">
        NFT های خود را ایجاد و بفروشید
      </p>
      <div className="grid md:grid-cols-3 ">
        <Template />
        <Template />
        <Template />
      </div>
    </div>
  );
};

export default SaleGuide;
