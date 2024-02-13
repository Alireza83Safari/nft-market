import { usePathname } from "next/navigation";

export default function usePagination(searchParams) {
  console.log(searchParams);
  const us = usePathname();
  const q = searchParams.get("q");
  console.log(q);
  return searchParams;
}
