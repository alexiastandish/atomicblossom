"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/helpers/formatPrice";
import { useRouter } from "next/navigation";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount, currentUser } =
    useCart();
  const router = useRouter();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="">Your Cart is empty</div>
        <div className="">
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            Start shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Heading title="Shopping Cart" />
      <div className="grid grid-col-5 text-xs gap-4 pb-2">
        <div className="col-span-2 justify-self-start"></div>
        <div className="">
          {cartProducts &&
            cartProducts.map((item) => {
              return <ItemContent key={item.id} item={item} />;
            })}
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculate at checkout
          </p>
          <Button
            label={true ? "Checkout" : "Login To Checkout"}
            outline={true ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : router.push("/login");
            }}
          />
          <Link
            href={"/"}
            className="
          text-slate-500 flex items-center gap-1
          mt-2
          "
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
          <div className="w-[90px]">
            <Button
              label="Clear Cart"
              onClick={() => {
                handleClearCart();
              }}
              small
              outline
            />
          </div>
          {/* <div className="text-sm flex flex-col gap-1 items-start">
            <div className="flex justify-between w-full text-base font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotalAmount)}</span>
            </div>
            <p className="text-slate-500">
              Taxes and shipping calculate at checkout
            </p>
            <Button
              label={currentUser ? "Checkout" : "Login To Checkout"}
              outline={currentUser ? false : true}
              onClick={() => {
                currentUser ? router.push("/checkout") : router.push("/login");
              }}
            />
            <Link
              href={"/"}
              className="
          text-slate-500 flex items-center gap-1
          mt-2
          "
            >
              <MdArrowBack />
              <span>Continue Shopping</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CartClient;
