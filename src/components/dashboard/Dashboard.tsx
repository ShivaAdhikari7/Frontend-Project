import { useDispatch } from "react-redux";
import useApiData from "../../hooks/useApiData";
import Loading from "../shared/Loading";
import ErrorCard from "../shared/ErrorCard";
import type { AppDispatch } from "../../store";
import { fetchProductsAndCategories } from "../../store/slices/productSlice";
import DashboardStats from "./components/DashboardStats";

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
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Product analytics and performance overview
          </p>
        </div>

        <DashboardStats />
      </div>
    </div>
  );
};
