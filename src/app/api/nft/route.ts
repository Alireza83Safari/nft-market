import Nft from "@/models/nft";
import connectToDB from "@/utils/db";
import nftValidator from "@/validator/server/nft";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const validatorResult = nftValidator(data);

    if (!validatorResult) {
      NextResponse.json({ error: validatorResult }, { status: 422 });
    }

    const titleExist = await Nft.findOne({ title: data.title });
    if (titleExist) {
      return NextResponse.json(
        { message: "عنوان از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const createNft = await Nft.create(data);
    if (!createNft) {
      return NextResponse.json(
        { message: "ساخت کاربر با خطا مواجه شد" },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { message: "ساخت nft موفقیت آمیز بود" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const nfts = await Nft.find({});
    return NextResponse.json(nfts);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
