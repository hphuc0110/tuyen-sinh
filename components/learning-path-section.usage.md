# Hướng dẫn sử dụng LearningPathSection

## Props để điều chỉnh kích thước SVG

Component `LearningPathSection` hỗ trợ các props sau để bạn có thể tùy chỉnh kích thước SVG:

### Props:

1. **`svgHeight`** (string | number, mặc định: `"auto"`)

   - Điều chỉnh chiều cao của SVG
   - Ví dụ: `"300px"`, `"50vh"`, `400`

2. **`svgMinHeight`** (string | number, mặc định: `"200px"`)

   - Chiều cao tối thiểu của SVG
   - Ví dụ: `"150px"`, `"20vh"`

3. **`svgMaxHeight`** (string | number, mặc định: `"none"`)

   - Chiều cao tối đa của SVG
   - Ví dụ: `"600px"`, `"80vh"`

4. **`svgWidth`** (string | number, mặc định: `"100%"`)

   - Điều chỉnh chiều rộng của SVG container
   - Ví dụ: `"800px"`, `"90vw"`, `"100%"`

5. **`svgMinWidth`** (string | number, mặc định: `"auto"`)

   - Chiều rộng tối thiểu của SVG
   - Ví dụ: `"600px"`, `"50vw"`

6. **`svgMaxWidth`** (string | number, mặc định: `"none"`)

   - Chiều rộng tối đa của SVG
   - Ví dụ: `"1200px"`, `"90vw"`

7. **`svgAspectRatio`** (string, mặc định: `"3000/342"`)

   - Tỷ lệ khung hình của SVG (width/height)
   - Ví dụ: `"16/9"`, `"4/3"`, `"3000/342"`

8. **`containerClassName`** (string, mặc định: `""`)

   - Thêm class CSS tùy chỉnh cho container
   - Ví dụ: `"my-custom-class"`

9. **`fullWidth`** (boolean, mặc định: `true`)
   - Nếu `true`, SVG sẽ full width màn hình (không có padding)
   - Nếu `false`, SVG sẽ sử dụng `svgWidth` prop
   - Ví dụ: `fullWidth={false}`

## Ví dụ sử dụng:

### 1. Kích thước mặc định (full width, auto height):

```tsx
<LearningPathSection />
```

### 2. Đặt chiều cao cố định:

```tsx
<LearningPathSection svgHeight="400px" />
```

### 3. Đặt chiều cao theo viewport:

```tsx
<LearningPathSection svgHeight="50vh" />
```

### 4. Đặt chiều cao tối thiểu và tối đa:

```tsx
<LearningPathSection svgMinHeight="300px" svgMaxHeight="600px" />
```

### 5. Thay đổi tỷ lệ khung hình:

```tsx
<LearningPathSection svgAspectRatio="16/9" />
```

### 6. Thêm class tùy chỉnh:

```tsx
<LearningPathSection containerClassName="my-custom-styles" svgHeight="500px" />
```

### 7. Đặt chiều rộng cố định:

```tsx
<LearningPathSection svgWidth="1200px" fullWidth={false} />
```

### 8. Đặt chiều rộng tối thiểu và tối đa:

```tsx
<LearningPathSection
  svgMinWidth="800px"
  svgMaxWidth="1400px"
  fullWidth={false}
/>
```

### 9. Kết hợp nhiều props:

```tsx
<LearningPathSection
  svgHeight="400px"
  svgWidth="1200px"
  svgMinHeight="300px"
  svgMaxHeight="800px"
  svgMinWidth="800px"
  svgMaxWidth="1400px"
  svgAspectRatio="3000/342"
  containerClassName="shadow-lg"
  fullWidth={false}
/>
```

## Lưu ý:

- `svgAspectRatio` sẽ bị override nếu bạn đặt `svgHeight` là giá trị cụ thể (không phải "auto")
- Để SVG full width, không cần thay đổi gì, component đã tự động xử lý
- Bạn có thể sử dụng Tailwind CSS classes thông qua `containerClassName`
