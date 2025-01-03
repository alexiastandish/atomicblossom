import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
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
