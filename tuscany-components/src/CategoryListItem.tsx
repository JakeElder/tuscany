import React from "react";
import { Category } from "@mindfulstudio/tuscany-types/Category";

const CategoryListItem: React.FC<Category> = ({ name, places }) => {
  return (
    <div>
      {name}
      {places?.join}
    </div>
  );
};

export default CategoryListItem;
