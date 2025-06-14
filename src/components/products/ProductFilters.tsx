import SelectInput from "../shared/SelectInput";
import SearchInput from "../shared/SearchInput";
import { Filter } from "lucide-react";
const ProductFilters: React.FC<{
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  itemsPerPage: number;
  onItemsPerPageChange: (value: string) => void;
}> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  }));

  const itemsPerPageOptions = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search products..."
      />

      <SelectInput
        value={selectedCategory}
        onChange={onCategoryChange}
        options={categoryOptions}
        placeholder="All Categories"
        icon={Filter}
      />

      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-700 ">Show:</label>
        <SelectInput
          value={itemsPerPage.toString()}
          onChange={onItemsPerPageChange}
          options={itemsPerPageOptions}
          className="w-20"
        />
      </div>
    </div>
  );
};
export default ProductFilters;
