import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Header />

      <div>
        <h1 className="text-4xl font-semibold text-white my-12 sm:mx-8 mx-2">
          تیم‌های مستقیم. <br />
          برای رویاهای قدیمی شما
        </h1>
        <Image
          src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1705079398/bg-image-22_pqv6qw.jpg"
          width={1000}
          height={100}
          alt="bg-1"
          className="min-w-full object-contain"
        />
        <div className="grid sm:grid-cols-2 mt-20">
          <div className="sm:p-5 p-2 border sm:m-7 m-3 border-borderColor rounded-lg">
            <h2 className="text-white text-4xl font-semibold">
              چرا ما این کار را انجام می دهیم{" "}
            </h2>
            <p className="text-gray-200 my-7">
              NFT ها توکن های مجازی هستند که مالکیت چیزی ذاتاً متمایز و متمایز
              را نشان می دهند کمیاب، چه یک آیتم فیزیکی یا دیجیتالی باشد، مانند
              آثار هنری، موسیقی متن، a کلکسیونی، یک آیتم درون بازی یا املاک و
              مستغلات. برخلاف ارزهای دیجیتال معمولی مانند بیت کوین یا پول فیات
              مانند ایالات متحده
            </p>
            <button className="text-white bg-blueAlta py-3 px-6 rounded-lg">
              به وبلاگ ما مراجعه کنید
            </button>
          </div>
          <div className="sm:p-5 p-2 border sm:m-7 m-3 border-borderColor rounded-lg">
            <h2 className="text-white text-3xl">کمک به شما رشد در هر مرحله.</h2>
            <p className="text-gray-200 my-7">
              NFT ها توکن های مجازی هستند که مالکیت چیزی ذاتاً متمایز و متمایز
              را نشان می دهند کمیاب، چه یک آیتم فیزیکی یا دیجیتالی باشد، مانند
              آثار هنری، موسیقی متن، a کلکسیونی، یک آیتم درون بازی یا املاک و
              مستغلات. برخلاف ارزهای دیجیتال معمولی مانند بیت کوین یا پول فیات
              مانند ایالات متحده
            </p>
          </div>
          <h2 className="text-white text-4xl font-bold sm:px-8 px-2 sm:m-7 m-3">
            ایجاد، فروش خوب و جمع آوری NFT های شگفت انگیز خود در Nuron بسیار
            سریع
          </h2>
          <div className="sm:p-5 p-2 border sm:m-7 m-3 border-borderColor rounded-lg">
            <p className="text-gray-200">
              NFTs یک تسویه حساب تک ترفندی است که در سال های اخیر پله های موفقیت
              را طی کرده است. رشد از NFT ها فوق العاده است و طبق Pymnts.com، حجم
              کل فروش NFT ها بسیار زیاد است. در شش ماه گذشته تقریباً از 2.5
              میلیارد دلار گذشت. با کمال تعجب، کل فروش حجم NFT ها در سال 2020
              13.7 میلیون دلار بود. با مقایسه هر دو ارزش،
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-white text-center mt-20">
            آمار نورون
          </h2>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2">
              <div className="border border-borderColor px-20 m-5 rounded-lg py-20 bg-[#1B1B28] text-center">
                <h1 className="text-blue text-5xl font-bold">309</h1>
                <p className="text-white text-lg">همه NFTهای نورون</p>
              </div>
              <div className="border border-borderColor px-20 m-5 rounded-lg py-20 bg-[#1B1B28] text-center">
                <h1 className="text-blue text-5xl font-bold">508</h1>
                <p className="text-white text-lg">همه سازندگان</p>
              </div>
              <div className="border border-borderColor px-20 m-5 rounded-lg py-20 bg-[#1B1B28o text-center">
                <h1 className="text-blue text-5xl font-bold">1032</h1>
                <p className="text-white text-lg">درآمد نورون</p>
              </div>
              <div className="border border-borderColor px-20 m-5 rounded-lg py-20 bg-[#1B1B28] text-center">
                <h1 className="text-blue text-5xl font-bold">650</h1>
                <p className="text-white text-lg">فروشنده سطح یک</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center min-w-full flex justify-center relative"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dmywzd0yw/image/upload/v1705085701/bg-image-6_s4pwfx.jpg)`,
          }}
        >
          <div className="relative z-10">
            <h1
              className="text-5xl text-center text-white font-semibold my-14"
              style={{ lineHeight: "70px" }}
            >
              کشف هنر دیجیتال کمیاب <br />و NFT ها
            </h1>

            <p className="text-gray-200 text-lg">
              NFT اسبی تک ترفندی است که در سال های اخیر صعود کرده است. رشد NFT
              فوق العاده است و طبق Pymnts.com، حجم کل فروش
            </p>

            <div className="text-center my-14 grid sm:grid-cols-2">
              <Link
                href="/create-nft"
                className="bg-blue hover:bg-blueAlta duration-300 text-white py-3 px-16 mx-2 rounded-lg sm:my-0 my-2"
              >
                ایجاد
              </Link>
              <Link
                href="/contact"
                className="bg-blueAlta hover:bg-blue duration-300 text-white py-3 mx-2 px-12 rounded-lg sm:my-0 my-2"
              >
                تماس با ما
              </Link>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-50 z-0"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
