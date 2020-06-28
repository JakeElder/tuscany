import React from "react";
import CategoryListItem from "../src/CategoryListItem";
import { Category } from "@mindfulstudio/tuscany-types/Category";

export default {
  title: "CategoryListItem",
  component: CategoryListItem,
};

const category: Category = {
  id: "1",
  name: "Food and Drink",
  color: "blue",
};

export const Default = () => <CategoryListItem {...category} />;
