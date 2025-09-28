import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const ngos = await prisma.nGO.findMany({
    include: { impactStories: true },
    take: 20,
  });
  return NextResponse.json(ngos);
}
