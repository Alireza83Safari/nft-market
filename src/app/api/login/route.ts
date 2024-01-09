import User from "@/models/user";
import connectToDB from "@/utils/db";
import loginValidator from "@/validator/server/login";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { email, password } = await req.json();
    const validationResult = await loginValidator({ email, password });

    if (validationResult?.length) {
      return NextResponse.json({ error: validationResult }, { status: 422 });
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return NextResponse.json({ message: "ایمیل یافت نشد" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (isPasswordCorrect) {
      return NextResponse.json(foundUser, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "رمزعبور اشتباه است" },
        { status: 409 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
