import { FiX } from 'react-icons/fi';

const ProductModal = ({ open, onClose, product }) => {
  if (!open || !product) return null;

  const {  productId,
    productName,
    productDescription,
    productImage,
    productPrice,
    productDiscount,
    productDiscountedPrice,
    productStock } = product;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/400x400/EEE/31343C?font=roboto&text=${encodeURIComponent(productName)}`;
    e.target.className = "w-40 h-40 object-contain mx-auto rounded mb-4 bg-gray-100";
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </button>
        <img
          src={'https://placehold.co/600x400.png'}
          alt={productName}
          className="w-70 h-70 object-cover mx-auto rounded mb-4"
          onError={handleImageError}
        />
        <h2 className="text-xl font-bold mb-2 text-center">{productName}</h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-gray-400 line-through">₹{productPrice}</span>
          <span className="text-green-600 font-bold">₹{productDiscountedPrice}</span>
          {productDiscount > 0 && (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
              {productDiscount}% OFF
            </span>
          )}
        </div> 
        <p className="text-gray-700 text-center">{productDescription}</p>
      </div>
    </div>
  );
};

export default ProductModal;