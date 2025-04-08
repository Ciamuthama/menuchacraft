/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams } from "next/navigation";
import product from "@/data/book";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Didact_Gothic } from "next/font/google";
import Modal from "react-modal";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const inter = Didact_Gothic({ weight: "400", subsets: ["latin"] });

export default function ProductDetail() {
  const [countProduct, setCountProduct] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [delivery, setDelivery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<
    {
      id: number;
      name: string;
      price: number;
      description: string;
      image: string;
      image_details: string[];
    }[]
  >([]);

  useEffect(() => {
    setProductData(product);
  }, []);
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : null;

  const currentProduct =
    productId !== null
      ? productData.find((item) => item.id === productId)
      : null;
  const otherProducts =
    productId !== null
      ? productData.filter((item) => item.id !== productId)
      : [];
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % currentProduct.image_details.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentProduct.image_details.length) %
        currentProduct.image_details.length
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="absolute z-100 bg-background text-white top-0 bottom-0 w-screen loading" />
    );
  }

  return (
    <div className="mx-2 mt-20 relative animate-fade-down animate-once animate-delay-[1000ms] ">
      {currentProduct ? (
        <div className="flex lg:items-start lg:flex-row flex-col justify-center gap-5 lg:w-[50rem] md:w-[40rem] mx-auto">
          <div className="flex flex-row-reverse items-center justify-center mx-auto">
            <div className="relative flex items-center">
              <div className="flex justify-baseline items-start overflow-hidden mx-auto">
                <img
                  src={currentProduct.image_details[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="transition-transform duration-500 ease-in-out relative mask-b-from-20% mask-b-to-80%"
                />
              </div>

              <button
                title="Previous Slide"
                className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-foreground text-white p-2 rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeftIcon className="size-4 text-white" />
              </button>
              <button
                title="Next Slide"
                className="absolute top-1/2 right-1 transform -translate-y-1/2  bg-foreground text-white p-2 rounded-full"
                onClick={nextSlide}
              >
                <ChevronRightIcon className="size-4 text-white" />
              </button>
            </div>
          </div>

          <div className="flex flex-col ga-1">
            <h1 className={`${inter.className} !font-medium text-2xl`}>
              {currentProduct.name}
            </h1>
            <p className={`${inter.className} text-wrap`}>
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
                  className={`bg-foreground text-white px-3 py-3 rounded-md ${inter.className} w-[10rem]`}
                  onClick={() => setIsModalOpen(true)}
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="mt-10">
              <h3 className={`${inter.className} text-lg !font-medium`}>
                How to Place your order
              </h3>
              <ul className="flex flex-col gap-1">
                <li className={`${inter.className} text-base`}>
                  🌿 Pick a product
                </li>
                <li className={`${inter.className} text-base`}>
                  🌿 Select the Quantity
                </li>
                <li className={`${inter.className} text-base`}>
                  🌿 Checkout by filling in your details
                </li>
                <li className={`${inter.className} text-base`}>
                  🌿 Continue the order on WhatsApp
                </li>
              </ul>
            </div>
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(!isModalOpen)}
            className="flex items-center justify-center gap-5 lg:w-[30rem] mx-auto h-full my-auto"
            ariaHideApp
          >
            <div className="rounded shadow flex flex-col items-center justify-center gap-5 lg:w-[25rem] md:w-[20rem] w-[20rem] mx-auto relative bg-background px-5 py-12">
              <h2>Order Confirmation</h2>
              <form
                className="flex flex-col items-center justify-center gap-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!fullName.trim() || !delivery.trim()) {
                    alert("Please fill in all the required fields.");
                    return;
                  }
                  location.href = `https://wa.me/254718797291?text=Hello Menucha Crafts, this is ${fullName} can I get ${countProduct} copy of ${currentProduct.name}, need it delivered to ${delivery}, thank you`;
                }}
              >
                <div className="relative mb-5">
                  <input
                    id="username"
                    name="username"
                    required={true}
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
                    required={true}
                    type="text"
                    placeholder=""
                    value={delivery}
                    onChange={(e) => {
                      setDelivery(e.target.value);
                    }}
                    className="capitalize border-b border-foreground py-1 focus:border-b-2 focus:border-foreground transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    htmlFor="delivery"
                    className={`${inter.className} absolute -top-4 text-sm left-0`}
                  >
                    Delivery Details
                  </label>
                </div>

                <button
                  type="submit"
                  className={`bg-foreground text-white px-12 py-3 rounded-md ${inter.className} w-[15rem]`}
                >
                  Place Order
                </button>
                <button
                  type="button"
                  className={`bg-red-400 text-white px-12 py-3 rounded-md ${inter.className} w-[15rem]`}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </Modal>
        </div>
      ) : (
        <p>Product not found.</p>
      )}

      <div className="mb-10">
        <h2
          className={`${inter.className} text-center text-xl !font-semibold mt-10`}
        >
          You may also like
        </h2>
        <div className="flex flex-wrap  mx-auto w-full items-center justify-center gap-10">
          {otherProducts.map((item) => (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
            >
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
    </div>
  );
}
