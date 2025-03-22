"use client";
import { useParams } from "next/navigation";
import product from "@/data/book";
import Link from "next/link";
import React from "react";
import { Domine, Didact_Gothic } from "next/font/google";
import Modal from "react-modal";

const arapey = Domine({
  weight: "400",
  subsets: ["latin"],
});
const inter = Didact_Gothic({ weight: "400", subsets: ["latin"] });

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : null;
  const currentProduct =
    productId !== null ? product.find((item) => item.id === productId) : null;
  const otherProducts =
    productId !== null ? product.filter((item) => item.id !== productId) : [];
  const [countProduct, setCountProduct] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [delivery, setDelivery] = React.useState("");

  return (
    <div className="mx-2 mt-20">
      {currentProduct ? (
        <div className="flex lg:items-start lg:flex-row flex-col justify-center gap-5 lg:w-[70rem] mx-auto">
          <img
            src={currentProduct.image_details}
            alt={currentProduct.name}
            className="lg:w-[40rem] md:w-[35rem] w-[25rem]"
          />
          <div className="flex flex-col ga-1">
            <h1 className={`${inter.className} !font-medium text-2xl`}>
              {currentProduct.name}
            </h1>
            <p className={`${inter.className} text-wrap w-10/12`}>
              {currentProduct.description}
            </p>
            <p className={`${inter.className} !font-semibold text-lg`}>
              KSh {currentProduct.price}.00
            </p>

            <div className="flex gap-5 items-center my-2">
              <div className="flex justify-center items-center border-[1.5px] px-3 py-2 gap-3 border-foreground rounded cursor-pointer w-[5rem]">
                <button
                  type="button"
                  className={`${inter.className} text-xl  w-[5px]`}
                  onClick={() => setCountProduct(countProduct - 1)}
                  disabled={countProduct === 1}
                >
                  -
                </button>
                <span
                  className={`${inter.className} !font-semibold text-base w-[10px]`}
                >
                  {countProduct}
                </span>
                <button
                  type="button"
                  onClick={() => setCountProduct(countProduct + 1)}
                  className={`${inter.className} w-[5px] text-xl`}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className={`bg-foreground text-white px-3 py-2 rounded-md ${inter.className} w-[10rem]`}
                  onClick={() => setIsModalOpen(true)}
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="mt-10">
              <h3>How to Place your order</h3>
              <p></p>
            </div>
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(!isModalOpen)}
            className="flex items-center justify-center gap-5 lg:w-[30rem] mx-auto h-full my-auto"
          >
            <div className="flex flex-col items-center justify-center gap-5 lg:w-[25rem] md:w-[20rem] w-[20rem] mx-auto relative bg-background px-5 py-12">
              <h2>Order Confirmation</h2>
              <form className="flex flex-col items-center justify-center gap-10">
                <div className="relative mb-5">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder=""
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className="capitalize border-b border-foreground py-1 focus:border-b-2 focus:border-foreground transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    htmlFor="username"
                    className={`${inter.className} absolute -top-4 text-sm left-0`}
                  >
                    Name
                  </label>
                </div>
                <div className="relative mt-5">
                  <input
                    title="delivery"
                    id="delivery"
                    name="delivery"
                    type="text"
                    placeholder=""
                    value={delivery}
                    onChange={(e) => {
                      setDelivery(e.target.value);
                    }}
                    className="capitalize border-b border-foreground py-1 focus:border-b-2 focus:border-foreground transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    htmlFor="username"
                    className={`${inter.className} absolute -top-4 text-sm left-0`}
                  >
                    Delivery Details
                  </label>
                </div>

                <button
                  type="button"
                  className={`bg-foreground text-white px-12 py-3 rounded-md ${inter.className} w-[15rem]`}
                  onClick={() =>
                    (location.href = `https://wa.me/254718797291?text=Hello Menucha Crafts, this is ${fullName} can I get ${countProduct} ${currentProduct.name}, delivery to ${delivery}, thank you`)
                  }
                >
                  Place Order
                </button>
                <button type="button" className={`bg-red-400 text-white px-12 py-3 rounded-md ${inter.className} w-[15rem]`} onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </Modal>
        </div>
      ) : (
        <p>Product not found.</p>
      )}

      <h2
        className={`${inter.className} text-center text-xl !font-medium mt-10`}
      >
        You may also like
      </h2>
      <div className="flex flex-wrap  mx-auto w-full items-center justify-center gap-10">
        {otherProducts.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id} className="flex flex-col items-center justify-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-[20rem] object-cover"
            />
            <h3>{item.name}</h3>
            <p>KSh{item.price}.00</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
