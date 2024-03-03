import Proposal from "@/models/proposal";
import User from "@/models/user";
import connectToDB from "@/utils/db";
import proposalValidator from "@/validator/server/proposal";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validatorResult = proposalValidator(data);

    if (!validatorResult) {
      return NextResponse.json({ message: validatorResult }, { status: 422 });
    }

    if (!isValidObjectId(data.nft)) {
      return NextResponse.json(
        { message: "شناسه nft معتبر نیست" },
        { status: 400 }
      );
    }

    const createProposal = await Proposal.create(data);

    if (!createProposal) {
      return NextResponse.json(
        { message: "ساخت پیشنهاد با خطا مواجه شد" },
        { status: 422 }
      );
    }

    return NextResponse.json({ message: "ساخت پیشنهاد موفقیت آمیز بود" });
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
    const proposals = await Proposal.find({}, "-__v")
    return NextResponse.json(proposals);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
