import NftTemplate from "@/components/Nft/NftTemplate";

const Topsell = () => {
  const datas = [
    { id: 1, name: "پینکن فلوید", image: "/images/client/client-1.png" },
    { id: 2, name: "لینکین پارک", image: "/images/client/client-2.png" },
    { id: 3, name: "سوج گاردن", image: "/images/client/client-3.png" },
    { id: 4, name: "جان ویلیامز", image: "/images/client/client-4.png" },
    { id: 5, name: "ادل", image: "/images/client/client-5.png" },
    { id: 6, name: "ماتلیکا", image: "/images/client/client-6.png" },
    { id: 7, name: "انریکه", image: "/images/client/client-7.png" },
  ];

  return (
    <div className="mt-20 mb-8">
      <p className="text-white text-3xl">بیشترین فروش در 30 روز</p>
      <div className="grid grid-cols-3">
        {datas.map((item) => (
          <NftTemplate  />
        ))}
      </div>
    </div>
  );
};

export default Topsell;
