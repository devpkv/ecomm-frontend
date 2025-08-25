import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductModal from "./ProductModal";
 

const ProductCard = ({
    productId,
    productName,
    productDescription,
    productImage,
    productPrice,
    productDiscount,
    productDiscountedPrice,
    productStock
}) => {
    const [open, setOpen] = useState(false);

     const product = {
        productId,
        productName,
        productDescription,
        productImage,
        productPrice,
        productDiscount,
        productDiscountedPrice,
        productStock
    };

    // Handle image loading error
    const handleImageError = (e) => {
        e.target.src = `https://placehold.co/400x400/EEE/31343C?font=roboto&text=${encodeURIComponent(productName)}`;
        e.target.className = "w-40 h-40 object-contain mx-auto rounded mb-4 bg-gray-100";
    };  

    const isAvilable = productStock && Number(productStock) > 0;

    return (
        <>
            <div
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
                onClick={() => setOpen(true)}
            >
                {/* Product Image with Discount Badge */}
                <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 relative">
                    <img
                        src={productImage}
                        alt={productName}
                        className="object-cover w-full h-40 group-hover:opacity-80 transition"
                        onError={handleImageError}
                    />
                    {productDiscount > 0 && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {productDiscount}% OFF
                        </span>
                    )}
                </div>
                {/* Product Details */}
                <div className="flex-1 flex flex-col p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">{productName}</h3>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-gray-400 line-through">₹{productPrice}</span>
                        <span className="text-base text-green-600 font-bold">₹{productDiscountedPrice}</span>
                    </div>
                    {
                        isAvilable ? (
                             <button
                                    className="self-end p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                                    aria-label="Add to Cart"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <FaShoppingCart size={18} />
                                </button>
                        ) : (
                            <span className=" text-sm text-red-600">Out of Stock</span>
                        )
                    }
                  
                </div>
            </div>
            <ProductModal open={open} onClose={() => setOpen(false)} product={product} />
        </>
    );
};

export default ProductCard;