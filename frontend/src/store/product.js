import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        console.log("Enviando produto:", newProduct); 
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

    }
}))
