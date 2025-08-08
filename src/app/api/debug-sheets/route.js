// app/api/debug-sheets/route.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Parse service account
    let serviceAccount;
    try {
      const jsonString = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, 'base64').toString('utf-8');
      serviceAccount = JSON.parse(jsonString);
    } catch (parseError) {
      serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    }

    // Setup auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccount.client_email,
        private_key: serviceAccount.private_key,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Debug info
    const debugInfo = {
      serviceAccountEmail: serviceAccount.client_email,
      sheetId: process.env.GOOGLE_SHEET_ID,
      sheetIdLength: process.env.GOOGLE_SHEET_ID?.length,
      expectedUrl: `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}/edit`
    };

    // Try to access the sheet
    let sheetError = null;
    let sheetInfo = null;

    try {
      const response = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
      });
      sheetInfo = {
        title: response.data.properties?.title,
        sheetCount: response.data.sheets?.length,
        firstSheetName: response.data.sheets?.[0]?.properties?.title
      };
    } catch (error) {
      sheetError = {
        message: error.message,
        code: error.code,
        status: error.status
      };
    }

    return NextResponse.json({
      success: !sheetError,
      debugInfo,
      sheetInfo,
      sheetError,
      instructions: {
        step1: "Pastikan Sheet ID benar dari URL Google Sheet",
        step2: "Share Google Sheet dengan service account email",
        step3: "Berikan permission 'Editor' ke service account"
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}