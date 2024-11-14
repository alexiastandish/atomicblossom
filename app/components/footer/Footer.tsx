import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Collections</h3>
            <Link href="#">Shelves</Link>
            <Link href="#">Jewlery</Link>
            <Link href="#">Tables</Link>
            <Link href="#">Misc</Link>
            <Link href="#">Shop All</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns and Exhange Policy</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Custom Creations</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">lorem ipsum</p>
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Atomic Blossom. All rights
              reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Social</h3>
            <div className="flex gap=2">
              <Link href="#">
                <AiFillFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillTikTok size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
