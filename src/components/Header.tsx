"use client";
import {
  FaAngleDown,
  FaHamburger,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="xl:container mx-auto md:px-8 px-2 z-20 border-b border-borderColor min-w-full sticky top-0 backdrop-blur-2xl">
      <div className="flex justify-between h-[90px] items-center text-gray-200">
        <div className="items-center md:flex hidden">
          <Image
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1704525608/logo-white_dstkvu.png"
            alt="logo"
            className="2xl:max-h-[35px] 2xl:max-w-[100px] max-h-[44px] ml-3 sm:flex hidden"
            width={100}
            height={100}
          />

          <div className="lg:flex items-center font-semibold hidden">
            <div className="relative group xl:mx-5 mx-2">
              <button className="flex items-center">
                <p>صفحه اصلی</p>
                <FaAngleDown className="mt-1" />
              </button>
              <ul className="hidden group-hover:block absolute">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
                <li>test5</li>
              </ul>
            </div>

            <p className="mx-7">درباره</p>

            <div className="relative group xl:mx-5 mx-2">
              <button className="flex items-center">
                <p className="">مثال</p>
                <FaAngleDown className="mt-1" />
              </button>
              <ul className="hidden group-hover:block absolute">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
                <li>test5</li>
              </ul>
            </div>

            <div className="relative group xl:mx-5 mx-2">
              <button className="flex items-center">
                <p className="">صفحات</p>
                <FaAngleDown className="mt-1" />
              </button>
              <ul className="hidden group-hover:block absolute">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
                <li>test5</li>
              </ul>
            </div>

            <div className="relative group xl:mx-5 mx-2">
              <button className="flex items-center">
                <p className="">وبلاگ</p>
                <FaAngleDown className="mt-1" />
              </button>
              <ul className="hidden group-hover:block absolute">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
                <li>test5</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:w-auto w-full">
          <div className="relative">
            <input
              type="text"
              className="border border-borderColor py-2 lg:py-3 px-4 bg-backgroundBlack rounded-lg lg:w-80 sm:w-60 w-48"
              placeholder="اینجا بگردید"
            />
            <button className="absolute left-3 top-3 lg:top-4">
              <FaSearch className="text-lg" />
            </button>
          </div>
          <div className="flex items-center sm:gap-x-5 gap-x-1 sm:mr-5 mr-2">
            <button className="rounded-full">
              <Image
                src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1704525853/boy-avater_o9kttd.png"
                alt="profile"
                className="rounded-full sm:w-12 w-10 sm:h-12"
                h-10
                width={100}
                height={100}
              />
            </button>

            <button
              className={`rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10  justify-center items-center ${
                session ? `flex` : `hidden`
              }`}
              onClick={() => setShowMenu(true)}
            >
              <FaHamburger className="text-xl" />
            </button>

            <button
              className={`rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10  justify-center items-center ${
                session ? `flex` : `hidden`
              }`}
              onClick={() => signOut()}
            >
              <FaSignOutAlt className="text-xl" />
            </button>

            <Link
              href="/login"
              className={`rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10  justify-center items-center ${
                session ? `hidden` : `flex`
              }`}
            >
              <FaSignInAlt className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="lg:hidden fixed top-0 left-0 min-h-full bg-[#242435] text-white border-r-2 border-borderColor">
          <div className="p-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              <button
                className="mt-4 rounded-full border border-borderColor w-8 h-8 flex justify-center items-center"
                onClick={() => setShowMenu(false)}
              >
                X
              </button>
              <p className=" pb-5 text-center border-b border-borderColor">
                صفحه اصلی
              </p>
              <p className=" pb-5 text-center border-b border-borderColor">
                درباره
              </p>
              <p className=" pb-5 text-center border-b border-borderColor">
                مثال
              </p>
              <p className=" pb-5 text-center border-b border-borderColor">
                صفحات
              </p>
              <p className=" pb-5 text-center border-b border-borderColor">
                وبلاگ
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
