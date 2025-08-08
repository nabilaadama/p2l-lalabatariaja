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

    // Setup Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

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
    await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

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

    // Log for debugging (optional, remove in production)
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