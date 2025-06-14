import { useDispatch } from "react-redux";
import useApiData from "../../hooks/useApiData";
import Loading from "../shared/Loading";
import ErrorCard from "../shared/ErrorCard";
import type { AppDispatch } from "../../store";
import { fetchProductsAndCategories } from "../../store/slices/productSlice";
import DashboardStats from "./DashboardStats";
import CategoryChart from "./CategoryChart";
import TopProductsList from "./TopProductList";
import Card from "../shared/Card";
import EmptyState from "../shared/EmptyState";
import { Package } from "lucide-react";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useApiData();

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card title="Categories">
            {products.length > 0 ? (
              <CategoryChart />
            ) : (
              <EmptyState
                icon={Package}
                title="No categories to display"
                description="Categories will appear here once products are loaded"
              />
            )}
          </Card>

          <Card
            title="Top Products"
            action={{ label: "View all", onClick: () => {} }}
            className="lg:col-span-2"
          >
            {products.length > 0 ? (
              <TopProductsList />
            ) : (
              <EmptyState
                icon={Package}
                title="No products available"
                description="Products will appear here once data is loaded"
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
