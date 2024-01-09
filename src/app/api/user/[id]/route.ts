import User from "@/models/user";
import connectToDB from "@/utils/db";
import registerValidator from "@/validator/server/register";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "شناسه معتبر نیست" }, { status: 422 });
    }

    const foundUser = await User.findById(params.id, "-__v -password");

    if (!foundUser) {
      return NextResponse.json({ message: "کاربری یافت نشد" }, { status: 404 });
    }
    return NextResponse.json(foundUser);
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

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "شناسه معتبر نیست" }, { status: 422 });
    }

    const validationResult = registerValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    const editUser = await User.findByIdAndUpdate(params.id, data);

    if (editUser) {
      return NextResponse.json(
        { message: "ویرایش کاربر موفقیت آمیز بود" },
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

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "شناسه معتبر نیست" }, { status: 422 });
    }

    const deleteUser = await User.findByIdAndDelete(params.id);

    if (deleteUser) {
      return NextResponse.json(
        { message: "حذف کاربر موفقیت آمیز بود" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "حذف کاربر با خطا مواجه شد" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
