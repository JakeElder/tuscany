import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "@emotion/styled";
import {
  LongformHeading,
  LongformDetail,
  LongformSubheading,
  LongformCopy,
  FigCaption,
  LongformSectionHeading,
  ChecklistHeading,
  MastHeading,
  MastCaption,
  OrientationHeading,
  OrientationSummary,
  TOCHeading,
  TOCSubheading,
  ChapterLink,
  GridHeader,
  PhaseStep,
  Button,
} from "../src/components/Typography";

export default {
  title: "Foundation / Typography",
  parameters: {
    controls: {
      disable: true,
    },
  },
} as Meta;

type TextStyle = {
  ids: string[];
  Component: React.ReactType;
  description: string;
  variants?: {
    [key: string]: string;
  };
};

const textStyles: TextStyle[] = [
  {
    ids: ["Longform Heading", "Exercise Name"],
    Component: LongformHeading,
    description: "Fantasque Sans Mono Regular 32px #000",
  },
  {
    ids: ["Longform Detail", "Exercise Subheading"],
    Component: LongformDetail,
    description: "Fantasque Sans Mono Regular 20px #999",
  },
  {
    ids: ["Longform Subheading", "Exercise Heading"],
    Component: LongformSubheading,
    description: "Fantasque Sans Mono Bold 24px #000",
  },
  {
    ids: ["Longform Copy"],
    Component: LongformCopy,
    description:
      "Fantasque Sans Mono regular 16px #222. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. ",
  },
  {
    ids: ["Fig Caption"],
    Component: FigCaption,
    description: "Fantasque Sans Mono regular 16px #888",
  },
  {
    ids: ["Longform Section Heading"],
    Component: LongformSectionHeading,
    description: "Fantasque Sans Mono Bold 24px #32B66B",
  },
  {
    ids: ["Checklist Heading"],
    Component: ChecklistHeading,
    description: "Fantasque Sans Mono Regular 20px #555",
    variants: {
      inactive: "Fantasque Sans Mono Regular 20px #CCC",
    },
  },
  {
    ids: ["Mast Heading"],
    Component: MastHeading,
    description: "Fantasque Sans Mono Regular 24px #444",
  },
  {
    ids: ["Mast Caption"],
    Component: MastCaption,
    description: "Fantasque Sans Mono Regular 12px #888",
  },
  {
    ids: ["Orientation Heading"],
    Component: OrientationHeading,
    description: "Fantasque Sans Mono Regular 20px #666",
  },
  {
    ids: ["Orientation Summary"],
    Component: OrientationSummary,
    description: "Fantasque Sans Mono Regular 14px #999",
  },
  {
    ids: ["TOC Heading"],
    Component: TOCHeading,
    description: "Fantasque Sans Mono Bold 14px #888",
  },
  {
    ids: ["TOC Subheading"],
    Component: TOCSubheading,
    description: "Fantasque Sans Mono Regular 16px #888",
  },
  {
    ids: ["Chapter Link", "Icon Link"],
    Component: ChapterLink,
    description: "Fantasque Sans Mono Regular 20px #4499CC",
  },
  {
    ids: ["Grid Header"],
    Component: GridHeader,
    description: "Fantasque Sans Mono Regular 32px #DDD",
    variants: {
      active: "Fantasque Sans Mono Regular 32px #555",
    },
  },
  {
    ids: ["Phase Step"],
    Component: PhaseStep,
    description: "Fantasque Sans Mono Regular 24px #DDD",
    variants: {
      active: "Fantasque Sans Mono Regular 24px #32B66B",
    },
  },
  {
    ids: ["Button"],
    Component: Button,
    description: "Fantasque Sans Mono Regular 20px #4499CC",
    variants: {
      disabled: "Fantasque Sans Mono Regular 20px #CCC",
    },
  },
];

const Table = styled.table`
  width: 100%;
  border: 1px solid #d9d9d9;
`;

const TR = styled.tr`
  border-bottom: 1px solid #d9d9d9;
`;

const IDTD = styled.td`
  white-space: nowrap;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: #f8f8f8;
  color: #777;
  padding: 26px 20px;
`;

const DescriptionTD = styled.td`
  vertical-align: middle;
  padding-left: 22px;
  padding: 12px 16px 12px 22px;
`;

const Variant = styled.div`
  padding-top: 4px;
`;

const Variants = ({ TextStyle }: { TextStyle: TextStyle }) => {
  const { variants, Component, description } = TextStyle;
  const base = <Component>{description}</Component>;
  if (typeof variants === "undefined") {
    return base;
  }
  return (
    <>
      {base}
      {Object.keys(variants).map((n) => (
        <Variant key={n}>
          {React.createElement(Component, {
            [n]: true,
            children: `[${n}] ${variants[n]}`,
          })}
        </Variant>
      ))}
    </>
  );
};

export const Default = () => (
  <Table>
    <tbody>
      {textStyles.map((TextStyle) => {
        return (
          <TR key={TextStyle.ids.join()}>
            <IDTD>
              {TextStyle.ids.map((id) => (
                <div style={{ marginBottom: 4 }} key={id}>
                  {id}
                </div>
              ))}
            </IDTD>
            <DescriptionTD>
              <Variants TextStyle={TextStyle} />
            </DescriptionTD>
          </TR>
        );
      })}
    </tbody>
  </Table>
);
