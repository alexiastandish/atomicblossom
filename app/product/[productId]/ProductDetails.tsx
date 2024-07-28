'use client'

import Button from '@/app/components/Button'
import ProductImage from '@/app/components/products/ProductImage'
import { useCart } from '@/hooks/useCart'
import { Rating } from '@mui/material'
import React, { useState } from 'react'

type ProductDetailsProps = {
    product: any
}

export type CartProductType = {
    id: string
    name: string
    description: string
    category: string
    brand: string
    selectedImg: SelectedImgType
    quantity: number
    price: number
}

export type SelectedImgType = {
    color: string
    colorCode: string
    image: string
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2"></hr>
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductToCart, cartProducts } = useCart()
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    })

    const productRating = product.reviews.reduce(
        (acc: number, curr: any, i) => {
            return curr.rating + acc / product.reviews.length
        },
        0
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">
                    {product.name}
                </h2>

                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div className="">{product.reviews.length} reviews</div>
                </div>
                <Horizontal />
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div className="">
                    <span className="font-semibold">CATEGORY:</span>{' '}
                    {product.category}
                </div>
                <div className="">
                    <span className="font-semibold">BRAND:</span>{' '}
                    {product.brand}
                </div>
                <div
                    className={
                        product.inStock ? 'text-teal-400' : 'text-rose-400'
                    }
                >
                    {product.inStock ? 'In stock' : 'Out of Stock'}
                </div>
                {/* TODO: COMEBACK */}
                {/* <Horizontal />
                <div className="">color</div>
                <Horizontal />
                <div className="">quantity</div> */}
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button
                        label="Add To Cart"
                        onClick={() => console.log('hi')}
                    />
                </div>
            </div>
        </div>
    )
}
export default ProductDetails
