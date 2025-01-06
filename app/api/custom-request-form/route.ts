import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("body", body);

  const currentUser = await getCurrentUser();

  // id         String              @id @default(auto()) @map("_id") @db.ObjectId
  // userId     String              @db.ObjectId
  // createDate DateTime            @default(now())
  // content    CustomRequestData
  // status     CustomRequestStatus @default(UNFULFILLED)
  // address    Address?
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // const customRequestSubmission = await prisma.customRequestSubmission.create({
    //   userId: currentUser.id, content: formData, address:
    // })
    // return NextResponse.json(user);
    // const emailResponse = await client.messages
    //   .create(MAILGUN_DOMAIN, {
    //     from: "Excited User <mailgun@YOUR-SANDBOX-DOMAIN>",
    //     to: ["test@example.com"],
    //     subject: "Hello",
    //     text: "Testing some Mailgun awesomness!",
    //     html: "<h1>Testing some Mailgun awesomness!</h1>",
    //   })
    // const body = await request.json();
    // const { items, payment_intent_id } = body;
  } catch (error) {
    console.log("error", error);
    throw new Error("Something went wrong :/");
  }
}

// export async function POST(request: Request) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   return Response.json({ name, email });
// }
