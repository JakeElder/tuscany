import React from "react";
import { Category } from "@/types/Category";

const CategoryListItem: React.FC<Category> = ({ name, places }) => {
  return (
    <div>
      {name}
      {places?.join}
    </div>
  );
};

export default CategoryListItem;
