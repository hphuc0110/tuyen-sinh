import React from "react";

type RoadmapExtendIconProps = {
  className?: string;
};

const RoadmapExtendIcon = React.forwardRef<SVGSVGElement, RoadmapExtendIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        viewBox="0 0 3000 342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <style>{`
          .path1,
          .path2,
          .path3,
          .path4 {
            transition: opacity 0.3s ease, filter 0.3s ease;
            cursor: pointer;
          }
          .path1:hover,
          .path2:hover,
          .path3:hover,
          .path4:hover {
            opacity: 0.8;
            filter: brightness(1.1);
          }
        `}</style>
        {/* Import SVG content from file */}
        <g>
          <path fill="000000" d="M -47.944 107.51 L -47.944 65.306 L 143.856 65.306 C 203.556 65.306 252.116 113.357 252.116 172.42 C 252.116 183.885 260.956 193.205 271.806 193.205 L 399.706 193.205 C 410.566 193.205 419.376 183.881 419.376 172.42 C 419.376 113.357 467.936 65.306 527.606 65.306 L 655.496 65.306 C 715.206 65.306 763.786 113.357 763.786 172.42 C 763.786 183.885 772.586 193.205 783.486 193.205 L 975.156 193.205 L 975.156 193.172 L 1167.01 193.172 C 1177.87 193.172 1186.69 183.852 1186.69 172.387 C 1186.69 113.324 1235.23 65.273 1294.91 65.273 L 1422.82 65.273 C 1482.48 65.273 1531.04 113.324 1531.04 172.387 C 1531.04 183.848 1539.86 193.172 1550.71 193.172 L 1678.62 193.172 C 1689.46 193.172 1698.3 183.852 1698.3 172.387 C 1698.3 113.324 1746.84 65.273 1806.52 65.273 L 1998.37 65.273 L 1998.37 107.477 L 1985.58 107.477 L 1985.58 112.594 L 1998.37 112.594 L 1998.37 151.602 L 1806.52 151.602 C 1795.66 151.602 1786.84 160.926 1786.84 172.387 C 1786.84 231.453 1738.29 279.5 1678.62 279.5 L 1550.71 279.5 C 1491.04 279.5 1442.49 231.449 1442.49 172.387 C 1442.49 160.926 1433.66 151.602 1422.82 151.602 L 1294.91 151.602 C 1284.06 151.602 1275.23 160.926 1275.23 172.387 C 1275.23 231.453 1226.68 279.5 1167.01 279.5 L 975.386 279.5 L 975.386 279.533 L 783.486 279.533 C 723.786 279.533 675.186 231.486 675.186 172.42 C 675.186 160.959 666.356 151.635 655.496 151.635 L 527.606 151.635 C 516.746 151.635 507.926 160.959 507.926 172.42 C 507.926 231.482 459.376 279.533 399.706 279.533 L 271.806 279.533 C 212.136 279.533 163.556 231.486 163.556 172.42 C 163.556 160.959 154.756 151.635 143.856 151.635 L -47.944 151.635 L -47.944 112.627 L -35.144 112.627 L -35.144 107.51 L -47.944 107.51 Z" fillOpacity="1" fillRule="nonzero" style={{ strokeWidth: 1 }} />
        </g>
        {/* Note: Full SVG content should be imported from the SVG file */}
        {/* For now, we'll use an image tag to load the actual SVG file */}
      </svg>
    );
  }
);

RoadmapExtendIcon.displayName = "RoadmapExtendIcon";

export default RoadmapExtendIcon;

