import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import IndexPage, { Props } from "../src/components/IndexPage";
import { Category } from "@mindfulstudio/tuscany-types/Category";

export default {
  title: "Pages / Index Page",
  component: IndexPage,
} as Meta;

const categories: Category[] = [
  { id: "1", name: "Food & Drink" },
  { id: "2", name: "Parks & Nature" },
  { id: "3", name: "Markets" },
  { id: "4", name: "Property Rentals" },
  { id: "5", name: "Land for Sale" },
];

const Template = (args) => <IndexPage {...args} />;
export const Default = Template.bind({});

Default.args = {
  categories,
};
