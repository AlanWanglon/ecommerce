import { create } from 'zustand';

const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://ecommerce-gpmk.onrender.com/api"
    : "http://localhost:5000/api";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Por favor prencha todos os campos" };
    }

    const res = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newProduct)
    });

    const data = await res.json();

    set((state) => ({
      products: [...state.products, data.data]
    }));

    return { success: true, message: "Produto criado com sucesso" };
  },

  fetchProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    set({ products: data.data });
  },

  deleteProducts: async (productId) => {
    const res = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: 'DELETE'
    });
    const data = await res.json();

    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.filter(product => product._id !== productId)
    }));
    return { success: true, message: data.message };
  },

  updateProduct: async (productId, updatedProduct) => {
    const res = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();

    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.map((product) =>
        product._id === productId ? data.data : product
      ),
    }));

    return { success: true, message: data.message };
  }
}));
