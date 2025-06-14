import { useState, useMemo, useEffect } from "react";

const usePagination = <T>(items: T[], defaultItemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const { currentItems, startIndex, endIndex } = useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      currentItems: items.slice(start, end),
      startIndex: start,
      endIndex: Math.min(end, items.length),
    };
  }, [items, validCurrentPage, itemsPerPage]);

  const resetPage = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  // Handle items per page change
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);

    const currentFirstItemIndex = (validCurrentPage - 1) * itemsPerPage;
    const newCurrentPage =
      Math.floor(currentFirstItemIndex / newItemsPerPage) + 1;
    setCurrentPage(
      Math.min(newCurrentPage, Math.ceil(items.length / newItemsPerPage))
    );
  };

  return {
    currentPage: validCurrentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage: handleItemsPerPageChange,
    totalPages,
    startIndex,
    endIndex,
    currentItems,
    resetPage,
  };
};

export default usePagination;
