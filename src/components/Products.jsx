import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaExclamationCircle, FaShoppingCart } from "react-icons/fa";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions";

const Products = () => {
  const isLoading = false; 
  const isError = false; 
  const error = "Failed to fetch"; 

  const {products} = useSelector((state) => state.products);
   // Assuming products are stored in state.products
  const dispatch = useDispatch();
  // Fetch products using the action creator

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
 
  console.log("Products:", products);
  
  const [cartCount, setCartCount] = useState(0); // Just showing cart count
 
  return (
    <div className="container bg-gray-100 my-4 mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="flex gap-3">
          {/* Filter Button Component */}
          <ProductFilter />

          {/* Cart Button */}
          <button
            onClick={() => alert(`Proceed to checkout - ${cartCount} items`)}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <FaShoppingCart className="mr-2" /> Cart ({cartCount})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {isLoading ? (
          <div className="flex items-center justify-center col-span-full py-16">
            <CgSpinner className="animate-spin text-3xl text-blue-600 mr-2" />
            <span className="text-lg font-medium">Loading...</span>
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center col-span-full py-16 text-red-600">
            <FaExclamationCircle className="text-2xl mr-2" />
            <span className="text-lg font-medium">
              Error: {error || "Something went wrong."}
            </span>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.productId} {...product} />
          )) 
        )}
      </div>
    </div>
  );
};

export default Products;
