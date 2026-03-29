import { prisma } from './db';

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Florecita",
        email: "florecita@example.com"
      },
      {
        name: "Wenny",
        email: "wenny@example.com"
      },
      {
        name: "Xavier",
        email: "xavier@example.com"
      }
    ]
  })
}

main().finally(() => prisma.$disconnect())