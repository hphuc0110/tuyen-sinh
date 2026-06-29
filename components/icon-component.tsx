import { twMerge } from "tailwind-merge";
import Image from "next/image";
import React from "react";

import * as icons from "./icons";

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
};

export default function Icon(props: Props) {
  const { className, containerClassName, icon, children = null, ref } = props;

  const IconComponent = icons[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in icons`);
    return null;
  }

  // Check if IconComponent is a React component (function or class)
  if (typeof IconComponent === "function") {
    return (
      <IconComponent className={twMerge("fill-current", className)} ref={ref} />
    );
  }

  // If it's an object (like SVG image import from Next.js), render as Image
  if (IconComponent && typeof IconComponent === "object") {
    // Check if it has a src property (Next.js static import)
    if ("src" in IconComponent) {
      return (
        <div className={twMerge(containerClassName)} ref={ref}>
          <Image
            src={IconComponent.src as string}
            alt={icon}
            width={(IconComponent as any).width || 24}
            height={(IconComponent as any).height || 24}
            className={className}
          />
          {children}
        </div>
      );
    }

    // Check if it has a default export that's a component
    if ("default" in IconComponent && typeof IconComponent.default === "function") {
      const DefaultComponent = IconComponent.default;
      return (
        <DefaultComponent className={twMerge("fill-current", className)} ref={ref} />
      );
    }
  }

  // If none of the above, return null or a placeholder
  console.warn(`Icon "${icon}" is not a valid React component or image object`);
  return null;
}

Icon.displayName = "Icon";
