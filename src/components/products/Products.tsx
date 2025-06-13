import useApiData from "../../hooks/useApiData";
import useProductFilters from "../../hooks/useProductFilters";
import usePagination from "../../hooks/usePagination";
import Loading from "../shared/Loading";
import ProductFilters from "./ProductFilters";

const Products = () => {
  const { products, categories, loading } = useApiData();

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductFilters(products);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-600">{filteredProducts.length} products</p>
          </div>
        </div>

        <ProductFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default Products;
