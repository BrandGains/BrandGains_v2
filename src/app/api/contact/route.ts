import connect from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import Contact from "@/app/models/contactModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, projectdescription } = reqBody;

    const newContact = await Contact.create({
      name,
      email,
      projectdescription,
    });

    if (newContact) {
      return NextResponse.json({
        message: "Contact Saved Successfully",
        success: true,
        newContact,
      });
    } else {
      return NextResponse.json({
        message: "Failed to save contact",
        success: false,
      });
    }
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
