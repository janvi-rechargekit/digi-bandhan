/**
 * Digibandhan – Get Started form → Google Sheet
 *
 * Paste this into the Google Sheet's Extensions → Apps Script editor,
 * then Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Copy the Web app URL into the website's .env as VITE_GOOGLE_SHEET_URL.
 */
const SHEET_NAME = 'Leads';
const HEADERS = ['Timestamp', 'Name', 'Mobile Number', 'Pin Code', 'Business Email', 'Source', 'Page'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const p = e.parameter || {};
    // Leading apostrophe keeps numbers as text (no lost zeros / scientific notation)
    sheet.appendRow([
      new Date(),
      p.name || '',
      "'" + (p.mobile || ''),
      "'" + (p.pincode || ''),
      p.email || '',
      p.source || '',
      p.page || '',
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
