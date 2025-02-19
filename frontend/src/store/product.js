import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success: false, message:"Por favor prencha todos os campos"};
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newProduct)
        })

        const data = await res.json();
        set((state) => ({
            products: [...state.products, data.data]
        }))
        return {success: true, message:"Produto criado com sucesso"}

    },
    fetchProducts: async () => {
        
        const response = await fetch("http://localhost:5000/api/products")
        const data = await response.json();
        set({ products: data.data});
    },
    deleteProducts: async (productId) => {
        
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
        
        const res = await fetch(`${API_URL}/api/products/${productId}`, {
            method: 'DELETE'
        })
        const data = await res.json();

        if (!data.success) return { success: false, message: data.message };

        set((state) => ({
            products: state.products.filter(product => product._id !== productId)
        }));
        return { success: true, message: data.message };
        
    }

    
}))