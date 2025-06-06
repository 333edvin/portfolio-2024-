// app/api/db/route.js
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'db.json');

export async function GET() {
  try {
    const jsonData = await fs.promises.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  }
}
