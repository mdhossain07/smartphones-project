import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { brand, title, images, description, price, stock } = productDetails;
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-16">
      <div>
        <img src={images[0]} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-md">Specification: {description}</p>
        <p className="text-lg">Brand: {brand}</p>
        <p className="text-xl text-blue-500 font-semibold">Price: ${price}</p>
        <p>Stock Available: {stock}</p>
      </div>
    </section>
  );
};

export default ProductDetails;
