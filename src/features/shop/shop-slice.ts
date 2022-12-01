import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../shared/types/product';

interface ShopState {
  products: Product[];
}

const initialState: ShopState = {
  products: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload.slice(0);
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    editProduct(state, action: PayloadAction<Product>) {
      const { id } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      Object.assign(state.products[index], action.payload);
    },
  },
});

export const { fetchProducts, addProduct, removeProduct, editProduct } =
  shopSlice.actions;
export default shopSlice.reducer;
