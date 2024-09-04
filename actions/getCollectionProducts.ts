import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCollectionProducts(collection: string) {
  try {
    const session = await getSession();
    console.log("collection", collection);

    if (!session?.user?.email) {
      return null;
    }

    const currentCollection = await prisma.product.findMany({
      where: {
        collection,
      },
    });

    if (!currentCollection) {
      return null;
    }

    return { products: currentCollection };
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
