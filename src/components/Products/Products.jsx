import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mt-16">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
