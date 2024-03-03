"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const FilterNft = () => {
  const [filterValue, setFilterValue] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (filterValue) {
      searchParams.set("order", filterValue);
      push(`?${searchParams.toString()}`);
    }
  }, [filterValue]);

  return (
    <div>
      <div>
        <select
          className="px-10 outline-none bg-black text-white"
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="">فیلتر بر اساس</option>
          <option value="expensive">گران ترین</option>
          <option value="cheap">ارزان ترین</option>
          <option value="newset">جدیدترین</option>
          <option value="oldest">قدیمی ترین</option>
        </select>
      </div>
    </div>
  );
};

export default FilterNft;
