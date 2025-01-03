import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentProduct(id) {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!currentProduct) {
      return null;
    }

    return { ...currentProduct };
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
