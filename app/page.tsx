import Container from './components/Container'
import HomeBanner from './components/HomeBanner'
import ProductCard from './components/products/ProductCard'
import { products } from '../utils/products-old'

export default function Home() {
    console.log('products', products)
    return (
        <div className="p-8">
            <Container>
                <div className="">
                    <HomeBanner />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap:8">
                    {products?.length &&
                        products.map((product: any) => {
                            console.log('HEEERE', product)
                            return (
                                <ProductCard
                                    key={product.id}
                                    title={product.name}
                                    image={product.images?.[0]?.image}
                                    reviews={product.reviews}
                                    price={product.price}
                                    data={product}
                                />
                            )
                        })}
                </div>
            </Container>
        </div>
    )
}
