import { twMerge } from "tailwind-merge";
import React from "react";
import * as icons from "./icons";

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
};

const Icon = React.forwardRef<SVGSVGElement, Props>((props, ref) => {
  const { className, containerClassName, icon, children = null } = props;

  const IconComponent = icons[icon] as React.ComponentType<{
    className?: string;
    ref?: React.Ref<SVGSVGElement>;
  }>;

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <IconComponent
      className={twMerge("fill-current", className)}
      ref={ref}
    />
  );
});

Icon.displayName = "Icon";

export default Icon;
