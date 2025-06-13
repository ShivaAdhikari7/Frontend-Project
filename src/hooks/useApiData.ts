import { useSelector } from "react-redux";
import type { RootState } from "../store/index";

const useApiData = () => {
  const { products, categories, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  return { products, loading, categories, error };
};

export default useApiData;
