import React from "react";
import Lottie from "react-lottie";
import animationData from "./../assets/loader.json";
export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={200} width={200} />
    </>
  );
}
