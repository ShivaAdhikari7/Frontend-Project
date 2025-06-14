import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ProductState } from "../../types/types";

const initialState: ProductState = {
  products: [],
  categories: [],
  loading: false,
  error: null,
};

export const fetchProductsAndCategories = createAsyncThunk(
  "products/fetchProductsAndCategories",
  async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const [productsRes, categoriesRes] = await Promise.all([
      fetch(`${baseUrl}/products`),
      fetch(`${baseUrl}/products/categories`),
    ]);

    if (!productsRes.ok) {
      throw new Error("Failed to fetch products");
    }
    if (!categoriesRes.ok) {
      throw new Error("Failed to fetch categories");
    }

    const products = await productsRes.json();
    const categories = await categoriesRes.json();
    return { products, categories };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAndCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAndCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.categories = action.payload.categories;
      })
      .addCase(fetchProductsAndCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default productSlice.reducer;
