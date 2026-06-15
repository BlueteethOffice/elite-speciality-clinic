import { NextResponse } from 'next/server';
import { fetchGoogleReviews } from '@/lib/googleReviews';

export async function GET() {
  const data = await fetchGoogleReviews();
  
  if (data) {
    return NextResponse.json({ success: true, data });
  }

  return NextResponse.json({ 
    success: false, 
    message: 'Google Reviews not configured or failed to fetch' 
  });
}
