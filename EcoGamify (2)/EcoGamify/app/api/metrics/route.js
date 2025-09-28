import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const metrics = await prisma.metric.findMany();
  return NextResponse.json(metrics);
}
