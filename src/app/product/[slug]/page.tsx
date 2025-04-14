import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import product from "@/data/book";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const currentProduct = product.find(
    (item) =>
      item.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "") === slug
  );

  if (!currentProduct) {
    return {
      title: "Product Not Found",
      description: "No product found with this name.",
    };
  }

  return {
    title: currentProduct.name,
    description: currentProduct.description,
    openGraph: {
      title: currentProduct.name,
      description: currentProduct.description,
      url: `https://menucha.co.ke/product/${slug}`,
      type: "website", 
      siteName: "Menucha Crafts",
      images: [
        {
          url: currentProduct.image,
          width: 800,
          height: 600,
          alt: currentProduct.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentProduct.name,
      description: currentProduct.description,
      images: currentProduct.image,
    },
  };
}

export default async function ProductPage(props: Props) {
  const params = await props.params;
  const slug = params.slug;

  const productData = product.map((item) => ({
    ...item,
    slug: item.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, ""),
  }));

  const currentProduct = productData.find((item) => item.slug === slug) || null;
  const otherProducts = productData.filter((item) => item.slug !== slug);

  return (
    <ProductDetailClient
      product={currentProduct}
      otherProducts={otherProducts}
    />
  );
}
