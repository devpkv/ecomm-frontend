import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL+"/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
// export const fetchProducts = async () => {
//   try {
//     const response = await api.get("/products");
//     return response.data;
    
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// }   

