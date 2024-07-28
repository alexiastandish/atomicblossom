import Container from '@/app/components/Container'
import { product } from '@/utils/product'
import ProductDetails from './ProductDetails'
import ListRating from './ListRating'

type IParams = {
    productId?: string
}
export default function Product({ params }: { params: IParams }) {
    // const
    // product
    console.log('params', params)
    const currentProduct = product.filter(
        (product) => product.id === params.productId
    )?.[0]
    console.log('product', product)
    console.log('currentProduct', currentProduct)
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={currentProduct} />
                <div className="flex flex-col mt-20 gap-4">
                    {/* <AddRating product={product} user={user}/> */}
                    <ListRating product={currentProduct} />
                </div>
            </Container>
        </div>
    )
}
