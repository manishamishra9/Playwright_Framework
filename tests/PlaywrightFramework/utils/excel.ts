import * as XLSX from 'xlsx';

// Function to read Excel data
export async function readExcel(filePath: string) {
    const workbook = XLSX.readFile(filePath);  // Load the workbook
    const sheetName = workbook.SheetNames[0];  // Get the name of the first sheet
    const sheet = workbook.Sheets[sheetName];  // Get the sheet data
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });  // Convert the sheet to JSON
    return data;
  }
  