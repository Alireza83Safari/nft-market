"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
  limit,
}) => {
  const { push } = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    if (isMounted) {
      push(`${basePath}?page=${1}&limit=${12}`);
    }
    setIsMounted(true);
  }, [isMounted]);

  return (
    <div className="flex justify-center mt-16">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link key={index} href={`${basePath}?page=${index + 1}&limit=${limit}`}>
          <p
            className={`p-2 w-10 h-10 flex justify-center items-center font-bold mx-2 ${
              +currentPage === index + 1
                ? "bg-blue text-white"
                : "bg-gray-200 hover:bg-gray-300"
            } rounded-md`}
          >
            {index + 1}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
