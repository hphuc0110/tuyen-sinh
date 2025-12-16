# Hướng dẫn thêm SVG Icon

## Cách 1: Thêm Icon Component (Khuyến nghị)

### Bước 1: Tạo file icon mới
Tạo file mới trong thư mục `components/icons/` với tên như `your-icon-name.tsx`

### Bước 2: Copy template và dán SVG code
```tsx
import React from "react";

type YourIconNameProps = {
  className?: string;
};

const YourIconName = React.forwardRef<SVGSVGElement, YourIconNameProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        viewBox="0 0 24 24"  // Thay đổi viewBox theo SVG của bạn
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Dán code SVG của bạn vào đây */}
      </svg>
    );
  }
);

YourIconName.displayName = "YourIconName";

export default YourIconName;
```

### Bước 3: Export trong index.ts
Mở `components/icons/index.ts` và thêm:
```tsx
import YourIconName from "./your-icon-name";
export const yourIconName = YourIconName;
```

### Bước 4: Sử dụng
```tsx
import Icon from "@/components/icon-component";

<Icon icon="yourIconName" className="w-6 h-6" />
```

## Cách 2: Thêm file SVG tĩnh

Nếu bạn muốn dùng SVG như ảnh thông thường:

1. Đặt file SVG vào thư mục `public/` (ví dụ: `public/images/my-icon.svg`)
2. Sử dụng với Next.js Image hoặc thẻ img:
```tsx
import Image from "next/image";
// hoặc
<img src="/images/my-icon.svg" alt="Icon" />
```

## Lưu ý:
- Nếu SVG có `fill="currentColor"`, màu sẽ theo `text-color` của parent
- Nếu SVG có màu cụ thể, giữ nguyên màu trong code
- `viewBox` nên giữ nguyên từ file SVG gốc

