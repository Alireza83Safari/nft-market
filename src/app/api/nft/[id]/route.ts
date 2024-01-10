import Nft from "@/models/nft";
import connectToDB from "@/utils/db";
import nftValidator from "@/validator/server/nft";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!isValidObjectId(params.id)) {
      return NextResponse.json(
        { message: "شناسه معتبر نیست" },
        { status: 400 }
      );
    }

    const nfts = await Nft.findOne({ _id: params.id }, "-__v")
      .populate("proposals", "-__v")
      .lean();
    return NextResponse.json(nfts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await req.json();

    if (!isValidObjectId(params.id)) {
      return NextResponse.json(
        { message: "شناسه معتبر نیست" },
        { status: 400 }
      );
    }

    const validatorResult = nftValidator(data);

    if (!validatorResult) {
      return NextResponse.json({ message: validatorResult }, { status: 422 });
    }

    const editNft = await Nft.findByIdAndUpdate(params.id, data);

    if (editNft) {
      return NextResponse.json(
        { message: "ویرایش با موفقیت انجام شد" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!isValidObjectId(params.id)) {
      return NextResponse.json(
        { message: "شناسه معتبر نیست" },
        { status: 400 }
      );
    }

    const nfts = await Nft.findOneAndDelete({ _id: params.id });
    if (nfts) {
      return NextResponse.json({ message: "حذف با موفقیت انجام شد" });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
