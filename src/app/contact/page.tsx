import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Image from "next/image";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaHeadphonesAlt } from "react-icons/fa";

export default async function page() {
  const data = [
    {
      icon: <FaHeadphonesAlt className="text-blue text-5xl" />,
      title: `شماره تماس تلفن`,
      phone1: `+444 555 666 777`,
      phone2: `+222 222 222 333s`,
    },
    {
      icon: <CiMail className="text-blue text-5xl" />,
      title: `آدرس ایمیل ما`,
      phone1: `admin@gmail.com`,
      phone2: `example@gmail.com`,
    },
    {
      icon: <CiLocationOn className="text-blue text-5xl" />,
      title: `مکان ما`,
      phone1: `5678 جاده اصلی تهران، شهرستانها 580`,
      phone2: `تهران ، نمونه 54786`,
    },
  ];
  return (
    <>
      <Header />

      <div className="text-white my-10">
        <p className="text-center text-3xl font-semibold">تماس با ما</p>
        <div className="text-center">
          <h1 className="text-6xl font-bold my-9">آدرس تماس سریع</h1>
          <p className="text-gray-200">
            تغییرهای زیادی از معابر لورم ایپسوم موجود است،
            <br /> اما اکثریت دچار تغییر شده اند.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 mt-32">
          {data.map((item) => (
            <div className="border border-borderColor bg-[#1C1C29] lg:mx-7 md:mx-3 sm:mx-1 rounded-lg p-7 sm:my-0 my-5">
              {item.icon}
              <h2 className="text-2xl font-bold my-3">{item.title}</h2>
              <p className="my-2">{item.phone1}</p>
              <p>{item.phone2}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 mt-32">
          <div>
            <Image
              src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1705077913/contact1_ke91yh.png"
              width={1000}
              height={1000}
              alt="contact"
              className="min-w-full"
            />
          </div>
          <div className="border border-borderColor p-7 mx-5 rounded-lg">
            <h2 className="text-4xl font-bold">با ما تماس بگیرید</h2>
            <div className="mt-10">
              <Input label="نام شما" />
            </div>
            <div className="mt-10">
              <Input label="تلفن" />
            </div>
            <div className="mt-10">
              <Input label="ایمیل" />
            </div>
            <div className="mt-10">
              <Input label="نوشتن پیام" />
            </div>

            <button className="text-white bg-blue px-8 rounded-lg mt-10 py-3">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
