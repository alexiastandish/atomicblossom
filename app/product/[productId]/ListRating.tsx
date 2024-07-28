'use client'
import Heading from '@/app/components/Heading'
import React from 'react'
import { DateTime } from 'luxon'
import { Rating } from '@mui/material'
import Avatar from '@/app/components/Avatar'

type ListingRatingProps = {
    product: any
}
const ListRating: React.FC<ListingRatingProps> = ({ product }) => {
    console.log('product', product)
    return (
        <div>
            <Heading title="Product Review" />
            <div className="text-sm mt-2">
                {product.reviews?.map((rev: any) => {
                    console.log('rev', rev)
                    const revDate = rev?.createdDate
                        ? DateTime.fromISO(rev?.createdDate).toRelative()
                        : null
                    console.log('revDate', revDate)

                    return (
                        <div key={rev.id} className="max-w-[300px]">
                            <div className="">
                                <Avatar src={rev?.user?.image} />
                                <div className="">{rev?.user.name}</div>
                                <div className="">{revDate}</div>
                            </div>
                            <div className="mt-2">
                                <Rating value={rev.rating} readOnly />
                                <div className="ml-2">{rev.comment}</div>
                                <hr className="mt-4 mb-4" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ListRating
