import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();
  // Here you would send an email or store the message
  // For demo, just echo back
  return NextResponse.json({ success: true, name, email, message });
}
