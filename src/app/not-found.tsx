"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function page() {
  const { push } = useRouter();
  return (
    <>
      <Header />

      <div className="flex justify-center items-center my-12">
        <div>
          <h1 className="text-9xl font-semibold text-center text-gray-200">
            404
          </h1>
          <h3
            className="text-6xl text-white font-semibold my-4 text-center"
            style={{ lineHeight: "80px" }}
          >
            صفحه پیدا <br />
            نشد!
          </h3>
          <p className="text-gray-200 my-5">صفحه ای که دنبالش هستید یافت نشد</p>
          <button
            className="bg-blue py-3 sm:px-24 px-16 rounded-lg"
            onClick={() => push("/home")}
          >
            بازگشت به خانه
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
