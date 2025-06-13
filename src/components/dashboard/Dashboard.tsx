import React from "react";
import useApiData from "../../hooks/useApiData";

export const Dashboard = () => {
  const { products, categories, loading, error } = useApiData();
  console.log(categories);
  return <div>Dashboard</div>;
};
