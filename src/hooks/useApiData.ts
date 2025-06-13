import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/index";
import { fetchProductsAndCategories } from "../store/slices/productSlice";

const useApiData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, categories, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsAndCategories());
    }
  }, [dispatch, products.length]);

  return { products, loading, categories, error };
};

export default useApiData;
