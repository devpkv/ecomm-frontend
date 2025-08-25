import { FaFilter } from "react-icons/fa";

const ProductFilter = () => {
  return (
    <button 
      className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      <FaFilter className="mr-2" /> Filter Products
    </button>
  );
};

export default ProductFilter;
