"use client";
import { useState } from "react";
import { RegisterErrorType, RegisterType } from "@/types/auth.type";
import { registerSchema } from "@/validator/client/register";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Link from "next/link";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner/Spinner";
import FormSpinner from "@/components/FormSpinner/FormSpinner";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export default function page() {
  const { data: session } = useSession();
  const [userInfos, setUserInfos] = useState<RegisterType>(initialState);
  const [errors, setErrors] = useState<Partial<RegisterErrorType>>({});
  const [isLoading, setLoading] = useState(false);
  const { push } = useRouter();

  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfos({
      ...userInfos,
      [name]: value,
    });
  };

  const registerHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/register`, {
      method: "POST",
      body: JSON.stringify(userInfos),
    });
    const data = await res.json();

    if (res.status !== 200) {
      setErrors(data);
      setLoading(false);
    }

    if (res.status === 200) {
      toast.success("ساخت حساب کاربری موفقیت آمیز بود");
      push("/login");
      setLoading(false);
    }
  };

  const isFormValid = async () => {
    setLoading(true);
    try {
      const isValid = await registerSchema.validate(userInfos, {
        abortEarly: false,
      });

      if (isValid) {
        registerHandler();
      }
    } catch (error) {
      let errors = (error as any).inner.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {}
      );
      setErrors(errors);
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      {session ? (
        <>{push("/")}</>
      ) : (
        <div className="m-auto text-gray-200 container sm:px-12 px-2 flex justify-center mt-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border-2 border-borderColor w-[24rem] sm:p-7 p-4 bg-[#1E1E2B] rounded-lg"
          >
            <h2 className="text-3xl text-white font-black text-center">
              ثبت نام
            </h2>
            <p className="text-sm text-red-500 text-center mt-5">
              {errors?.message}
            </p>
            <div className="my-5">
              <Input
                label="نام"
                name="firstname"
                onChange={setInputValue}
                value={userInfos.firstname}
                error={errors?.firstname}
              />
            </div>
            <div className="my-5">
              <Input
                label="نام خانوادگی"
                name="lastname"
                onChange={setInputValue}
                value={userInfos.lastname}
                error={errors?.lastname}
              />
            </div>
            <div className="my-5">
              <Input
                label="آدرس ایمیل"
                name="email"
                onChange={setInputValue}
                value={userInfos.email}
                error={errors?.email}
              />
            </div>
            <div className="my-5">
              <Input
                label="رمز عبور"
                name="password"
                onChange={setInputValue}
                value={userInfos.password}
                error={errors?.password}
              />
            </div>

            <div className="text-white mt-9 grid grid-cols-2">
              <button
                className="bg-blue hover:bg-[#212E48] p-3 rounded-lg duration-300"
                onClick={isFormValid}
              >
                {isLoading ? <FormSpinner /> : "ثبت نام"}
              </button>
              <Link
                className="p-3 bg-[#212E48] hover:bg-blue mr-5 rounded-lg duration-300 text-center"
                href="/login"
              >
                ورود
              </Link>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
}
