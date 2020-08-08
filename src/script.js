const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const allLinks = await prisma.link.findMany();
  const newLink = await prisma.link.create({
    data: {
      description: "Fullstack tutorial for GraphQL",
      url: "www.howtographql.com",
    },
  });
  console.log(allLinks);
}

main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
