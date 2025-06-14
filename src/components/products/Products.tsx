import useApiData from "../../hooks/useApiData";
import useProductFilters from "../../hooks/useProductFilters";
import usePagination from "../../hooks/usePagination";
import Loading from "../shared/Loading";
import ProductFilters from "./ProductFilters";
import EmptyState from "../shared/EmptyState";
import ProductTable from "./ProductTable";
import Pagination from "./Pagination";
import { Package } from "lucide-react";
const Products = () => {
  const { products, categories, loading } = useApiData();

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductFilters(products);

  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    currentItems,
    resetPage,
  } = usePagination(filteredProducts);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    resetPage();
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    resetPage();
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value));
    resetPage();
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
            <p className="text-gray-600">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </p>
          </div>
        </div>

        <ProductFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          categories={categories}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        {currentItems.length === 0 ? (
          <EmptyState
            icon={Package}
            title="No products found"
            description="Try adjusting your search or filter criteria"
            action={{
              label: "Clear filters",
              onClick: () => {
                setSearchTerm("");
                setSelectedCategory("");
              },
            }}
          />
        ) : (
          <ProductTable products={currentItems} />
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
