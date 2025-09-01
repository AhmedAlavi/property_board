import { prisma } from "./db.js";

async function main() {
  await prisma.property.deleteMany();
  await prisma.property.createMany({
    data: [
      {
        title: "Downtown Studio",
        price: 89000,
        location: "Dubai Marina",
        description: "Cozy studio near the tram.",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Palm Jumeirah 2BR",
        price: 610000,
        location: "Palm Jumeirah",
        description: "Sea view, modern interior.",
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  });
  console.log("Seeded properties.");
}

main().finally(() => process.exit(0));
