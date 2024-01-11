"use client";

import React from "react";
import Input from "@/components/Input";
import toast from "react-hot-toast";
import ImageUpload from "./UploadImage";
import { useFormState, useFormStatus } from "react-dom";
import { useSession } from "next-auth/react";
import { createNft } from "@/actions/actions";

export default function CreateNftForm() {
  const { data: session } = useSession();
  const [showUpload, setShowUpload] = React.useState(false);
  const initialState = {
    message: "",
    status: null,
  } as any;
  const [state, formAction] = useFormState(createNft, initialState);

  React.useEffect(() => {
    if (state?.message) {
      if (state.status !== 201) {
        toast.error(state.message);
      } else {
        setShowUpload(true);
        toast.success("ان اف تی با موفقیت ساخته شد");
      }
    }
  }, [state]);

  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <div className="sm:px-5 px-1 min-h-screen xl:container mx-auto">
      {showUpload ? (
        <ImageUpload id={state.message} />
      ) : (
        <form action={formAction} className="md:mx-32 sm:mx-20 mx-5 mt-12">
          <input type="hidden" value={(session as any)?.id} name="author" />
          <div className="mt-7">
            <Input
              label="نام محصول"
              placeholder="به عنوان مثال 'بازی دیجیتال'"
              name="title"
            />
          </div>

          <div className="mt-7">
            <Input
              label="قیمت کالا به دلار"
              placeholder="مثلاً `2 هزار دلار`"
              name="price"
              type="number"
            />
          </div>

          <div className="mt-7">
            <Input
              label="شرح"
              placeholder="به عنوان مثال، `پس از خرید محصول، می توانید مورد را دریافت کنید...`"
              className="py-7"
              name="description"
            />
          </div>

          <button className="bg-blue hover:bg-gray-200 duration-300 min-w-full py-3 rounded-lg mt-10 text-white">
            ارسال مورد
          </button>
        </form>
      )}
    </div>
  );
}
