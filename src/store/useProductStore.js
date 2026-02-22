import { create } from 'zustand';
import axios from 'axios';

export const useProductStore = create((set) => ({
    products: [],
    total: 0,
    loading: false,
    error: null,

    fetchProducts: async (skip = 0, sortBy = '', order = 'asc') => {
        set({ loading: true, error: null });
        try {
            let url = `https://dummyjson.com/products?limit=12&skip=${skip}`;

            if (sortBy) {
                url += `&sortBy=${sortBy}&order=${order}`;
            }

            const response = await axios.get(url);

            set({
                products: response.data.products,
                total: response.data.total,
                loading: false
            });
        } catch (err) {
            set({ error: 'Ошибка при загрузке данных: ' + err.message, loading: false });
        }
    }
}));