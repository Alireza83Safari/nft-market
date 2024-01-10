import Proposal from "@/models/proposal";
import connectToDB from "@/utils/db";
import proposalValidator from "@/validator/server/proposal";
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

    const foundProposal = await Proposal.findOne({ _id: params.id }, "-__v");
    if (!foundProposal) {
      return NextResponse.json(
        { message: "پیشنهادی یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json(foundProposal);
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

    const validatorResult = proposalValidator(data);

    if (!validatorResult) {
      return NextResponse.json({ message: validatorResult }, { status: 422 });
    }

    const editProposal = await Proposal.findByIdAndUpdate(params.id, data);

    if (editProposal) {
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

    const deleteProposal = await Proposal.findByIdAndDelete(params.id);
    if (deleteProposal) {
      return NextResponse.json(
        { message: "حذف پیشنهاد با موفقیت انجام شد" },
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
