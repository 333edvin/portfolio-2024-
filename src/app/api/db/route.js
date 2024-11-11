// app/api/db/route.js
import fs from 'fs';
import path from 'path';

export async function GET(req) {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export function POST() {
  return new Response('Method Not Allowed', { status: 405 });
}

export function PUT() {
  return new Response('Method Not Allowed', { status: 405 });
}

export function DELETE() {
  return new Response('Method Not Allowed', { status: 405 });
}
