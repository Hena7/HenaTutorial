import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.upsert({
    where: { slug: "full-stack-react" },
    update: {},
    create: {
      slug: "full-stack-react",
      title: "Full Stack React & Next.js",
      description:
        "Master the modern web stack with this comprehensive tutorial.",
      imageUrl: "/course-react.jpg",
      lessons: {
        create: [
          {
            slug: "introduction",
            title: "1. Introduction to Next.js",
            description: "Why we use Next.js and how it differs from React.",
            order: 1,
            videoId: "dQw4w9WgXcQ", // placeholder
          },
          {
            slug: "setup",
            title: "2. Environment Setup",
            description: "Getting VS Code and Node.js ready.",
            order: 2,
            videoId: "dQw4w9WgXcQ",
          },
          {
            slug: "routing",
            title: "3. App Router Basics",
            description: "How file-based routing works efficiently.",
            order: 3,
            videoId: "dQw4w9WgXcQ",
          },
        ],
      },
    },
  });
  console.log({ course });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
