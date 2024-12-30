import Container from "@/app/components/Container";
import { product } from "@/app/utils/helpers/product";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getCurrentProduct from "@/actions/getCurrentProduct";

type IParams = {
  productId?: string;
};
export default async function Product({ params }: { params: IParams }) {
  // const currentProduct = product.filter(
  //   (product) => product.id === params.productId
  // )?.[0];
  const currentProduct = await getCurrentProduct(params.productId);
  console.log("currentProduct", currentProduct);
  return (
    <div className="p-8 hero h-screen">
      {/* <Container> */}
      <ProductDetails product={currentProduct} />
      <div className="flex flex-col mt-20 gap-4">
        {/* <AddRating product={product} user={user}/> */}
        {/* <ListRating product={currentProduct} /> */}
      </div>
      {/* </Container> */}
    </div>
  );
}
