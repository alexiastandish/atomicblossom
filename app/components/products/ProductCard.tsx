'use client'

import { truncateString } from '@/utils/truncate-string'
import { formatPrice } from '@/utils/format-price'
import Image from 'next/image'
import { Rating } from '@mui/material'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
    title: string
    image: string
    reviews: string[]
    price: number
    data: any
}

export default function ProductCard({
    title,
    image,
    reviews,
    price,
    data,
}: ProductCardProps) {
    const router = useRouter()
    const productRating = reviews.reduce((acc: number, curr: any, i) => {
        return curr.rating + acc / reviews.length
    }, 0)
    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
        >
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        src={`${image}`}
                        fill
                        unoptimized
                        className="w-full h-full object-contain"
                        alt="product-image"
                    />
                </div>
                <div className="">{truncateString(title, 25)}</div>
                <div className="">
                    <Rating value={productRating} readOnly />
                </div>
                <div className="">{reviews.length} reviews</div>
                <div className="font-semibold">{formatPrice(price)}</div>
            </div>
        </div>
    )
}
