# Hướng dẫn kết nối Form với Google Sheets

## Bước 1: Tạo Google Sheet

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo một Sheet mới
3. Copy **ID của Sheet** từ URL:
   - URL có dạng: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy phần `SPREADSHEET_ID`

## Bước 2: Tạo Google Apps Script

1. Trong Google Sheet, chọn **Extensions** > **Apps Script**
2. Xóa code mặc định và dán code từ file `google-apps-script.js`
3. Thay đổi `SPREADSHEET_ID` trong code bằng ID Sheet của bạn:
   ```javascript
   const SPREADSHEET_ID = 'ID_CUA_BAN_DAY';
   ```
4. Lưu project (Ctrl+S hoặc Cmd+S)
5. Đặt tên cho project (ví dụ: "Form Registration Handler")

## Bước 3: Cấp quyền và Deploy

1. Chạy hàm `doPost()` một lần để cấp quyền:
   - Chọn hàm `doPost` từ dropdown
   - Click **Run**
   - Chấp nhận quyền truy cập Google Sheets

2. Deploy Web App:
   - Click **Deploy** > **New deployment**
   - Chọn icon **Web app** (hoặc "Select type" > "Web app")
   - Cấu hình:
     - **Description**: "Form Registration Handler"
     - **Execute as**: Me
     - **Who has access**: Anyone
   - Click **Deploy**
   - Copy **Web App URL** (sẽ có dạng: `https://script.google.com/macros/s/...`)

## Bước 4: Cấu hình trong Next.js

1. Tạo file `.env.local` trong thư mục gốc của project (nếu chưa có)
2. Thêm biến môi trường:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Thay `YOUR_SCRIPT_ID` bằng URL Web App bạn đã copy ở bước 3

## Bước 5: Test

1. Restart development server:
   ```bash
   npm run dev
   # hoặc
   pnpm dev
   ```
2. Điền form và submit
3. Kiểm tra Google Sheet để xem dữ liệu đã được ghi chưa

## Lưu ý

- **Tất cả các trường trong form đều bắt buộc** (đã được cấu hình)
- Form sẽ validate:
  - Số điện thoại: 10-11 chữ số
  - Email: định dạng email hợp lệ
- Nếu có lỗi, kiểm tra Console trong trình duyệt (F12)
- Đảm bảo Google Apps Script đã được deploy với quyền "Anyone"

## Troubleshooting

### Lỗi "Chưa cấu hình Google Apps Script URL"
- Kiểm tra file `.env.local` đã có biến `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` chưa
- Đảm bảo URL bắt đầu bằng `https://script.google.com/macros/s/...`
- Restart development server sau khi thêm biến môi trường

### Dữ liệu không ghi vào Sheet
- Kiểm tra `SPREADSHEET_ID` trong Apps Script có đúng không
- Kiểm tra quyền truy cập của Apps Script
- Kiểm tra Console trong trình duyệt để xem lỗi chi tiết

### Lỗi CORS
- Code đã sử dụng `mode: "no-cors"` để tránh lỗi CORS
- Nếu vẫn gặp lỗi, kiểm tra lại URL deployment

