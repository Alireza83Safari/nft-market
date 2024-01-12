"use server";
import { revalidateTag } from "next/cache";

export async function getRevalidateTag(tag: string) {
  "use server";

  revalidateTag(tag);
}
