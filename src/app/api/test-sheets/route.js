// app/api/test-sheets/route.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if required environment variables are set
    const requiredEnvVars = ['GOOGLE_CLIENT_EMAIL', 'GOOGLE_PRIVATE_KEY', 'GOOGLE_SHEET_ID'];
    const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingEnvVars.length > 0) {
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        missing: missingEnvVars
      }, { status: 500 });
    }

    // Setup Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Test: Get sheet info
    const sheetResponse = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    // Test: Get sheet data (first row to check structure)
    const dataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1:F1', // Get header row
    });

    return NextResponse.json({
      success: true,
      sheetInfo: {
        title: sheetResponse.data.properties?.title,
        sheetId: sheetResponse.data.spreadsheetId,
        url: `https://docs.google.com/spreadsheets/d/${sheetResponse.data.spreadsheetId}`,
        sheetsCount: sheetResponse.data.sheets?.length || 0,
        firstSheetName: sheetResponse.data.sheets?.[0]?.properties?.title || 'Unknown'
      },
      headerRow: dataResponse.data.values?.[0] || [],
      message: 'Koneksi ke Google Sheets berhasil!',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Test connection error:', error);
    
    let errorMessage = 'Gagal terhubung ke Google Sheets';
    let errorCode = 'UNKNOWN_ERROR';
    
    if (error.message.includes('The caller does not have permission')) {
      errorMessage = 'Service account tidak memiliki akses ke spreadsheet';
      errorCode = 'PERMISSION_DENIED';
    } else if (error.message.includes('Requested entity was not found')) {
      errorMessage = 'Spreadsheet tidak ditemukan dengan ID yang diberikan';
      errorCode = 'SPREADSHEET_NOT_FOUND';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Masalah koneksi jaringan ke Google Sheets API';
      errorCode = 'NETWORK_ERROR';
    }
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      errorCode: errorCode,
      details: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        stack: error.stack
      } : undefined
    }, { status: 500 });
  }
}

// Handle other HTTP methods
export async function POST() {
  return NextResponse.json({ 
    error: 'Method not allowed. Use GET to test connection.' 
  }, { status: 405 });
}