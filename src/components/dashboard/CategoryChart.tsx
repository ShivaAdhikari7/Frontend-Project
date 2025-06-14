import useApiData from "../../hooks/useApiData";
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    electronics: "bg-blue-500",
    jewelery: "bg-purple-500",
    "men's clothing": "bg-green-500",
    "women's clothing": "bg-rose-500",
  };
  return colors[category] || "bg-gray-500";
};

const CategoryChart: React.FC = () => {
  const { products } = useApiData();
  const categories = [...new Set(products.map((product) => product.category))];

  const categoryData = categories.map((category) => {
    const count = products.filter(
      (product) => product.category === category
    ).length;
    const percentage = Math.round((count / products.length) * 100);
    return {
      label: category,
      value: count,
      percentage,
      color: getCategoryColor(category),
    };
  });

  return (
    <div className="space-y-4">
      {categoryData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded ${item.color}`}></div>
            <span className="font-medium text-gray-900 capitalize">
              {item.label}
            </span>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-900">
              {item.value}
            </div>
            <div className="text-sm text-gray-500">{item.percentage}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryChart;
