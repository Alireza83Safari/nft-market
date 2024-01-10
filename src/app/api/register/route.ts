import User from "@/models/user";
import connectToDB from "@/utils/db";
import registerValidator from "@/validator/server/register";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validatorResult = registerValidator(data);

    if (validatorResult !==) {
      NextResponse.json({ error: validatorResult }, { status: 422 });
    }

    const isUserExist = await User.findOne({ email: data.email });

    if (isUserExist) {
      return NextResponse.json(
        { message: "کاربر از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(data.password, 12);

    const users = await User.find({});
    const newUser = await User.create({
      ...data,
      password: hashedPassword,
      role: users.length > 0 ? "USER" : "ADMIN",
    });
    if (newUser) {
      return NextResponse.json(
        { message: "کاربر با موفقیت ایجاد شد" },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      for (let field in error.errors) {
        const msg = error.errors[field].message;
        return NextResponse.json({ error: msg, status: 409 });
      }
    } else {
      return NextResponse.json(
        { error: "خطا در پردازش درخواست" },
        { status: 500 }
      );
    }
  }
}
