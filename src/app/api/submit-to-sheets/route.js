// app/api/submit-to-sheets/route.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    // Input validation
    if (!name || !email || !topic || !message) {
      return NextResponse.json({ 
        error: 'Semua field harus diisi',
        missing: { name: !name, email: !email, topic: !topic, message: !message }
      }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Format email tidak valid' 
      }, { status: 400 });
    }

    // Check required environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error('Missing required environment variables');
      return NextResponse.json({ 
        error: 'Server configuration error' 
      }, { status: 500 });
    }

    // FIX: Handle private key formatting for Vercel
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    // If private key is base64 encoded (recommended for Vercel)
    if (!privateKey.includes('BEGIN PRIVATE KEY')) {
      try {
        privateKey = Buffer.from(privateKey, 'base64').toString('utf8');
      } catch (e) {
        console.error('Failed to decode base64 private key:', e);
      }
    }
    
    // Normalize line breaks for different environments
    privateKey = privateKey
      .replace(/\\n/g, '\n')
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n');

    // Ensure proper key format
    if (!privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
      console.error('Invalid private key format');
      return NextResponse.json({ 
        error: 'Invalid server configuration' 
      }, { status: 500 });
    }

    console.log('Environment check:', {
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
      privateKeyStartsWith: privateKey.substring(0, 30),
      nodeEnv: process.env.NODE_ENV
    });

    // Setup Google Auth with improved error handling
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    // Test auth before proceeding
    try {
      const authClient = await auth.getClient();
      console.log('Auth client created successfully');
    } catch (authError) {
      console.error('Auth error:', authError);
      return NextResponse.json({ 
        error: 'Authentication failed',
        details: process.env.NODE_ENV === 'development' ? authError.message : undefined
      }, { status: 500 });
    }

    // Create sheets instance
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare timestamp in Indonesian locale
    const timestamp = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Makassar',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Map topic ID to readable text
    const topicMap = {
      'tambah-informasi': 'Menambahkan Informasi Tanaman',
      'saran-website': 'Saran Perbaikan Website', 
      'lapor-masalah': 'Laporkan Masalah Teknis',
      'panduan-p2l': 'Pertanyaan tentang P2L'
    };

    const topicText = topicMap[topic] || topic;

    // Data to append to sheet
    const values = [
      [
        timestamp,
        name.trim(),
        email.toLowerCase().trim(),
        topicText,
        message.trim(),
        'Pending' // Default status
      ]
    ];

    // First, try to get sheet info to validate access
    try {
      await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
      });
      console.log('Sheet access verified');
    } catch (sheetError) {
      console.error('Sheet access error:', sheetError);
      return NextResponse.json({ 
        error: 'Google Sheet tidak dapat diakses',
        details: process.env.NODE_ENV === 'development' ? sheetError.message : undefined
      }, { status: 500 });
    }

    // Append data to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // Adjust column range as needed
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values,
      },
    });

    console.log('Data successfully added to sheet:', {
      updatedCells: response.data.updates?.updatedCells,
      updatedRange: response.data.updates?.updatedRange
    });

    // Return success response
    return NextResponse.json({ 
      success: true,
      message: 'Data berhasil disimpan',
      timestamp: timestamp,
      updatedRange: response.data.updates?.updatedRange
    });

  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    
    // Provide informative error messages
    let errorMessage = 'Terjadi kesalahan saat menyimpan data';
    
    if (error.message.includes('Unable to parse range')) {
      errorMessage = 'Kesalahan konfigurasi sheet range';
    } else if (error.message.includes('The caller does not have permission')) {
      errorMessage = 'Tidak memiliki akses ke Google Sheet';
    } else if (error.message.includes('Requested entity was not found')) {
      errorMessage = 'Google Sheet tidak ditemukan';
    } else if (error.code === 'ENOTFOUND' || error.message.includes('network')) {
      errorMessage = 'Masalah koneksi jaringan';
    } else if (error.message.includes('DECODER') || error.message.includes('unsupported')) {
      errorMessage = 'Kesalahan konfigurasi private key';
    }

    return NextResponse.json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ 
    error: 'Method not allowed. Use POST to submit data.' 
  }, { status: 405 });
}