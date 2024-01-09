"use client";
import { useState } from "react";
import { loginSchema } from "@/validator/client/login";
import { LoginErrorType, LoginType } from "@/types/auth.type";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Link from "next/link";
import toast from "react-hot-toast";
import FormSpinner from "@/components/FormSpinner/FormSpinner";

const initialState = {
  id: "",
  email: "",
  password: "",
};

export default function page() {
  const { data: session } = useSession();

  const { push } = useRouter();

  const [errors, setErrors] = useState<Partial<LoginErrorType>>({});
  const [isLoading, setLoading] = useState(false);
  const [userInfos, setUserInfos] = useState<LoginType>(initialState);

  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfos({
      ...userInfos,
      [name]: value,
    });
  };

  const userLoginHandler = async () => {
    setLoading(true);
    const response = await fetch(`api/login`, {
      method: "POST",
      body: JSON.stringify(userInfos),
    });

    const data = await response.json();
    if (response.status !== 200) {
      setErrors(data);
      setLoading(false);
    }

    if (response.status === 200) {
      setUserInfos({ ...userInfos, id: data?._id });

      signIn("credentials", {
        ...userInfos,
        redirect: false,
      }).then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials!");
        }
        if (callback?.ok) {
          toast.success("ورود موفقیت آمیز بود");
          push("/");
        }
      });
      setLoading(false);
    }
  };

  const isFormValid = async () => {
    setLoading(true);
    try {
      const isValid = await loginSchema.validate(userInfos, {
        abortEarly: false,
      });

      if (isValid) {
        userLoginHandler();
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
        <div className="mx-auto text-gray-200 container sm:px-12 px-2 flex justify-center mt-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border-2 border-borderColor w-[24rem] sm:p-7 p-4 bg-[#1E1E2B] rounded-lg"
          >
            <h2 className="sm:text-3xl text-xl text-white font-black text-center">
              ورود به سیستم
            </h2>
            <p className="text-sm text-red-500 text-center">
              {errors?.message}
            </p>
            <div className="my-9">
              <Input
                label="آدرس ایمیل"
                name="email"
                onChange={setInputValue}
                value={userInfos.email}
                onfocus={() => setErrors(initialState)}
                error={errors?.email}
              />
            </div>
            <div className="my-9">
              <Input
                label="گذرواژه"
                name="password"
                onChange={setInputValue}
                value={userInfos.password}
                onfocus={() => setErrors(initialState)}
                error={errors?.password}
              />
            </div>

            <div className="text-white mt-12 min-w-full grid grid-cols-2">
              <button
                className="bg-blue p-3 rounded-lg duration-300 sm:text-base text-sm hover:bg-[#212E48]"
                onClick={isFormValid}
              >
                {isLoading ? <FormSpinner /> : `ورود به سیستم`}
              </button>
              <Link
                href="/register"
                className="p-3 bg-[#212E48] hover:bg-blue rounded-lg mr-5 duration-300 sm:text-base text-sm text-center"
              >
                ثبت نام
              </Link>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
}
