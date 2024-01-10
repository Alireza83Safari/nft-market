import User from "@/models/user";
import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const users = await User.find({}, "-__v -password");

    if (users) {
      return NextResponse.json(users);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
