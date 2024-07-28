import { CartProductType } from '@/app/product/[productId]/ProductDetails'
import { createContext, useContext, useState } from 'react'

type CartContextType = {
    cartTotalQty: number
    cartProducts: CartProductType[] | null
    handleAddProductToCart: (product) => void
}
export const CartContext = createContext<CartContextType | null>(null)

type Props = {
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
        null
    )
    const value = { cartTotalQty, cartProducts }
    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === null) {
        throw new Error('useCart must be used within a CartContextProvider')
    }

    return context
}
