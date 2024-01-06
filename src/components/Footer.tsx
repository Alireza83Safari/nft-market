import Image from "next/image";

const Footer = () => {
  return (
    <footer className="md:flex justify-between grid grid-cols-2 mt-20 px-3 py-12 border-t border-borderColor">
      <div className="max-w-[12rem] md:mx-0 mx-auto">
        <Image
          src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1704525608/logo-white_dstkvu.png"
          alt="Portfolio Image"
          width={100}
          height={34}
        />
        <p className="text-gray-200 mt-5 sm:text-lg text-sm">
          ایجاد شده با همکاری بیش از 60 نفر از بهترین هنرمندان نورون جهان.
        </p>
        <p className="text-white sm:mt-10 mt-2 mb-3 sm:text-base text-sm">
          آخرین به روز رسانی های نورون را دریافت کنید
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="نام کاربری شما"
            className="p-2 bg-blueAlta rounded-md"
          />
          <button className="absolute p-2 bg-blue rounded-md">اشتراک</button>
        </div>
      </div>

      <ul className="text-gray-200 md:mx-0 mx-auto">
        <h3 className="text-white sm:text-4xl text-xl font-black mb-3">
          اطلاعات
        </h3>
        <li className="my-2 sm:text-lg text-sm">کاوش در بازار</li>
        <li className="my-2 sm:text-lg text-sm">توکن آماده</li>
        <li className="my-2 sm:text-lg text-sm">گزینه اصلی</li>
        <li className="my-2 sm:text-lg text-sm">بررسی محصول</li>
        <li className="my-2 sm:text-lg text-sm">شبکه وبلاگ</li>
        <li className="my-2 sm:text-lg text-sm">درباره ما</li>
      </ul>

      <ul className="text-gray-200 md:mt-0 mt-14 md:mx-0 mx-auto">
        <h3 className="text-white sm:text-4xl text-xl font-black mb-3">
          نورون
        </h3>
        <li className="my-2 sm:text-lg text-sm">کاورش پروتوکل</li>
        <li className="my-2 sm:text-lg text-sm">توکن سیستم</li>
        <li className="my-2 sm:text-lg text-sm">بهینه سازی زمان</li>
        <li className="my-2 sm:text-lg text-sm">بررسی بصری</li>
        <li className="my-2 sm:text-lg text-sm">سیستم محو کردن</li>
        <li className="my-2 sm:text-lg text-sm">گزارش فعالیت</li>
      </ul>

      <ul className="text-gray-200 md:mt-0 mt-14 md:mx-0 mx-auto">
        <h3 className="text-white sm:text-4xl text-xl font-black mb-3">
          اطلاعات
        </h3>
        <li className="my-2 sm:text-lg text-sm">کاوش در بازار</li>
        <li className="my-2 sm:text-lg text-sm">توکن آماده</li>
        <li className="my-2 sm:text-lg text-sm">گزینه اصلی</li>
        <li className="my-2 sm:text-lg text-sm">بررسی محصول</li>
        <li className="my-2 sm:text-lg text-sm">شبکه وبلاگ</li>
        <li className="my-2 sm:text-lg text-sm">درباره ما</li>
      </ul>
    </footer>
  );
};

export default Footer;
