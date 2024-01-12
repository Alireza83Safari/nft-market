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

    return NextResponse.json({ message: createNft?._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);

    const q = searchParams.get("q");
    const filterExpensive = searchParams.get("expensive");
    const page = parseInt(searchParams.get("page") || "1", 10); // Default to page 1 if not provided
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to limit 10 if not provided

    let nftQuery;

    const skip = (page - 1) * limit;
    const total = await (await Nft.find({})).length;

    switch (true) {
      case !!q:
        nftQuery = await Nft.find({ title: { $regex: q } }, "-__v")
          .skip(skip)
          .limit(limit);
        break;

      case filterExpensive === "true":
        nftQuery = await Nft.find({}, "-__v")
          .sort({ price: filterExpensive === "true" ? -1 : 1 })
          .skip(skip)
          .limit(limit);
        break;

      case filterExpensive === "false":
        nftQuery = await Nft.find({}, "-__v")
          .sort({ price: 1 })
          .skip(skip)
          .limit(limit);
        break;

      default:
        nftQuery = await Nft.find({}, "-__v").skip(skip).limit(limit);
        break;
    }

    return NextResponse.json({ data: nftQuery, total, page, limit });
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
