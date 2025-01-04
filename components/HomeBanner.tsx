import Image from "next/image";
import React from "react";
import Container from "./Container";

const HomeBanner = () => {
  return (
    <div className="bg-hero-pattern w-full h-[90vh] bg-cover bg-center hero min-h-[90vh] relative">
      {/* <div className="hero bg-base-200 min-h-screen"> */}
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/images/hero-logo-white.png"
          alt="welcome to atomic blossom"
          width="0"
          height="0"
          sizes="100vw"
          className="w-3/6 h-auto"
        />
        <Image
          src="/images/home-hero-img.png"
          alt="necklaces"
          width="0"
          height="0"
          sizes="100vw"
          className="w-3/6 h-[100%]"
        />
      </div>
      <div
        className="bg-white absolute bottom-0 w-screen h-10 z-3"
        style={{
          background: "linear-gradient(to top, white 20%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default HomeBanner;
