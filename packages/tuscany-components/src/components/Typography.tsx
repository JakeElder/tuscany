import React from "react";
import css from "@styled-system/css";
import _ from "lodash";

type TypeProps = {
  as: string;
  children: React.ReactNode;
};

type CSSMap = {
  fontFamily: "heading" | "body";
  fontWeight?: "regular" | "bold";
  fontSize: number;
  color: string;
};

type ModifierName = "disabled" | "active" | "inactive";
type ModifierList = ModifierName | undefined;

type ModifierMap<T extends ModifierList> = Record<
  Exclude<T, undefined>,
  Partial<CSSMap>
>;

function mergeCSS(
  modifiers: ModifierName[],
  baseCSS: CSSMap,
  modifierCSS: Partial<ModifierMap<ModifierName>>
) {
  return _.reduce(
    modifiers,
    (result, key) => {
      return { ...result, ...modifierCSS[key] };
    },
    baseCSS
  );
}

type WithModifierBooleans<T, U extends ModifierList> = T &
  Partial<Record<Exclude<U, undefined>, boolean>>;

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

function copyFactory<T extends ModifierList = undefined>(
  baseCSS: CSSMap,
  modifierCSS?: ModifierMap<T>
) {
  function Type({
    children,
    as,
    ...modifiers
  }: WithModifierBooleans<TypeProps, T>) {
    const activeModifiers: any = Object.keys(modifiers).filter((m) => {
      if (hasKey(modifiers, m)) {
        return modifiers[m];
      }
    });

    const mergedCSS =
      activeModifiers.length > 0 && typeof modifierCSS !== "undefined"
        ? mergeCSS(activeModifiers, baseCSS, modifierCSS)
        : baseCSS;

    const Component = as as React.ReactType;
    return <Component children={children} css={css(mergedCSS)} />;
  }

  Type.defaultProps = { as: "span" } as Partial<TypeProps>;

  return Type;
}

export const LongformHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 5,
  color: "shades.0",
});

export const ExerciseName = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "shades.0",
});

export const LongformDetail = copyFactory({
  fontFamily: "heading",
  fontSize: 3,
  color: "shades.6",
});

export const ExerciseSubheading = LongformDetail;

export const LongformSubheading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  fontWeight: "bold",
  color: "shades.0",
});

export const ExerciseHeading = LongformSubheading;

export const LongformCopy = copyFactory({
  fontFamily: "body",
  fontSize: 2,
  color: "shades.1",
});

export const FigCaption = copyFactory({
  fontFamily: "body",
  fontSize: 2,
  color: "shades.5",
});

export const LongformSectionHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  fontWeight: "bold",
  color: "brand.0.0",
});

export const ChecklistHeading = copyFactory<"inactive">(
  {
    fontFamily: "heading",
    fontSize: 3,
    color: "shades.3",
  },
  {
    inactive: {
      color: "shades.7",
    },
  }
);

export const MastHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 4,
  color: "shades.2",
});

export const MastCaption = copyFactory({
  fontFamily: "body",
  fontSize: 0,
  color: "shades.5",
});

export const OrientationHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 3,
  color: "shades.4",
});

export const OrientationSummary = copyFactory({
  fontFamily: "body",
  fontSize: 1,
  color: "shades.6",
});

export const TOCHeading = copyFactory({
  fontFamily: "heading",
  fontSize: 1,
  fontWeight: "bold",
  color: "shades.4",
});

export const TOCSubheading = copyFactory({
  fontFamily: "heading",
  fontSize: 2,
  color: "shades.4",
});

export const ChapterLink = copyFactory({
  fontFamily: "body",
  fontSize: 3,
  color: "link.1",
});

export const IconLink = ChapterLink;

export const GridHeader = copyFactory<"active">(
  {
    fontFamily: "heading",
    fontSize: 5,
    color: "shades.8",
  },
  {
    active: {
      color: "shades.3",
    },
  }
);

export const PhaseStep = copyFactory<"active">(
  {
    fontFamily: "heading",
    fontSize: 4,
    color: "shades.8",
  },
  {
    active: {
      color: "brand.0.0",
    },
  }
);

export const Button = copyFactory<"disabled">(
  {
    fontFamily: "heading",
    fontSize: 3,
    color: "link.0",
  },
  {
    disabled: {
      color: "shades.8",
    },
  }
);
