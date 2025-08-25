import api from "../../api/api";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await api.get("/public/getAllProduct");
    const product = response.data;
    dispatch({
        type : 'FETCH_PRODUCTS',
        payload: product.content,
        pageNumber: product.pageNumber,
        totalPages: product.totalPages,
        totalElements: product.totalElements,
        pageSize: product.pageSize,
        lastPage: product.lastPage,
    })

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
} 