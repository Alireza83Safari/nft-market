"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CldUploadButton } from "next-cloudinary";

export default function ImageUpload({ id }: { id: string }) {
  const { push } = useRouter();
  
  const handleUpload = useCallback(async (result: any) => {
    const data = {
      image: result?.info?.secure_url,
    };
    if (result?.event === "success") {
      const response = await fetch(`/api/nft/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (response?.status === 200) {
        toast.success("آپلود عکس با موفقیت انجام شد");
        push("/home");
      }
    }
  }, []);

  return (
    <div className="mx-auto col-span-3 mt-12 border border-borderColor sm:max-w-[30vw] p-8">
      <h1 className="text-2xl text-center text-white">آپلود عکس خودرو</h1>
      <div className="flex justify-center mt-20">
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
        >
          <button className=" w-full bg-blue py-3 rounded-lg min-w-[10rem]">
            آپلود
          </button>
        </CldUploadButton>
      </div>
    </div>
  );
}
