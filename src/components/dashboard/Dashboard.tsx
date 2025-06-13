import { useDispatch } from "react-redux";
import useApiData from "../../hooks/useApiData";
import Loading from "../common/Loading";
import ErrorCard from "../common/ErrorCard";
import type { AppDispatch } from "../../store";
import { fetchProductsAndCategories } from "../../store/slices/productSlice";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, categories, loading, error } = useApiData();

  const handleRetry = (): void => {
    dispatch(fetchProductsAndCategories());
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorCard onRetry={handleRetry} error={error} />;
  }
  console.log(categories, products);
  return <div>Dashboard</div>;
};
