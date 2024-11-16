import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'db.json');

export async function GET(request, { params }) {
  const { id } = params; 
  console.log(id);

  try {
    const jsonData = await fs.promises.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // Find the item in the data by ID
    const foundItem = Object.values(data).flat().find(item => item.id === parseInt(id, 10));

    if (!foundItem) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(foundItem, { status: 200 });
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return NextResponse.json({ error: 'Failed to retrieve data' }, { status: 500 });
  }
}
