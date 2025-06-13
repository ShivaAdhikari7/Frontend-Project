import SelectInput from "../shared/SelectInput";
import SearchInput from "../shared/SearchInput";
import { Filter } from "lucide-react";
const ProductFilters: React.FC<{
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
}> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}) => {
  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category.charAt(0).toUpperCase() + category.slice(1),
  }));

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search products..."
      />
      <p>Search Term is: {searchTerm}</p>
      <SelectInput
        value={selectedCategory}
        onChange={onCategoryChange}
        options={categoryOptions}
        placeholder="All Categories"
        icon={Filter}
      />
      Search Category is: {selectedCategory}
    </div>
  );
};
export default ProductFilters;
