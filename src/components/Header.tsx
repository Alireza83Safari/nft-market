"use client";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { CiMenuBurger } from "react-icons/ci";
import { useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (q) {
      setSearchTerm(q);
    }
  }, [q]);

  return (
    <header className="xl:container mx-auto md:px-8 px-2 z-20 border-b border-borderColor min-w-full sticky top-0 backdrop-blur-2xl">
      <div className="flex justify-between h-[90px] items-center text-gray-200">
        <div className="items-center md:flex hidden">
          <Link href="/home">
            <Image
              src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1704525608/logo-white_dstkvu.png"
              alt="logo"
              className="2xl:max-h-[35px] 2xl:max-w-[100px] max-h-[44px] ml-3 sm:flex hidden"
              width={100}
              height={200}
            />
          </Link>

          <div className="lg:flex items-center font-semibold hidden">
            <Link
              href="/nft"
              className="flex xl:mx-5 mx-2 hover:text-blue duration-300"
            >
              فروشگاه
            </Link>

            <Link
              href="/about"
              className="flex xl:mx-5 mx-2 hover:text-blue duration-300"
            >
              درباره ما
            </Link>

            <Link
              href="/contact"
              className="flex xl:mx-5 mx-2 hover:text-blue duration-300"
            >
              ارتباط با ما
            </Link>

            <Link
              href="/blog"
              className="flex xl:mx-5 mx-2 hover:text-blue duration-300"
            >
              وبلاگ
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between md:w-auto w-full">
          <div className="relative">
            <input
              type="text"
              className="border border-borderColor py-2 lg:py-3 px-4 bg-backgroundBlack rounded-lg lg:w-80 sm:w-60 w-48"
              placeholder="اینجا بگردید"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <button
              className="absolute left-3 top-3 lg:top-4"
              onClick={() => push(`/nft?q=${searchTerm}`)}
            >
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
              className="rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10  justify-center items-center lg:hidden flex"
              onClick={() => setShowMenu(true)}
            >
              <CiMenuBurger className="text-xl" />
            </button>

            <Link
              href="/create-nft"
              className="rounded-full text-white hover:bg-gray-200 duration-300 bg-blue sm:w-12 w-8 sm:h-12 h-6 justify-center items-center lg:flex hidden"
              onClick={() => setShowMenu(true)}
            >
              <FaPlus className="sm:text-xl" />
            </Link>

            <button
              className={`rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10  justify-center items-center ${
                session ? `lg:flex hidden` : `hidden`
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
        <div className="lg:hidden fixed top-0 left-0 bg-[#242435] text-white border-r-2 border-borderColor min-h-screen">
          <div className="p-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              <button
                className="mt- rounded-full border border-borderColor w-8 h-8 flex justify-center items-center"
                onClick={() => setShowMenu(false)}
              >
                X
              </button>
              <Link
                href="/nft"
                className=" pb-5 text-center border-b border-borderColor hover:text-blue duration-300"
              >
                فروشگاه
              </Link>
              <Link
                href="/about"
                className=" pb-5 text-center border-b border-borderColor hover:text-blue duration-300"
              >
                درباره ما
              </Link>
              <Link
                href="/contact"
                className=" pb-5 text-center border-b border-borderColor hover:text-blue duration-300"
              >
                ارتباط با ما
              </Link>
              <Link
                href="/create-nft"
                className=" pb-5 text-center border-b border-borderColor hover:text-blue duration-300"
              >
                افزودن ان اف تی
              </Link>

              <Link
                href="/blog"
                className=" pb-5 text-center border-b border-borderColor hover:text-blue duration-300"
              >
                وبلاگ
              </Link>
              <button
                className=" pb-5 text-center border-b border-borderColor hover:text-blue duration-300"
                onClick={() => signOut()}
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
