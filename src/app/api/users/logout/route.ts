import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout SuccessFully",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    console.log(error.message, "Error from sever side");
    return NextResponse.json({ error: error.messgae }, { status: 500 });
  }
}
