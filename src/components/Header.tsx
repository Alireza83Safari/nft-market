"use client";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaUser, FaX } from "react-icons/fa6";

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

  const handleSearch = () => {
    if (searchTerm) {
      push(`/nft?q=${searchTerm}`);
    }
  };

  const url = usePathname();
  const isActive = (pageHref: string) => {
    if (url?.includes(pageHref)) {
      return true;
    } else {
      return false;
    }
  };

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

          <div
            className={`lg:flex block items-center lg:relative absolute left-0 top-0 bottom-0 text-center font-semibold lg:bg-transparent bg-black lg:min-h-auto lg:w-auto w-[8rem] min-h-[100vh] ${
              showMenu ? "lg:flex block" : "lg:flex hidden"
            }`}
          >
            <button
              className=" absolute left-28 top-2 text-red-500"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaX />
            </button>
            <Link
              href="/home"
              className={`flex xl:mx-5 lg:mx-2 hover:text-blue duration-300 lg:justify-normal justify-center lg:py-0 py-3 ${
                isActive("home") && `text-blue`
              }`}
            >
              خانه
            </Link>

            <Link
              href="/nft"
              className={`flex xl:mx-5 lg:mx-2 hover:text-blue duration-300 lg:justify-normal justify-center lg:py-0 py-3 ${
                isActive("nft") && `text-blue`
              }`}
            >
              فروشگاه
            </Link>

            <Link
              href="/about"
              className={`flex xl:mx-5 lg:mx-2 hover:text-blue duration-300 lg:justify-normal justify-center lg:py-0 py-3 ${
                isActive("about") && `text-blue`
              }`}
            >
              درباره ما
            </Link>

            <Link
              href="/contact"
              className={`flex xl:mx-5 lg:mx-2 hover:text-blue duration-300 lg:justify-normal justify-center lg:py-0 py-3 ${
                isActive("contact") && `text-blue`
              }`}
            >
              ارتباط با ما
            </Link>

            <Link
              href="/blog"
              className={`flex xl:mx-5 lg:mx-2 hover:text-blue duration-300 lg:justify-normal justify-center lg:py-0 py-3 ${
                isActive("blog") && `text-blue`
              }`}
            >
              وبلاگ
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between md:w-auto w-full">
          <div className="relative">
            <input
              type="text"
              className="border border-borderColor py-2 lg:py-3 px-4 bg-backgroundBlack rounded-lg lg:w-80 sm:w-60 w-48 outline-none"
              placeholder="اینجا بگردید"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button
              className="absolute left-3 top-3 lg:top-4"
              onClick={() => handleSearch()}
            >
              <FaSearch className="text-lg" />
            </button>
          </div>
          <div className="flex items-center sm:gap-x-5 gap-x-1 sm:mr-5 mr-2">
            {(session as any)?.id && (
              <Link
                href="/profile"
                className="rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10 flex justify-center items-center"
              >
                <FaUser className="text-xl" />
              </Link>
            )}

            <button
              className="rounded-full border border-borderColor sm:w-12 w-10 sm:h-12 h-10 justify-center items-center lg:hidden flex"
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
    </header>
  );
};

export default Header;
