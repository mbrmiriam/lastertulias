import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET() {
  if (!process.env.DEEPGRAM_API_KEY) {
    return new NextResponse('Deepgram API key not found', { status: 500 });
  }

  return NextResponse.json({ apiKey: process.env.DEEPGRAM_API_KEY });
}
