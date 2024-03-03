import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <nav className="grid md:grid-cols-5 bg-backgroundBlack md:py-20 py-5 mt-14">
      <div className="md:px-5 leading-10 md:col-span-2">
        <h1
          className="md:text-5xl text-4xl font-black text-white"
          style={{ lineHeight: "70px" }}
        >
          هنر دیجیتال را کشف کنید، NFT های خاص خود را جمع آوری و بفروشید.
        </h1>
        <p className="md:text-2xl text-xl text-gray-200 md:my-16 my-10">
          با یکی از بزرگترین خرده فروشان جهان شریک شوید تا برند و برند خود را به
          نمایش بگذارید محصولات.
        </p>
        <div className="sm:gap-x-6 sm:flex grid justify-center">
          <Link
            href="/nft"
            className="text-white bg-blue hover:bg-blueAlta duration-500 py-5 rounded-lg w-[190px] text-lg font-semibold sm:my-0 my-3 text-center"
          >
            شروع به کار
          </Link>
          <Link
            href="/create-nft"
            className="text-white bg-blueAlta hover:bg-blue duration-500 py-5 rounded-lg w-[190px] text-lg font-semibold sm:my-0 my-3 text-center"
          >
            ایجاد
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center md:px-16 md:mt-0 mt-10 md:col-span-3">
        <Image
          src="/image/slider-1.WEBP"
          alt="slider"
          className="object-contain 2xl:w-[40rem] w-[30rem]"
          width={1000}
          height={1000}
        />
      </div>
    </nav>
  );
};

export default Banner;
