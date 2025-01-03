import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { SafeUser } from "@/types/SafeUser";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartProducts: CartProductType[] | null;
  cartTotalAmount: number;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveItemFromCart: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) => void;
  currentUser: SafeUser | null;
};
export const CartContext = createContext<CartContextType | null>(null);

type Props = {
  [propName: string]: any;
};

export const CartContextProvider = (props: Props) => {
  // const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartItems");
    const updateCartProducts: CartProductType[] | null = JSON.parse(cartItems);
    const updatePaymentIntent: any = localStorage.getItem("paymentIntent");
    const paymentIntent: string | null = JSON.parse(updatePaymentIntent);

    setCartProducts(updateCartProducts);
    setPaymentIntent(paymentIntent);
  }, []);

  const cartItemsHERE: any = localStorage.getItem("cartItems");
  // const cartItemsTest: CartProductType[] | null = JSON.parse(cartItemsHERE);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price;

            acc.total += itemTotal;

            return acc;
          },
          {
            total: 0,
          }
        );

        setCartTotalAmount(total);
      }
    };

    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = (product) => {
    if (!cartProducts) {
      localStorage.setItem("cartItems", JSON.stringify([product]));
      setCartProducts([product]);
      return toast.success("Added to cart!");
    }
    const updatedState = [...cartProducts, product];
    localStorage.setItem("cartItems", JSON.stringify([...updatedState]));

    setCartProducts(updatedState);
    return toast.success("Added to cart!");
  };

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    localStorage.setItem("cartItems", JSON.stringify(null));
  }, [cartProducts]);

  const handleSetPaymentIntent = useCallback(
    (val: string | null) => {
      setPaymentIntent(val);
      localStorage.setItem("paymentIntent", JSON.stringify(val));
    },
    [paymentIntent]
  );

  const handleRemoveItemFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProducts);
        toast.success("Removed from cart");
        localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
      }
    },
    [cartProducts]
  );

  const value = {
    cartProducts,
    handleAddProductToCart,
    handleRemoveItemFromCart,
    handleClearCart,
    cartTotalAmount,
    paymentIntent,
    handleSetPaymentIntent,
    currentUser: props.currentUser,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
