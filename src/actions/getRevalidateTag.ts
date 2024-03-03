import { revalidateTag } from "next/cache";

export async function getRevalidateTag(tag: string) {
  revalidateTag(tag);
}
