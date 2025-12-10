import { NextResponse } from 'next/server';
import { electionMockData } from '@/mocks/mock-data';

export async function GET() {
  return NextResponse.json(electionMockData);
}
