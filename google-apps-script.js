/**
 * Google Apps Script để nhận dữ liệu từ form và ghi vào Google Sheets
 * 
 * HƯỚNG DẪN SỬ DỤNG:
 * 1. Tạo một Google Sheet mới
 * 2. Mở Google Apps Script Editor (Extensions > Apps Script)
 * 3. Dán code này vào editor
 * 4. Thay đổi SPREADSHEET_ID bằng ID của Google Sheet của bạn
 * 5. Lưu và chạy hàm doPost() một lần để cấp quyền
 * 6. Deploy > New deployment > Web app
 * 7. Chọn "Execute as: Me" và "Who has access: Anyone"
 * 8. Copy URL deployment và thêm vào file .env.local với tên NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 */

// Thay đổi ID này bằng ID của Google Sheet của bạn
// ID có thể tìm thấy trong URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

function doPost(e) {
  try {
    let data = {};
    
    // Xử lý cả JSON và FormData
    if (e.postData && e.postData.contents) {
      try {
        // Thử parse JSON trước
        data = JSON.parse(e.postData.contents);
      } catch (e) {
        // Nếu không phải JSON, xử lý như FormData
        const params = e.parameter;
        data = {
          studentName: params.studentName || '',
          phone: params.phone || '',
          email: params.email || '',
          parentName: params.parentName || '',
          school: params.school || '',
          timestamp: params.timestamp || new Date().toISOString()
        };
      }
    } else if (e.parameter) {
      // Xử lý FormData từ form
      data = {
        studentName: e.parameter.studentName || '',
        phone: e.parameter.phone || '',
        email: e.parameter.email || '',
        parentName: e.parameter.parentName || '',
        school: e.parameter.school || '',
        timestamp: e.parameter.timestamp || new Date().toISOString()
      };
    }
    
    // Mở Google Sheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Kiểm tra xem header đã có chưa, nếu chưa thì tạo
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Thời gian',
        'Họ và tên Phụ huynh',
        'Số điện thoại',
        'Email',
        'Họ và tên Học sinh',
        'Trường đang theo học'
      ]);
    }
    
    // Thêm dữ liệu vào sheet
    const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    const formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');
    
    sheet.appendRow([
      formattedDate,
      data.studentName || '',
      data.phone || '',
      data.email || '',
      data.parentName || '',
      data.school || ''
    ]);
    
    // Trả về response thành công với CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Đăng ký thành công!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Trả về response lỗi
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Hàm xử lý GET request (nếu cần)
function doGet(e) {
  return doPost(e);
}

// Hàm test để kiểm tra kết nối
function testConnection() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  Logger.log('Kết nối thành công! Sheet: ' + sheet.getName());
  Logger.log('Số dòng hiện tại: ' + sheet.getLastRow());
}

