import StatCard from "./StatsCard";
import { Tag } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Package } from "lucide-react";
import { Star } from "lucide-react";
import useApiData from "../../../hooks/useApiData";
const DashboardStats: React.FC = () => {
  const { products, categories } = useApiData();
  const totalProducts = products.length;
  const totalCategories = categories.length;
  const averagePrice =
    products.length > 0
      ? products.reduce((sum, product) => sum + product.price, 0) /
        products.length
      : 0;
  const averageRating =
    products.length > 0
      ? products.reduce((sum, product) => sum + product.rating.rate, 0) /
        products.length
      : 0;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      iconColor: "text-blue-600",
      iconBgColor: "bg-blue-50",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: Tag,
      iconColor: "text-green-600",
      iconBgColor: "bg-green-50",
    },
    {
      title: "Average Price",
      value: `$${averagePrice.toFixed(2)}`,
      icon: DollarSign,
      iconColor: "text-yellow-600",
      iconBgColor: "bg-yellow-50",
    },
    {
      title: "Average Rating",
      value: averageRating.toFixed(1),
      icon: Star,
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
