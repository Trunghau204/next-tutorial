"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-4"> Order Product</h1>
      <button
        className="p-2 rounded-xl bg-amber-200 "
        onClick={handleClick}
      >
        Place order
      </button>
    </>
  );
}
