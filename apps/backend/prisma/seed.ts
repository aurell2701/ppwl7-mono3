import { prisma } from './db';

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Aurell",
        email: "Aurellceca@example.com"
      },
      {
        name: "Celyn",
        email: "celyn@example.com"
      },
      {
        name: "Sista",
        email: "sista@example.com"
      }
    ]
  })
}

main().finally(() => prisma.$disconnect())