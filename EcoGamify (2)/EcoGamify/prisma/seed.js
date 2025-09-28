// Demo data seeder for EcoGamify
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com', ecoPoints: 1200, badges: ['Green Champion'], role: 'student' },
      { name: 'Bob', email: 'bob@example.com', ecoPoints: 950, badges: ['Tree Planter'], role: 'student' },
      { name: 'NGO Admin', email: 'ngo@example.com', ecoPoints: 0, badges: [], role: 'ngo' },
    ],
    skipDuplicates: true,
  });

  const ngo = await prisma.nGO.create({
    data: {
      name: 'Green Earth Foundation',
      description: 'Promoting sustainability in schools.',
      email: 'contact@greenearth.org',
      website: 'https://greenearth.org',
      impactStories: {
        create: [
          { title: 'Plastic-Free School', content: 'Our campaign helped 10 schools go plastic-free.' },
        ],
      },
    },
  });

  await prisma.metric.createMany({
    data: [
      { type: 'CO2 Saved', value: 1200, unit: 'kg' },
      { type: 'Trees Planted', value: 350, unit: 'count' },
      { type: 'Water Saved', value: 5000, unit: 'liters' },
    ],
  });
}

main().finally(() => prisma.$disconnect());
