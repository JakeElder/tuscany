import React from "react";
import { addDecorator } from "@storybook/react";
import Theme from "../src/components/Theme";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
