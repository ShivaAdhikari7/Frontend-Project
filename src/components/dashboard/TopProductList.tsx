import { Star } from "lucide-react";

import useApiData from "../../hooks/useApiData";

const TopProductsList: React.FC = ({}) => {
  const { products } = useApiData();
  const topProducts = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      {topProducts.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-lg object-cover"
              src={product.image || "/placeholder.svg"}
              alt={product.title}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">
              {product.title}
            </h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-gray-500 capitalize">
                {product.category}
              </span>
              <span className="text-sm font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            {product.rating.rate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProductsList;
