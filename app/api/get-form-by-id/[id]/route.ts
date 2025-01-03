import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  try {
    const dndForm = await prisma.dndForm.findFirst({
      where: { id: params.id },
    });
    return NextResponse.json(dndForm);
  } catch (err) {
    return NextResponse.error();
  }
}
