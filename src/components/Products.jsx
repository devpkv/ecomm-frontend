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
  // const products = [
  //   {
  //     productId: 1,
  //     productName: "Wireless Headphones",
  //     price: 1999,
  //     discountPrice: 1499,
  //     discount: 25.0,
  //     image: "https://placehold.co/200x200?text=Headphones",
  //     quantity: 0,
  //     description: "High-quality wireless headphones with noise cancellation."
  //   },
  //   {
  //     productId: 2,
  //     productName: "Smart Watch",
  //     price: 2999,
  //     discountPrice: 2299,
  //     discount: 10.0,
  //     image: "https://placehold.co/200x200?text=Watch",
  //     quantity: 10,
  //     description: "A stylish smart watch with fitness tracking features."
  //   },
  //   {
  //     productId: 3,
  //     productName: "Bluetooth Speaker",
  //     price: 1499,
  //     discountPrice: 999,
  //     discount: 33.0,
  //     image: "https://placehold.co/200x200?text=Speaker",
  //     quantity: 20,
  //     description: "Portable Bluetooth speaker with deep bass and long battery life."
  //   },
  //   {
  //     productId: 4,
  //     productName: "Fitness Tracker",
  //     price: 1299,
  //     discountPrice: 899,
  //     discount: 20.0,
  //     image: "https://placehold.co/200x200?text=Tracker",
  //     quantity: 25,
  //     description: "Track your daily activity and sleep with this fitness tracker."
  //   },
  //   {
  //     productId: 5,
  //     productName: "Wireless Mouse",
  //     price: 799,
  //     discountPrice: 499,
  //     discount: 15.0,
  //     image: "https://placehold.co/200x200?text=Mouse",
  //     quantity: 30,
  //     description: "Ergonomic wireless mouse with adjustable DPI."
  //   }
  // ];
 
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
